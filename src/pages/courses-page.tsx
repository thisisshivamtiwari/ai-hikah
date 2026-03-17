import {
  Moon,
  PenLine,
  FileText,
  BookMarked,
  Briefcase,
  Users,
  GraduationCap,
  Calendar,
  BarChart2,
  CheckCircle2,
  BookOpen,
  Globe,
  Signal,
  User,
  Banknote,
} from "lucide-react"
import { FlipCardGrid } from "@/components/sections/flip-card-grid"
import { CounterShowcase } from "@/components/sections/counter-showcase"
import { BentoGrid } from "@/components/sections/bento-grid"
import { AccordionVisual } from "@/components/sections/accordion-visual"
import { MarqueeLogos } from "@/components/sections/marquee-logos"
import { PageCtaBand } from "@/components/sections/page-cta-band"
import { PageHero } from "@/components/sections/page-hero"

const CoursesPage = () => {
  return (
    <main className="w-full pb-16">
      <PageHero
        eyebrow="Language & Islamic Courses"
        title="Structured courses for every learner, every level, every goal"
        description="Whether you want to learn Arabic from scratch, develop Urdu fluency, improve your English skills, or deepen your Islamic knowledge — Al-Hikmah has a course designed for you."
        primaryCta="Browse Courses"
        secondaryCta="Enrol Now"
        images={[
          "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=900&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=900&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&auto=format&fit=crop&q=80",
        ]}
      />

      <MarqueeLogos
        heading="Our course catalogue"
        items={[
          { label: "Arabic – Beginners", icon: <Moon className="h-4 w-4" /> },
          { label: "Arabic – Intermediate", icon: <PenLine className="h-4 w-4" /> },
          { label: "Arabic – Advanced", icon: <BookMarked className="h-4 w-4" /> },
          { label: "Urdu – Spoken", icon: <Globe className="h-4 w-4" /> },
          { label: "Urdu – Written", icon: <FileText className="h-4 w-4" /> },
          { label: "English Skills", icon: <FileText className="h-4 w-4" /> },
          { label: "GCSE English Support", icon: <BookOpen className="h-4 w-4" /> },
          { label: "Quran Recitation", icon: <BookMarked className="h-4 w-4" /> },
          { label: "Islamic Studies", icon: <Moon className="h-4 w-4" /> },
          { label: "Fiqh & Aqeedah", icon: <BookOpen className="h-4 w-4" /> },
          { label: "Professional Dev", icon: <Briefcase className="h-4 w-4" /> },
          { label: "Parent Literacy", icon: <Users className="h-4 w-4" /> },
        ]}
      />

      <FlipCardGrid
        heading="Core Course Pathways"
        items={[
          {
            title: "Arabic Language",
            icon: <Moon className="h-6 w-6" />,
            front: "From Alif-Ba to fluent reading — structured Arabic for all ages.",
            back: "Our three-tier Arabic programme (Beginners, Intermediate, Advanced) takes learners from the alphabet to comprehension of the Quran and classical texts.",
            accent: "linear-gradient(135deg, #7e1625 0%, #a0202f 100%)",
          },
          {
            title: "Urdu Language",
            icon: <PenLine className="h-6 w-6" />,
            front: "Spoken and written Urdu for community connection and heritage.",
            back: "Conversational Urdu courses for children of South Asian heritage reconnect learners with their cultural identity and family communication.",
            accent: "linear-gradient(135deg, #b8860b 0%, #d4a017 100%)",
          },
          {
            title: "English Skills",
            icon: <FileText className="h-6 w-6" />,
            front: "Academic English, literacy, and GCSE preparation for all levels.",
            back: "Functional English and GCSE support courses targeting grammar, comprehension, essay writing, and spoken English confidence for learners and adults.",
            accent: "linear-gradient(135deg, #5f121d 0%, #7e1625 100%)",
          },
          {
            title: "Islamic Studies",
            icon: <BookMarked className="h-6 w-6" />,
            front: "Faith knowledge, Quran, Fiqh, and Islamic history in depth.",
            back: "Structured Islamic education from foundational pillars through to advanced Fiqh and Aqeedah, delivered by qualified scholars in accessible English.",
            accent: "linear-gradient(135deg, #4a5568 0%, #7e1625 100%)",
          },
          {
            title: "Professional Development",
            icon: <Briefcase className="h-6 w-6" />,
            front: "Career, leadership, and skills courses for Muslim adults.",
            back: "Workplace communication, leadership skills, and professional confidence courses tailored for working Muslim adults navigating professional and Islamic identity.",
            accent: "linear-gradient(135deg, #7e1625 0%, #b8860b 100%)",
          },
          {
            title: "Parent Literacy",
            icon: <Users className="h-6 w-6" />,
            front: "Help parents support their children's learning at home.",
            back: "Practical literacy and numeracy courses for parents who want to actively engage with their child's homework, reading, and academic progress at home.",
            accent: "linear-gradient(135deg, #a0202f 0%, #5f121d 100%)",
          },
        ]}
      />

      <BentoGrid
        heading="How We Teach"
        subheading="Small groups, expert teachers, and curriculum designed for real-world relevance."
        items={[
          {
            title: "Small-Group Learning",
            description: "Max 10 per class. Every learner gets personal attention and targeted feedback.",
            icon: <Users className="h-5 w-5" />,
            accent: "linear-gradient(135deg, #f9f4ee 0%, #fdebd0 100%)",
            span: "wide",
          },
          {
            title: "Qualified Scholars",
            description: "Arabic and Islamic courses taught by certified scholars with teaching experience.",
            icon: <GraduationCap className="h-5 w-5" />,
            accent: "linear-gradient(135deg, #fdebd0 0%, #f9f4ee 100%)",
          },
          {
            title: "Flexible Scheduling",
            description: "Weekday evenings and weekend classes for school and working families.",
            icon: <Calendar className="h-5 w-5" />,
            accent: "linear-gradient(135deg, #f9f4ee 0%, #fdeee2 100%)",
          },
          {
            title: "Real Arabic Texts",
            description: "Course materials drawn from Quran, Hadith, and classical literature.",
            image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=900&auto=format&fit=crop&q=80",
          },
          {
            title: "Progress-Tracked",
            description: "Termly assessments and parent reports for every enrolled learner.",
            icon: <BarChart2 className="h-5 w-5" />,
            accent: "linear-gradient(135deg, #fdeee2 0%, #f9f4ee 100%)",
          },
          {
            title: "Certificate on Completion",
            description: "Formal completion certificates for all courses recognised by our partners.",
            image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&auto=format&fit=crop&q=80",
            span: "wide",
          },
        ]}
      />

      <CounterShowcase
        heading="Courses at a Glance"
        dark
        items={[
          { label: "Active Courses", value: 14, suffix: "", description: "Language, Islamic, and skills courses", icon: <BookOpen className="h-6 w-6" /> },
          { label: "Weekly Learners", value: 180, suffix: "+", description: "Enrolled every term across all courses", icon: <User className="h-6 w-6" /> },
          { label: "Levels Available", value: 3, suffix: "+", description: "Beginner, Intermediate, Advanced for each subject", icon: <Signal className="h-6 w-6" /> },
          { label: "Completion Rate", value: 88, suffix: "%", description: "Of enrolled learners complete their course", icon: <CheckCircle2 className="h-6 w-6" /> },
        ]}
      />

      <AccordionVisual
        heading="Frequently Asked Questions"
        subheading="Everything you need to know before enrolling in a course."
        image="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=900&auto=format&fit=crop&q=80"
        items={[
          {
            question: "What age groups are courses available for?",
            answer: "We offer courses for children aged 6+, teenagers, adults, and parents. Each course is grouped by level and age-appropriate content.",
            icon: <User className="h-4 w-4" />,
          },
          {
            question: "Are courses online or in-person?",
            answer: "Most courses are delivered in person at our Birmingham centre. Select courses are available online or as hybrid delivery for those outside Birmingham.",
            icon: <Globe className="h-4 w-4" />,
          },
          {
            question: "How long does each course run?",
            answer: "Courses run in 10–12 week terms with clear start and end dates. Some intensive short courses are also available during school holidays.",
            icon: <Calendar className="h-4 w-4" />,
          },
          {
            question: "What is the enrolment process?",
            answer: "Complete the online enquiry form, attend a short placement assessment, and receive a confirmed course start date within 5 working days.",
            icon: <FileText className="h-4 w-4" />,
          },
          {
            question: "Are there fees, and is financial assistance available?",
            answer: "Yes, competitive term fees apply. Bursary places and payment plans are available for families facing financial difficulty — contact us to discuss.",
            icon: <Banknote className="h-4 w-4" />,
          },
        ]}
      />

      <PageCtaBand
        title="Start your learning journey today"
        description="Enrol for the upcoming term or contact our team to find the best course fit for your learner."
        primaryCta="Enrol Now"
        secondaryCta="Ask a Question"
      />
    </main>
  )
}

export default CoursesPage
