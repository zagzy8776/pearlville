"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { type ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().min(7, "Please enter a phone number."),
  subject: z.string().trim().min(2, "Please enter a subject."),
  message: z.string().trim().min(10, "Please add at least 10 characters."),
  website: z.string().max(0, "Please leave this field empty."),
});

type ContactFormValues = z.infer<typeof contactSchema>;
type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "", website: "" },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("loading");
    try {
      // BACKEND STUB: replace this delay and console call with the approved contact API.
      await new Promise((resolve) => setTimeout(resolve, 700));
      console.info("Contact form stub submitted", values);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="site-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-grid form-grid-two">
        <FormField label="Your name" id="contact-name" error={errors.name?.message}><input id="contact-name" type="text" autoComplete="name" aria-invalid={Boolean(errors.name)} {...register("name")} /></FormField>
        <FormField label="Email address" id="contact-email" error={errors.email?.message}><input id="contact-email" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} {...register("email")} /></FormField>
        <FormField label="Phone number" id="contact-phone" error={errors.phone?.message}><input id="contact-phone" type="tel" autoComplete="tel" aria-invalid={Boolean(errors.phone)} {...register("phone")} /></FormField>
        <FormField label="Subject" id="contact-subject" error={errors.subject?.message}><input id="contact-subject" type="text" aria-invalid={Boolean(errors.subject)} {...register("subject")} /></FormField>
      </div>
      <FormField label="Message" id="contact-message" error={errors.message?.message}><textarea id="contact-message" rows={6} aria-invalid={Boolean(errors.message)} {...register("message")} /></FormField>
      <div className="form-honeypot" aria-hidden="true"><label htmlFor="contact-website">Website</label><input id="contact-website" tabIndex={-1} autoComplete="off" {...register("website")} /></div>
      <p className="form-stub-note">Contact form UI only — no information is sent to a backend yet.</p>
      {status === "success" && <p className="form-status form-status-success" role="status">Your message has been recorded in this demo state. The school has not received it yet.</p>}
      {status === "error" && <p className="form-status form-status-error" role="alert">The form could not be submitted. Please check the fields and try again.</p>}
      <button className="button button-coral form-submit" type="submit" disabled={isSubmitting || status === "loading"}>{status === "loading" || isSubmitting ? "Sending…" : "Send message"} <span aria-hidden="true">↗</span></button>
    </form>
  );
}

function FormField({ label, id, error, children }: { label: string; id: string; error?: string; children: ReactNode }) {
  return <div className="form-field"><label htmlFor={id}>{label}</label>{children}{error && <p className="form-error" role="alert">{error}</p>}</div>;
}