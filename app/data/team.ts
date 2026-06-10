import type { TeamMember } from "@/app/types";

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Clinical Psychologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
    shortBio: "Specializing in anxiety, depression, and stress management.",
    fullBio: "Dr. Sarah Chen brings over 15 years of clinical experience helping individuals navigate anxiety, depression, and major life transitions. She utilizes Evidence-Based treatments including CBT and mindfulness-based cognitive therapy to empower her clients toward sustainable mental well-being.",
    specialties: ["Anxiety & Panic", "Depression", "Stress Management"],
    education: "Ph.D. in Clinical Psychology, Stanford University",
  },
  {
    id: 2,
    name: "Dr. Marcus Johnson",
    role: "Psychiatrist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
    shortBio: "Expert in adult psychiatry and medication management.",
    fullBio: "Dr. Marcus Johnson is board-certified in general psychiatry with a focus on comprehensive psychiatric evaluations and personalized medication management. He believes in a holistic approach, often collaborating with therapists to ensure patients receive well-rounded care.",
    specialties: ["Medication", "Mood Disorders", "ADHD"],
    education: "M.D., Harvard Medical School",
  },
  {
    id: 3,
    name: "Emily Williams, LCSW",
    role: "Clinical Social Worker",
    image: "https://images.unsplash.com/photo-1594824432258-f24fa9343ee4?w=800&q=80",
    shortBio: "Focuses on trauma-informed care and relationship counseling.",
    fullBio: "Emily Williams specializes in trauma-informed care and couples relationship counseling. With a warm and empathetic approach, Emily creates a safe space for clients to explore past traumas, work through relationship conflicts, and rebuild trust and connection.",
    specialties: ["Couples Therapy", "Trauma & PTSD", "Family Dynamics"],
    education: "MSW, University of Michigan",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    role: "Adolescent Psychologist",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80",
    shortBio: "Dedicated to helping youth navigate developmental challenges.",
    fullBio: "Dr. James Wilson has dedicated his career to supporting children, adolescents, and their families. He uses play therapy, CBT, and family counseling to address behavioral issues, school-related anxiety, and early-stage mood disorders in a child-friendly environment.",
    specialties: ["Child Psychology", "Teen Issues", "Behavioral"],
    education: "Psy.D., Rutgers University",
  },
];
