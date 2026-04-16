import {
  Sprout,
  BookOpen,
  Trophy,
  Shield,
  Handshake,
  GraduationCap,
  School,
  ClipboardList,
  Globe,
  Heart,
  BookMarked,
  Rocket,
  CheckCircle2,
  Feather,
  Phone,
} from "lucide-react"
import { ScrollTimeline } from "@/components/sections/scroll-timeline"
import { CounterShowcase } from "@/components/sections/counter-showcase"
import { FlipCardGrid } from "@/components/sections/flip-card-grid"
import { QuoteBand } from "@/components/sections/quote-band"
import { BentoGrid } from "@/components/sections/bento-grid"
import { PageCtaBand } from "@/components/sections/page-cta-band"
import { PageHero } from "@/components/sections/page-hero"

const AboutPage = () => {
  return (
    <main className="w-full pb-16">
      <PageHero
        eyebrow="About Al-Hikmah"
        title="A faith-inspired learning community built for lasting impact"
        description="Al-Hikmah was founded to deliver holistic, inclusive education where learners and families feel supported, seen, and empowered through academic and spiritual growth."
        primaryCta="Meet Our Team"
        secondaryCta="Explore Programmes"
        images={[
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&auto=format&fit=crop&q=80",
        ]}
      />

      <ScrollTimeline
        heading="Our Story"
        subheading="A journey built on community, faith, and educational excellence in Birmingham."
        events={[
          {
            year: "2010",
            title: "Founded with a Vision",
            description: "Al-Hikmah began as a small Islamic education circle in Birmingham's Handsworth community, driven by a desire to blend academic rigour with spiritual identity.",
            icon: <Sprout className="h-4 w-4" />,
          },
          {
            year: "2014",
            title: "First Academy Curriculum",
            description: "Launched a structured full-time academy programme offering a national-curriculum-aligned education enriched with Islamic studies, Arabic, and Urdu.",
            icon: <BookOpen className="h-4 w-4" />,
          },
          {
            year: "2017",
            title: "Enrichment & Community Growth",
            description: "Expanded into enrichment activities — sports residentials, camps, and community programmes — reaching over 200 young learners across the West Midlands.",
            icon: <Trophy className="h-4 w-4" />,
          },
          {
            year: "2020",
            title: "Safeguarding & Accreditation",
            description: "Achieved formal safeguarding alignment with UK statutory guidance. All staff became DBS-checked and trained in inclusive, trauma-aware practice.",
            icon: <Shield className="h-4 w-4" />,
          },
          {
            year: "2024",
            title: "Consultancy & Regional Impact",
            description: "Launched consultancy services for schools seeking curriculum mapping, assessment frameworks, and Islamic education improvement support across the UK.",
            icon: <Handshake className="h-4 w-4" />,
          },
        ]}
      />

      <CounterShowcase
        heading="Our Reach by the Numbers"
        subheading="Real impact, measurable growth, and community trust built over years of dedication."
        dark
        items={[
          { label: "Learners Supported", value: 500, suffix: "+", description: "Across academy, courses and enrichment", icon: <GraduationCap className="h-6 w-6" /> },
          { label: "Years of Service", value: 14, suffix: "+", description: "In Birmingham and the West Midlands", icon: <School className="h-6 w-6" /> },
          { label: "Programmes Running", value: 12, suffix: "", description: "Across education, enrichment and consultancy", icon: <ClipboardList className="h-6 w-6" /> },
          { label: "Community Partners", value: 30, suffix: "+", description: "Schools, charities, and local organisations", icon: <Globe className="h-6 w-6" /> },
        ]}
      />

      <FlipCardGrid
        heading="Our Core Values — HIKMAH"
        items={[
          {
            title: "Honesty",
            icon: <Heart className="h-6 w-6" />,
            front: "Transparent relationships with learners, families, and partners.",
            back: "We commit to open communication, honest feedback, and visible accountability in every interaction — no hidden agendas.",
            accent: "linear-gradient(135deg, #7e1625 0%, #a0202f 100%)",
          },
          {
            title: "Ilm (Knowledge)",
            icon: <BookMarked className="h-6 w-6" />,
            front: "Structured, purposeful learning driven by curiosity and scholarship.",
            back: "Islamic education philosophy merges with contemporary learning science to give learners frameworks for lifelong growth.",
            accent: "linear-gradient(135deg, #5f121d 0%, #7e1625 100%)",
          },
          {
            title: "Kindness",
            icon: <Heart className="h-6 w-6" />,
            front: "Every learner is treated with dignity, patience, and compassion.",
            back: "A trauma-aware, pastoral approach ensures no learner feels invisible, unseen, or unsupported in our spaces.",
            accent: "linear-gradient(135deg, #b8860b 0%, #d4a017 100%)",
          },
          {
            title: "Motivation",
            icon: <Rocket className="h-6 w-6" />,
            front: "Ambition guided by faith, purpose, and community aspiration.",
            back: "We set high expectations and provide the scaffolding for every learner to reach — and exceed — their personal goals.",
            accent: "linear-gradient(135deg, #7e1625 0%, #b8860b 100%)",
          },
          {
            title: "Accountability",
            icon: <CheckCircle2 className="h-6 w-6" />,
            front: "Staff and learners own their growth and acknowledge their challenges.",
            back: "Regular reviews, transparent checkpoints, and shared responsibility ensure continuous improvement at every level.",
            accent: "linear-gradient(135deg, #5f121d 0%, #a0202f 100%)",
          },
          {
            title: "Harmony",
            icon: <Feather className="h-6 w-6" />,
            front: "A community where all backgrounds, abilities, and identities belong.",
            back: "Inclusive practice, community cohesion, and respectful dialogue make Al-Hikmah a truly welcoming space for all.",
            accent: "linear-gradient(135deg, #4a5568 0%, #7e1625 100%)",
          },
        ]}
      />

      <QuoteBand
        quotes={[
          {
            text: "Excellent tuition by expert tutors.",
            author: "Parent",
            role: "Review, al-hikmah.org.uk",
          },
          {
            text: "I have learnt so much in such a short time.",
            author: "Student",
            role: "Review, al-hikmah.org.uk",
          },
          {
            text: "I have been really impressed by the team; they are dedicated and have made a massive difference to my son's attainment.",
            author: "Parent",
            role: "Review, al-hikmah.org.uk",
          },
        ]}
      />

      <BentoGrid
        heading="Inside Al-Hikmah"
        subheading="A glimpse into our community, our classrooms, and our culture."
        items={[
          {
            title: "Structured Academy Curriculum",
            description: "National curriculum enriched with Islamic and language study.",
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&auto=format&fit=crop&q=80",
            span: "wide",
          },
          {
            title: "Safeguarding First",
            description: "DBS-checked, trained, and committed to child protection.",
            icon: <Shield className="h-5 w-5" />,
            accent: "linear-gradient(135deg, #f9f4ee 0%, #fdebd0 100%)",
          },
          {
            title: "Language Learning",
            description: "Arabic, Urdu, and English skills for every level.",
            icon: <Globe className="h-5 w-5" />,
            accent: "linear-gradient(135deg, #fdebd0 0%, #f9f4ee 100%)",
          },
          {
            title: "Community Residentials",
            description: "Outdoor and overnight educational experiences.",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=80",
            span: "tall",
          },
          {
            title: "Parent Partnership",
            description: "Transparent, supportive, and regular engagement.",
            icon: <Phone className="h-5 w-5" />,
            accent: "linear-gradient(135deg, #f9f4ee 0%, #fdeee2 100%)",
          },
          {
            title: "Enrichment Activities",
            description: "Sports, arts, camps, and holistic development.",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&auto=format&fit=crop&q=80",
          },
        ]}
      />

      <PageCtaBand
        title="Ready to be part of our story?"
        description="Explore our academy, enrichment, and courses — or get in touch to find the right programme for your child."
        primaryCta="View Academy"
        secondaryCta="Contact Us"
      />
    </main>
  )
}

export default AboutPage
