import {
  GraduationCap,
  Heart,
  Users,
  Tent,
  BookOpen,
  Globe,
  HeartHandshake,
} from "lucide-react"
import { CounterShowcase } from "@/components/sections/counter-showcase"
import { SpotlightGrid } from "@/components/sections/spotlight-grid"
import { QuoteBand } from "@/components/sections/quote-band"
import { FlipCardGrid } from "@/components/sections/flip-card-grid"
import { BentoGrid } from "@/components/sections/bento-grid"
import { PageCtaBand } from "@/components/sections/page-cta-band"
import { PageHero } from "@/components/sections/page-hero"

const SupportUsPage = () => {
  return (
    <main className="w-full pb-16">
      <PageHero
        eyebrow="Support Al-Hikmah"
        title="Your generosity powers the next generation of Muslim leaders"
        description="Every donation, volunteer hour, and partnership helps us deliver exceptional education, enrichment, and community support across Birmingham and the West Midlands."
        primaryCta="Donate Now"
        secondaryCta="Volunteer With Us"
        images={[
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=80",
        ]}
      />

      <CounterShowcase
        heading="What Your Support Has Built"
        subheading="Tangible impact, measurable across every programme we run."
        dark
        items={[
          { label: "Learners Benefited", value: 500, suffix: "+", description: "Supported through donations and volunteering", icon: <GraduationCap className="h-6 w-6" /> },
          { label: "Bursary Places Funded", value: 60, suffix: "+", description: "Learners from low-income families supported", icon: <Heart className="h-6 w-6" /> },
          { label: "Volunteer Hours Contributed", value: 2400, suffix: "+", description: "Given by community members each year", icon: <Users className="h-6 w-6" /> },
          { label: "Enrichment Events Funded", value: 45, suffix: "+", description: "Residentials, camps, and community days", icon: <Tent className="h-6 w-6" /> },
        ]}
      />

      <SpotlightGrid
        heading="Ways to Make a Difference"
        subheading="Choose the form of support that fits your capacity — every contribution matters."
        items={[
          {
            title: "Monthly Giving",
            description: "Set up a regular monthly donation to provide stable funding for our bursary programme, enabling deserving learners to access Al-Hikmah regardless of financial situation.",
            image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&auto=format&fit=crop&q=80",
            tag: "Donate",
          },
          {
            title: "Volunteer as a Teacher",
            description: "Share your skills in Arabic, Urdu, Islamic studies, maths, or English by volunteering as a teaching assistant or lead teacher in our courses programme.",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&auto=format&fit=crop&q=80",
            tag: "Volunteer",
          },
          {
            title: "Partner With Us",
            description: "Schools, charities, mosques, and businesses can partner with Al-Hikmah to co-deliver programmes, sponsor enrichment activities, or share resources.",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=80",
            tag: "Partner",
          },
          {
            title: "Fund a Bursary Place",
            description: "Sponsor a learner's full course or academy term, giving a child or young person access to education that would otherwise be out of reach.",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&auto=format&fit=crop&q=80",
            tag: "Bursary",
          },
          {
            title: "Corporate Partnership",
            description: "CSR-aligned organisations can partner with Al-Hikmah to sponsor events, fund technology, or offer mentorship to our older learners and alumni.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=80",
            tag: "Corporate",
          },
          {
            title: "In-Kind Donations",
            description: "Donate books, equipment, sports gear, or technology to directly resource our classrooms, libraries, and enrichment programmes.",
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&auto=format&fit=crop&q=80",
            tag: "Resources",
          },
        ]}
      />

      <FlipCardGrid
        heading="Your Impact in Action"
        items={[
          {
            title: "£25 / month",
            icon: <BookOpen className="h-6 w-6" />,
            front: "Covers learning materials for one learner for a full term.",
            back: "Your monthly gift ensures a child has access to quality textbooks, printed resources, and Islamic study materials throughout their course.",
            accent: "linear-gradient(135deg, #2d6a4f 0%, #40916c 100%)",
          },
          {
            title: "£75 / month",
            icon: <Heart className="h-6 w-6" />,
            front: "Funds a bursary place — one learner's full term fees covered.",
            back: "A family who cannot afford the term fee will have their child's place fully sponsored, ensuring no financial barrier to accessing Al-Hikmah education.",
            accent: "linear-gradient(135deg, #b8860b 0%, #d4a017 100%)",
          },
          {
            title: "£200 one-off",
            icon: <Tent className="h-6 w-6" />,
            front: "Sponsors a full enrichment residential for one young person.",
            back: "An overnight outdoor residential — including transport, accommodation, activities, and halal meals — fully funded for one of our learners.",
            accent: "linear-gradient(135deg, #7e1625 0%, #a0202f 100%)",
          },
          {
            title: "£500+ / project",
            icon: <HeartHandshake className="h-6 w-6" />,
            front: "Funds an entire community event or new course launch.",
            back: "Your project-level gift enables us to launch a new language course, host a community Eid event, or fund a term-long sport programme for 20 learners.",
            accent: "linear-gradient(135deg, #5f121d 0%, #7e1625 100%)",
          },
        ]}
      />

      <QuoteBand
        quotes={[
          {
            text: "Volunteering with Al-Hikmah has been the most rewarding thing I've done outside of my career. Seeing the children grow in confidence is priceless.",
            author: "Yusuf A.",
            role: "Volunteer Arabic Teacher",
          },
          {
            text: "We've been monthly donors for three years. Knowing our contribution goes directly to a child's education — not admin — gives us real peace of mind.",
            author: "The Hassan Family",
            role: "Monthly Donors, Birmingham",
          },
          {
            text: "Our company's partnership with Al-Hikmah has been one of the most meaningful CSR programmes we've engaged with. The impact is visible and measurable.",
            author: "Corporate Partner",
            role: "West Midlands SME",
          },
        ]}
      />

      <BentoGrid
        heading="How We Use Your Donations"
        subheading="Every penny is allocated transparently across our programmes and learner needs."
        items={[
          {
            title: "Bursary Programme",
            description: "40% of donations go to fund reduced or free places for deserving learners.",
            icon: <Heart className="h-5 w-5" />,
            span: "wide",
            accent: "linear-gradient(135deg, #f9f4ee 0%, #fdebd0 100%)",
          },
          {
            title: "Teaching Resources",
            description: "Books, tech, and Islamic learning materials for every classroom.",
            icon: <BookOpen className="h-5 w-5" />,
            accent: "linear-gradient(135deg, #fdebd0 0%, #f9f4ee 100%)",
          },
          {
            title: "Enrichment Programmes",
            description: "Residentials, sports, and arts experiences for all learners.",
            icon: <Tent className="h-5 w-5" />,
            accent: "linear-gradient(135deg, #f9f4ee 0%, #fdeee2 100%)",
          },
          {
            title: "Staff Development",
            description: "Safeguarding, pedagogy, and Islamic education training for all staff.",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&auto=format&fit=crop&q=80",
            span: "tall",
          },
          {
            title: "Community Outreach",
            description: "Open events, parent programmes, and community engagement initiatives.",
            icon: <Globe className="h-5 w-5" />,
            accent: "linear-gradient(135deg, #fdeee2 0%, #f9f4ee 100%)",
          },
          {
            title: "Facilities & Environment",
            description: "Safe, welcoming, well-equipped learning spaces maintained year-round.",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=80",
          },
        ]}
      />

      <PageCtaBand
        title="Be part of something bigger"
        description="Donate today, volunteer this term, or get in touch to explore a community or corporate partnership."
        primaryCta="Donate Now"
        secondaryCta="Start Volunteering"
      />
    </main>
  )
}

export default SupportUsPage
