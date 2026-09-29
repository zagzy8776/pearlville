export const schoolContent = {
  placeholderNotice:
    "Some names, contact details, dates, academic figures and descriptions on this foundation build are placeholders awaiting confirmation from Pearlville International School.",
  contact: {
    phone: "+234 800 000 0000",
    phoneHref: "tel:+2348000000000",
    email: "hello@pearlville.edu.ng",
    address: "Plot 12, Pearlville Avenue, Abuja, Nigeria",
    whatsappHref: "https://wa.me/2348000000000",
    academicYear: "2026/2027",
    copyrightYear: "2026",
    officeHours: [
      { days: "Monday–Friday", hours: "Hours to be confirmed", isPlaceholder: true },
      { days: "Saturday", hours: "Hours to be confirmed", isPlaceholder: true },
    ],
  },
  principal: {
    name: "Dr. Amaka Nwosu",
    title: "Principal, Pearlville International School",
    isPlaceholder: true,
  },
  homepage: {
    quote: "We don’t just prepare students for the world. We help them believe they can make it better.",
    news: [
      { category: "Community", date: "12 June 2026", title: "Small acts, big impact: our learners lead a day of service", isPlaceholder: true },
      { category: "Campus", date: "04 June 2026", title: "A campus designed for curiosity", isPlaceholder: true },
    ],
    stats: [
      { value: "1:12", label: "Teacher-to-learner ratio", isPlaceholder: true },
      { value: "18+", label: "Years of excellence", isPlaceholder: true },
      { value: "97%", label: "University placement", isPlaceholder: true },
    ],
    learningPillars: [
      { number: "01", title: "Think deeply", text: "Strong foundations in literacy, numeracy, science and the arts give every learner the confidence to ask better questions." },
      { number: "02", title: "Live fully", text: "From sport and music to service and enterprise, our learners discover their strengths beyond the classroom." },
      { number: "03", title: "Lead kindly", text: "We grow courageous citizens who listen well, take responsibility and leave every community better than they found it." },
    ],
  },
  about: {
    hero: {
      eyebrow: "About Pearlville",
      title: "A school with\nroom to become.",
      description: "Discover the story, people and principles behind a learning community designed to help every child grow with confidence.",
      image: "/images/pearlville-campus.png",
      imageAlt: "Pearlville learners on campus",
    },
    timeline: [
      { year: "2008", title: "A clear beginning", text: "Pearlville opens its doors with a simple ambition: to make excellent, humane education accessible to more families.", isPlaceholder: true },
      { year: "2014", title: "Growing together", text: "The learning community expands across early years, primary and secondary education, with new spaces for sport and the arts.", isPlaceholder: true },
      { year: "2020", title: "Learning in motion", text: "The school strengthens its digital learning approach and deepens its focus on wellbeing, belonging and student voice.", isPlaceholder: true },
      { year: "Today", title: "Looking ahead", text: "Pearlville continues to build a future-ready school where curiosity, character and contribution matter equally.", isPlaceholder: true },
    ],
    mission: "To know every learner, nurture their potential and inspire them to make a thoughtful difference in the world.",
    vision: "A joyful, ambitious learning community where young people grow into capable, compassionate citizens.",
    motto: "Learn boldly. Live fully. Lead kindly.",
    values: [
      { title: "Curiosity", text: "We ask better questions and stay open to discovery." },
      { title: "Courage", text: "We try, reflect, recover and keep moving forward." },
      { title: "Kindness", text: "We listen carefully and treat every person with dignity." },
      { title: "Contribution", text: "We use what we learn to strengthen our communities." },
    ],
    principalMessage: "At Pearlville, education begins with relationship. When a learner feels known, they are more willing to ask questions, take healthy risks and discover what they can contribute. Our work is to create that sense of possibility every day.",
    facilities: [
      { title: "Purposeful classrooms", text: "Flexible spaces designed for focused learning, discussion and collaboration." },
      { title: "Creative studios", text: "Dedicated places for music, visual arts, performance and making." },
      { title: "Active campus", text: "Outdoor areas that make movement, play and team spirit part of school life." },
      { title: "A welcoming heart", text: "Shared spaces where families, learners and staff can connect." },
    ],
    policies: [
      { title: "Child safeguarding", text: "Our safeguarding framework is being prepared for publication in the next phase.", href: "/child-safeguarding" },
      { title: "Admissions policy", text: "The confirmed admissions policy and entry guidance will be published with the admissions experience.", href: "/admissions" },
      { title: "Privacy and terms", text: "Website privacy and terms documents will be added with the legal pages.", href: "/privacy" },
    ],
  },
  academics: {
    hero: {
      eyebrow: "Academics",
      title: "Learning that\nopens doors.",
      description: "A broad, connected curriculum gives learners the knowledge, habits and confidence to keep growing beyond the classroom.",
      image: "/images/pearlville-learning.png",
      imageAlt: "Pearlville learners collaborating in a classroom",
    },
    stages: [
      {
        id: "nursery-primary",
        title: "Nursery & Primary",
        range: "Early years and foundational learning",
        description: "Children build secure foundations through language, numeracy, exploration, creative expression and joyful routines.",
        subjects: ["Language and literacy", "Mathematics", "Science and discovery", "Creative arts", "Physical development", "Personal and social learning"],
        examBodies: ["Curriculum and assessment framework to be confirmed"],
      },
      {
        id: "junior-secondary",
        title: "Junior Secondary",
        range: "Broadening knowledge and independence",
        description: "Learners connect ideas across disciplines while developing stronger study habits, practical skills and a sense of direction.",
        subjects: ["English language", "Mathematics", "Basic science", "Humanities", "Technology", "Languages", "Creative and performing arts"],
        examBodies: ["Junior secondary assessment pathway to be confirmed"],
      },
      {
        id: "senior-secondary",
        title: "Senior Secondary",
        range: "Specialisation with purpose",
        description: "Older learners prepare for further study and meaningful contribution through rigorous subject pathways, guidance and independent projects.",
        subjects: ["English language", "Mathematics", "Sciences", "Humanities", "Business and enterprise", "Technology and design", "Arts and communication"],
        examBodies: ["Senior secondary examination pathway to be confirmed"],
      },
    ],
    calendar: [
      { term: "Term one", dates: "Dates to be confirmed", focus: "Belonging, routines and strong foundations" },
      { term: "Term two", dates: "Dates to be confirmed", focus: "Inquiry, collaboration and application" },
      { term: "Term three", dates: "Dates to be confirmed", focus: "Reflection, celebration and transition" },
    ],
    departments: ["Early years and primary", "English and languages", "Mathematics", "Science and technology", "Humanities", "Creative arts", "Sport and wellbeing"],
  },
  admissions: {
    hero: {
      eyebrow: "Admissions",
      title: "Begin your\nnext chapter.",
      description: "A clear, welcoming admissions journey for families who want to discover whether Pearlville is the right fit for their learner.",
      image: "/images/pearlville-community.png",
      imageAlt: "Pearlville students walking together on campus",
    },
    process: [
      { number: "01", title: "Make an enquiry", text: "Share a few details with our admissions team so we can understand what your family is looking for.", isPlaceholder: true },
      { number: "02", title: "Visit and connect", text: "Meet the community, explore the campus and ask the questions that matter to your family.", isPlaceholder: true },
      { number: "03", title: "Submit an application", text: "Complete the application form and provide the confirmed documents for your learner’s entry stage.", isPlaceholder: true },
      { number: "04", title: "Receive next steps", text: "Our team will confirm the assessment, decision and enrolment timeline directly with your family.", isPlaceholder: true },
    ],
    requirements: [
      "Completed application form — confirmation required",
      "Learner identity document or birth certificate — confirmation required",
      "Recent school report or learning record — confirmation required",
      "Parent or guardian identification — confirmation required",
      "Additional entry-stage documents — to be confirmed",
    ],
    fees: [
      { item: "Application fee", amount: "₦ —", note: "Not published — confirm with school" },
      { item: "Tuition: Nursery & Primary", amount: "To be confirmed", note: "No amount has been invented" },
      { item: "Tuition: Junior Secondary", amount: "To be confirmed", note: "No amount has been invented" },
      { item: "Tuition: Senior Secondary", amount: "To be confirmed", note: "No amount has been invented" },
      { item: "Transport, meals and activities", amount: "To be confirmed", note: "Optional services subject to confirmation" },
    ],
    downloads: [
      { title: "Admissions guide", text: "Approved PDF to be added after school review.", status: "Coming soon" },
      { title: "Application checklist", text: "A downloadable checklist will be added after requirements are confirmed.", status: "Coming soon" },
      { title: "School prospectus", text: "The approved prospectus will be linked here when available.", status: "Coming soon" },
    ],
    faqs: [
      { question: "Which year groups can apply?", answer: "Pearlville’s entry stages and available places vary by academic year. The confirmed availability will be shared by the admissions team." },
      { question: "Can we visit the school before applying?", answer: "Yes. Visit arrangements, dates and booking details will be confirmed by the school and added to the admissions journey." },
      { question: "Which examination pathway does the school use?", answer: "The applicable assessment and examination pathways are being confirmed with the school. No examination body is being presented as final on this page." },
      { question: "How much are the school fees?", answer: "Fee amounts are intentionally not published in this foundation build. Please contact the school for confirmed figures." },
      { question: "Is the application form connected to a backend?", answer: "Not yet. This page currently provides a validated interface only; submitted information is not sent anywhere." },
    ],
  },
  contactPage: {
    hero: {
      eyebrow: "Contact",
      title: "Let’s start a\nconversation.",
      description: "Whether you are exploring Pearlville or already part of the community, our team is ready to help with your next question.",
      image: "/images/pearlville-campus.png",
      imageAlt: "Pearlville campus surrounded by greenery",
    },
    mapNote: "Map embed placeholder — the confirmed campus address and map location will be inserted after school review.",
    officeHoursNote: "Office hours are placeholders until the school confirms the admissions and reception schedule.",
  },
} as const;

export type SchoolContent = typeof schoolContent;