import {
  CheckCircle2,
  Lock,
  FileText,
  Shield,
  ShieldCheck,
  UserCircle,
  Megaphone,
  Monitor,
  AlertTriangle,
  ClipboardList,
} from "lucide-react"
import { AccordionVisual } from "@/components/sections/accordion-visual"
import { MarqueeLogos } from "@/components/sections/marquee-logos"
import { BentoGrid } from "@/components/sections/bento-grid"
import { ComparisonTable } from "@/components/sections/comparison-table"
import { PageCtaBand } from "@/components/sections/page-cta-band"
import { PageHero } from "@/components/sections/page-hero"

const SafeguardingPage = () => {
  return (
    <main className="w-full pb-16">
      <PageHero
        eyebrow="Safeguarding & Child Protection"
        title="Every learner is safe, seen, and protected at Al-Hikmah"
        description="Our safeguarding framework exceeds UK statutory requirements. Every staff member is trained, DBS-checked, and committed to creating environments where children thrive without fear or risk."
        primaryCta="View Our Policies"
        secondaryCta="Contact DSL"
        images={[
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&auto=format&fit=crop&q=80",
        ]}
      />

      <MarqueeLogos
        heading="Our safeguarding standards and commitments"
        items={[
          { label: "DBS Checked — All Staff", icon: <CheckCircle2 className="h-4 w-4" /> },
          { label: "Safer Recruitment", icon: <Lock className="h-4 w-4" /> },
          { label: "KCSiE Aligned", icon: <ClipboardList className="h-4 w-4" /> },
          { label: "GDPR Compliant", icon: <Shield className="h-4 w-4" /> },
          { label: "Prevent Duty", icon: <ShieldCheck className="h-4 w-4" /> },
          { label: "Designated Safeguarding Lead", icon: <UserCircle className="h-4 w-4" /> },
          { label: "Whistleblowing Policy", icon: <Megaphone className="h-4 w-4" /> },
          { label: "Online Safety Protocols", icon: <Monitor className="h-4 w-4" /> },
          { label: "Risk Assessments", icon: <AlertTriangle className="h-4 w-4" /> },
          { label: "Parental Consent Frameworks", icon: <FileText className="h-4 w-4" /> },
        ]}
      />

      <BentoGrid
        heading="Our Safeguarding Architecture"
        subheading="Built on statutory frameworks, updated annually, and embedded in every Al-Hikmah programme."
        items={[
          {
            title: "Designated Safeguarding Lead",
            description: "A named, trained DSL available to all staff, learners, and families at all times.",
            icon: <UserCircle className="h-5 w-5" />,
            span: "wide",
            accent: "linear-gradient(135deg, #f9f4ee 0%, #fdebd0 100%)",
          },
          {
            title: "DBS Checks",
            description: "Enhanced DBS for every member of staff, volunteer, and trustee.",
            icon: <Lock className="h-5 w-5" />,
            accent: "linear-gradient(135deg, #fdebd0 0%, #f9f4ee 100%)",
          },
          {
            title: "GDPR & Privacy",
            description: "Compliant data handling, clear privacy notices, and learner data protection.",
            icon: <Shield className="h-5 w-5" />,
            accent: "linear-gradient(135deg, #f9f4ee 0%, #fdeee2 100%)",
          },
          {
            title: "Staff Training",
            description: "Annual safeguarding training, Prevent Duty awareness, and first aid certification.",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&auto=format&fit=crop&q=80",
            span: "tall",
          },
          {
            title: "Behaviour Policy",
            description: "Clear conduct standards, de-escalation protocols, and restorative practice.",
            icon: <ClipboardList className="h-5 w-5" />,
            accent: "linear-gradient(135deg, #fdebd0 0%, #f9f4ee 100%)",
          },
          {
            title: "Online Safety",
            description: "Device use policy, filtering, monitoring, and digital literacy education.",
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&auto=format&fit=crop&q=80",
          },
        ]}
      />

      <AccordionVisual
        heading="Policies, Procedures & Your Rights"
        subheading="Transparent, accessible policies for every family, learner, and partner."
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&auto=format&fit=crop&q=80"
        items={[
          {
            question: "What is our Child Protection Policy?",
            answer: "Our child protection policy follows Keeping Children Safe in Education (KCSiE) guidance. It covers identification, reporting, confidentiality, and response procedures for all categories of abuse.",
            icon: <FileText className="h-4 w-4" />,
          },
          {
            question: "How do we handle GDPR and data privacy?",
            answer: "All learner and family data is stored securely, used only for educational purposes, and governed by our Privacy Notice. Families can request data access or deletion at any time.",
            icon: <Lock className="h-4 w-4" />,
          },
          {
            question: "What is the Prevent Duty and how do we apply it?",
            answer: "We have a statutory duty to prevent radicalisation. Staff receive Prevent training, and we have clear processes for identifying and referring concerns to appropriate authorities.",
            icon: <ShieldCheck className="h-4 w-4" />,
          },
          {
            question: "How do we handle a safeguarding concern or disclosure?",
            answer: "All disclosures are taken seriously. Staff follow a clear protocol: listen, note, report immediately to the DSL, and log. Families are informed unless doing so would put the child at risk.",
            icon: <AlertTriangle className="h-4 w-4" />,
          },
          {
            question: "How can a parent or family member raise a concern?",
            answer: "Contact our Designated Safeguarding Lead directly via phone or email. Concerns are treated with confidentiality and actioned within 24 hours of receipt.",
            icon: <UserCircle className="h-4 w-4" />,
          },
          {
            question: "What is our Whistleblowing Policy?",
            answer: "Any staff member or volunteer who has concerns about the conduct of a colleague can raise this confidentially via our DSL or directly to the trustee board without fear of reprisal.",
            icon: <Megaphone className="h-4 w-4" />,
          },
        ]}
      />

      <ComparisonTable
        heading="Safeguarding: Our Standard vs. Minimum Requirement"
        subheading="We go beyond what is legally required to set a higher bar for child safety."
        withLabel="Al-Hikmah Standard"
        withoutLabel="Minimum Legal Requirement"
        rows={[
          { feature: "DBS Checks", without: "Basic DBS", withUs: "Enhanced DBS + barred list", highlight: true },
          { feature: "Safeguarding Training", without: "Induction only", withUs: "Annual refresher + Prevent" },
          { feature: "DSL Availability", without: "Named contact", withUs: "Available to all — daily", highlight: true },
          { feature: "Data Privacy", without: "GDPR compliant", withUs: "GDPR + regular family updates" },
          { feature: "Online Safety", without: "Policy document only", withUs: "Monitoring + Digital Literacy", highlight: true },
          { feature: "Concern Response Time", without: "No defined timeline", withUs: "Actioned within 24 hours" },
        ]}
      />

      <PageCtaBand
        title="Questions about safeguarding at Al-Hikmah?"
        description="Our Designated Safeguarding Lead is available to answer any concerns from families, learners, or partners."
        primaryCta="Contact Our DSL"
        secondaryCta="Download Policies"
      />
    </main>
  )
}

export default SafeguardingPage
