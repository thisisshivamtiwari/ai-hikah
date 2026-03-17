import {
  Map,
  BarChart2,
  BookOpen,
  Accessibility,
  TrendingUp,
  School,
  ClipboardList,
  Phone,
  Search,
  Wrench,
} from "lucide-react"
import { ComparisonTable } from "@/components/sections/comparison-table"
import { CounterShowcase } from "@/components/sections/counter-showcase"
import { AccordionVisual } from "@/components/sections/accordion-visual"
import { FlipCardGrid } from "@/components/sections/flip-card-grid"
import { QuoteBand } from "@/components/sections/quote-band"
import { PageCtaBand } from "@/components/sections/page-cta-band"
import { PageHero } from "@/components/sections/page-hero"

const ConsultancyPage = () => {
  return (
    <main className="w-full pb-16">
      <PageHero
        eyebrow="Consultancy Services"
        title="Curriculum mapping, assessment design, and school improvement support"
        description="Al-Hikmah Consultancy works with schools, academies, and Islamic education providers across the UK to strengthen curriculum frameworks, embed inclusive practice, and raise learner outcomes."
        primaryCta="Request a Consultation"
        secondaryCta="Download Overview"
        images={[
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=80",
        ]}
      />

      <FlipCardGrid
        heading="What We Deliver"
        items={[
          {
            title: "Curriculum Mapping",
            icon: <Map className="h-6 w-6" />,
            front: "Audit, realign, and strengthen subject-level curriculum sequencing.",
            back: "We review existing curriculum plans and build coherent, progression-focused pathways aligned to national frameworks and your school's unique learner needs.",
            accent: "linear-gradient(135deg, #7e1625 0%, #a0202f 100%)",
          },
          {
            title: "Assessment Frameworks",
            icon: <BarChart2 className="h-6 w-6" />,
            front: "Design assessment structures that actually drive learner progress.",
            back: "From formative check-ins to summative marking schemes, we build fair, purposeful, and data-informed assessment systems that reduce teacher burden.",
            accent: "linear-gradient(135deg, #b8860b 0%, #d4a017 100%)",
          },
          {
            title: "Islamic Education Improvement",
            icon: <BookOpen className="h-6 w-6" />,
            front: "Specialist support for Islamic schools and supplementary settings.",
            back: "Dedicated consultancy for madrassas, Islamic departments, and supplementary schools seeking quality improvement, OFSTED readiness, and community trust.",
            accent: "linear-gradient(135deg, #5f121d 0%, #7e1625 100%)",
          },
          {
            title: "Inclusive Practice Audits",
            icon: <Accessibility className="h-6 w-6" />,
            front: "Review and improve SEND, EAL, and pastoral inclusion structures.",
            back: "We assess your current inclusion provision and build practical, evidence-led improvement plans across SEND, EAL, mental health, and cultural inclusion.",
            accent: "linear-gradient(135deg, #4a5568 0%, #7e1625 100%)",
          },
        ]}
      />

      <ComparisonTable
        heading="The Al-Hikmah Difference"
        subheading="See how consultancy support transforms school outcomes versus going it alone."
        rows={[
          { feature: "Curriculum Coherence", without: "Fragmented, topic-led", withUs: "Sequenced, progression-mapped", highlight: true },
          { feature: "Assessment Design", without: "Generic, high-burden", withUs: "Purposeful, data-light, insight-rich" },
          { feature: "Islamic Studies Quality", without: "Unregulated, variable", withUs: "Scholar-reviewed, standards-aligned", highlight: true },
          { feature: "SEND Inclusion", without: "Compliance-led only", withUs: "Learner-centred and proactive" },
          { feature: "Teacher Confidence", without: "Unclear expectations", withUs: "Clear frameworks and coaching", highlight: true },
          { feature: "Parent Trust", without: "Reactive communication", withUs: "Transparent partnership built in" },
          { feature: "Ofsted/Inspection Readiness", without: "Last-minute preparation", withUs: "Embedded, ongoing self-evaluation", highlight: true },
        ]}
      />

      <CounterShowcase
        heading="Consultancy Impact"
        dark
        items={[
          { label: "Schools Supported", value: 22, suffix: "+", description: "Across Birmingham and the West Midlands", icon: <School className="h-6 w-6" /> },
          { label: "Curriculum Reviews", value: 40, suffix: "+", description: "Subject-level audits completed", icon: <Map className="h-6 w-6" /> },
          { label: "Assessment Frameworks Built", value: 15, suffix: "+", description: "For primary, secondary, and Islamic settings", icon: <BarChart2 className="h-6 w-6" /> },
          { label: "Average Improvement Score", value: 34, suffix: "%", description: "Self-evaluated improvement post-engagement", icon: <TrendingUp className="h-6 w-6" /> },
        ]}
      />

      <AccordionVisual
        heading="How the Process Works"
        subheading="A clear, structured consultancy process from first contact to impact review."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&auto=format&fit=crop&q=80"
        items={[
          {
            question: "Step 1 — Initial Consultation",
            answer: "We meet with school leadership to understand your current challenges, goals, and learner profile. This scoping call is free and non-committal.",
            icon: <Phone className="h-4 w-4" />,
          },
          {
            question: "Step 2 — School Audit",
            answer: "Our team conducts a full or subject-specific audit: reviewing documentation, observing lessons, and interviewing staff and learners where appropriate.",
            icon: <Search className="h-4 w-4" />,
          },
          {
            question: "Step 3 — Improvement Plan",
            answer: "We deliver a detailed written report with prioritised recommendations, timelines, and staff development actions specific to your school context.",
            icon: <ClipboardList className="h-4 w-4" />,
          },
          {
            question: "Step 4 — Implementation Support",
            answer: "Optional hands-on coaching and support as you implement recommendations — from training sessions to curriculum design workshops.",
            icon: <Wrench className="h-4 w-4" />,
          },
          {
            question: "Step 5 — Impact Review",
            answer: "After one term, we review progress against agreed targets and measure change through pupil progress data, stakeholder surveys, and observation.",
            icon: <TrendingUp className="h-4 w-4" />,
          },
        ]}
      />

      <QuoteBand
        quotes={[
          {
            text: "The curriculum review Al-Hikmah delivered was the most practical and actionable piece of school improvement work we've received in five years.",
            author: "Head Teacher",
            role: "Islamic Primary School, Birmingham",
          },
          {
            text: "Our assessment structure was a patchwork before — now it's coherent, teacher-friendly, and genuinely helps us understand learner progress.",
            author: "Deputy Head",
            role: "Supplementary School, West Midlands",
          },
          {
            text: "Having someone who understands both Islamic education and school improvement at the same level is rare. Al-Hikmah consultancy is genuinely unique.",
            author: "School Improvement Lead",
            role: "Academy Trust, Birmingham",
          },
        ]}
      />

      <PageCtaBand
        title="Strengthen your school's curriculum and outcomes"
        description="Book a free scoping call to explore how Al-Hikmah consultancy can support your improvement journey."
        primaryCta="Book a Consultation"
        secondaryCta="Download Our Overview"
      />
    </main>
  )
}

export default ConsultancyPage
