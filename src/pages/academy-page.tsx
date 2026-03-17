import {
  Moon,
  PenLine,
  Calculator,
  FileText,
  Microscope,
  BookOpen,
  Globe,
  Dumbbell,
  Palette,
  Heart,
  Clock,
  Phone,
  Users,
  GraduationCap,
  BarChart2,
  ClipboardList,
  CheckCircle2,
} from "lucide-react"
import { BentoGrid } from "@/components/sections/bento-grid"
import { ImageCarousel } from "@/components/sections/image-carousel"
import { AccordionVisual } from "@/components/sections/accordion-visual"
import { CounterShowcase } from "@/components/sections/counter-showcase"
import { MarqueeLogos } from "@/components/sections/marquee-logos"
import { PageCtaBand } from "@/components/sections/page-cta-band"
import { PageHero } from "@/components/sections/page-hero"

const AcademyPage = () => {
  return (
    <main className="w-full pb-16">
      <PageHero
        eyebrow="Al-Hikmah Academy"
        title="A full-time education built on faith, scholarship, and ambition"
        description="Our national-curriculum-aligned academy integrates Islamic studies, Arabic, and community values into every subject — preparing young Muslims for academic and spiritual excellence."
        primaryCta="View Curriculum"
        secondaryCta="Admissions Guide"
        images={[
          "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=900&auto=format&fit=crop&q=80",
        ]}
      />

      <MarqueeLogos
        heading="Subjects and disciplines we deliver"
        items={[
          { label: "Islamic Studies", icon: <Moon className="h-4 w-4" /> },
          { label: "Arabic Language", icon: <PenLine className="h-4 w-4" /> },
          { label: "Mathematics", icon: <Calculator className="h-4 w-4" /> },
          { label: "English & Literacy", icon: <FileText className="h-4 w-4" /> },
          { label: "Sciences", icon: <Microscope className="h-4 w-4" /> },
          { label: "Urdu Language", icon: <BookOpen className="h-4 w-4" /> },
          { label: "History & Humanities", icon: <Globe className="h-4 w-4" /> },
          { label: "Physical Education", icon: <Dumbbell className="h-4 w-4" /> },
          { label: "Arts & Creativity", icon: <Palette className="h-4 w-4" /> },
          { label: "PSHE & Wellbeing", icon: <Heart className="h-4 w-4" /> },
        ]}
      />

      <BentoGrid
        heading="The Academy Experience"
        subheading="Structure, warmth, and purpose in every corner of the academy."
        items={[
          {
            title: "National Curriculum + Islamic Enrichment",
            description: "Every subject is enriched with Islamic perspective, values, and scholarship.",
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&auto=format&fit=crop&q=80",
            span: "wide",
          },
          {
            title: "Structured Timetable",
            description: "Clear daily rhythm balancing academics, prayer, and enrichment.",
            icon: <Clock className="h-5 w-5" />,
            accent: "linear-gradient(135deg, #f9f4ee 0%, #fdebd0 100%)",
          },
          {
            title: "Parent Communication",
            description: "Regular updates, progress reviews, and open-door parent engagement.",
            icon: <Phone className="h-5 w-5" />,
            accent: "linear-gradient(135deg, #fdebd0 0%, #f9f4ee 100%)",
          },
          {
            title: "Student Life",
            description: "Clubs, residentials, community projects, and spiritual retreats.",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=80",
            span: "tall",
          },
          {
            title: "Assessment & Progress",
            description: "Regular formative and summative assessments with clear reporting.",
            icon: <BarChart2 className="h-5 w-5" />,
            accent: "linear-gradient(135deg, #f9f4ee 0%, #fdeee2 100%)",
          },
          {
            title: "Faith-Centred Pastoral Care",
            description: "Mentors and wellbeing support for every learner's full development.",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&auto=format&fit=crop&q=80",
          },
        ]}
      />

      <ImageCarousel
        heading="Life Inside the Academy"
        slides={[
          {
            image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&auto=format&fit=crop&q=80",
            title: "Dynamic Classroom Learning",
            subtitle: "Engaging, structured lessons with expert teachers who bring subjects to life.",
            tag: "Academics",
          },
          {
            image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1600&auto=format&fit=crop&q=80",
            title: "Arabic & Islamic Studies",
            subtitle: "Dedicated sessions for language, Quran, and Islamic scholarship at every level.",
            tag: "Faith Education",
          },
          {
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&auto=format&fit=crop&q=80",
            title: "Community & Enrichment",
            subtitle: "Sports, trips, camps, and creative programmes extending learning beyond the classroom.",
            tag: "Enrichment",
          },
          {
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&auto=format&fit=crop&q=80",
            title: "Student-Centred Support",
            subtitle: "Pastoral mentors and wellbeing staff ensure every learner feels seen and supported.",
            tag: "Wellbeing",
          },
        ]}
      />

      <CounterShowcase
        heading="Academy at a Glance"
        subheading="Clear evidence of what we deliver for learners and families."
        items={[
          { label: "Age Range", value: 5, suffix: "–16", description: "From Reception to GCSE level", icon: <GraduationCap className="h-6 w-6" /> },
          { label: "Daily Timetable Hours", value: 6, suffix: "hrs", description: "Structured learning each day", icon: <Clock className="h-6 w-6" /> },
          { label: "Subjects Delivered", value: 10, suffix: "+", description: "Core + Islamic enrichment subjects", icon: <BookOpen className="h-6 w-6" /> },
          { label: "Staff-to-Learner Ratio", value: 1, suffix: ":8", description: "Exceptional pastoral attention", icon: <Users className="h-6 w-6" /> },
        ]}
      />

      <AccordionVisual
        heading="Admissions & Guidance"
        subheading="Everything families need to know before enrolling, in clear, simple steps."
        image="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&auto=format&fit=crop&q=80"
        items={[
          {
            question: "Who can apply to Al-Hikmah Academy?",
            answer: "We welcome learners aged 5–16 from Muslim families across Birmingham and the West Midlands. All learners are assessed for learning needs and appropriateness of programme fit.",
            icon: <ClipboardList className="h-4 w-4" />,
          },
          {
            question: "What does the application process look like?",
            answer: "Submit an enquiry, attend an open day, complete a short assessment visit, and receive a placement offer within 2 working weeks if suitable.",
            icon: <CheckCircle2 className="h-4 w-4" />,
          },
          {
            question: "How does the academy align with the national curriculum?",
            answer: "All core subjects follow DfE national curriculum frameworks, enhanced with Islamic perspective, Arabic language study, and Quranic memorisation as elective enrichment.",
            icon: <BookOpen className="h-4 w-4" />,
          },
          {
            question: "What does pastoral support include?",
            answer: "Every learner is assigned a pastoral mentor for wellbeing, academic progress tracking, parent liaison, and spiritual guidance throughout the year.",
            icon: <Heart className="h-4 w-4" />,
          },
          {
            question: "Are there halal food, prayer times, and religious observances?",
            answer: "Yes. Dedicated prayer facilities, halal meals, and Islamic observances such as Ramadan adjustments are fully integrated into the academy's daily structure.",
            icon: <Moon className="h-4 w-4" />,
          },
        ]}
      />

      <PageCtaBand
        title="Ready to explore Al-Hikmah Academy?"
        description="Book a visit, download our prospectus, or get in touch with our admissions team today."
        primaryCta="Book a Visit"
        secondaryCta="Contact Admissions"
      />
    </main>
  )
}

export default AcademyPage
