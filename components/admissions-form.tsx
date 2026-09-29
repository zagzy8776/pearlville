"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { type ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const applicationSchema = z.object({
  parentName: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().min(7, "Please enter a phone number."),
  learnerName: z.string().trim().min(2, "Please enter the learner’s name."),
  entryStage: z.string().min(1, "Please choose an entry stage."),
  message: z.string().trim().min(10, "Please add at least 10 characters."),
  website: z.string().max(0, "Please leave this field empty."),
});

type ApplicationFormValues = z.infer<typeof applicationSchema>;
type FormStatus = "idle" | "loading" | "success" | "error";

export function AdmissionsForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: { parentName: "", email: "", phone: "", learnerName: "", entryStage: "", message: "", website: "" },
  });

  async function onSubmit(values: ApplicationFormValues) {
    setStatus("loading");

    try {
      // BACKEND STUB: replace this delay and console call with the approved admissions API.
      await new Promise((resolve) => setTimeout(resolve, 700));
      console.info("Admissions application stub submitted", values);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="site-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-grid form-grid-two">
        <FormField label="Parent or guardian name" id="parentName" error={errors.parentName?.message}>
          <input id="parentName" type="text" autoComplete="name" aria-invalid={Boolean(errors.parentName)} {...register("parentName")} />
        </FormField>
        <FormField label="Email address" id="application-email" error={errors.email?.message}>
          <input id="application-email" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} {...register("email")} />
        </FormField>
        <FormField label="Phone number" id="application-phone" error={errors.phone?.message}>
          <input id="application-phone" type="tel" autoComplete="tel" aria-invalid={Boolean(errors.phone)} {...register("phone")} />
        </FormField>
        <FormField label="Learner’s name" id="learnerName" error={errors.learnerName?.message}>
          <input id="learnerName" type="text" aria-invalid={Boolean(errors.learnerName)} {...register("learnerName")} />
        </FormField>
        <FormField label="Entry stage" id="entryStage" error={errors.entryStage?.message}>
          <select id="entryStage" aria-invalid={Boolean(errors.entryStage)} {...register("entryStage")}>
            <option value="">Select a stage</option>
            <option value="Nursery">Nursery</option>
            <option value="Primary">Primary</option>
            <option value="Junior Secondary">Junior Secondary</option>
            <option value="Senior Secondary">Senior Secondary</option>
          </select>
        </FormField>
      </div>
      <FormField label="How can we help?" id="application-message" error={errors.message?.message}>
        <textarea id="application-message" rows={5} aria-invalid={Boolean(errors.message)} {...register("message")} />
      </FormField>
      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="application-website">Website</label>
        <input id="application-website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>
      <p className="form-stub-note">Application form UI only — no information is sent to a backend yet.</p>
      <FormStatus status={status} success="Your enquiry has been recorded in this demo state. The admissions team has not received it yet." />
      <button className="button button-coral form-submit" type="submit" disabled={isSubmitting || status === "loading"}>
        {status === "loading" || isSubmitting ? "Sending…" : "Send enquiry"} <span aria-hidden="true">↗</span>
      </button>
    </form>
  );
}

function FormField({ label, id, error, children }: { label: string; id: string; error?: string; children: ReactNode }) {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      {children}
      {error && <p className="form-error" role="alert">{error}</p>}
    </div>
  );
}

function FormStatus({ status, success }: { status: FormStatus; success: string }) {
  if (status === "success") return <p className="form-status form-status-success" role="status">{success}</p>;
  if (status === "error") return <p className="form-status form-status-error" role="alert">The form could not be submitted. Please check the fields and try again.</p>;
  return null;
}