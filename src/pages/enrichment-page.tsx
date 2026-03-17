import {
  Dumbbell,
  Waves,
  Tent,
  Mountain,
  Sun,
  Palette,
  Moon,
  HandshakeIcon,
  PenLine,
  Monitor,
  Swords,
  Mic,
  Zap,
  Activity,
  Users,
  Target,
  User,
  MapPin,
} from "lucide-react"
import { SpotlightGrid } from "@/components/sections/spotlight-grid"
import { ImageCarousel } from "@/components/sections/image-carousel"
import { MarqueeLogos } from "@/components/sections/marquee-logos"
import { FlipCardGrid } from "@/components/sections/flip-card-grid"
import { CounterShowcase } from "@/components/sections/counter-showcase"
import { PageCtaBand } from "@/components/sections/page-cta-band"
import { PageHero } from "@/components/sections/page-hero"

const EnrichmentPage = () => {
  return (
    <main className="w-full pb-16">
      <PageHero
        eyebrow="Enrichment & Community"
        title="Beyond the classroom — sport, adventure, and community growth"
        description="Al-Hikmah enrichment programmes give young Muslims the outdoor experiences, team challenges, and cultural events that build confidence, identity, and lifelong friendships."
        primaryCta="Explore Programmes"
        secondaryCta="Get in Touch"
        images={[
          "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=900&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=900&auto=format&fit=crop&q=80",
        ]}
      />

      <MarqueeLogos
        heading="Enrichment activities we run"
        items={[
          { label: "Football", icon: <Dumbbell className="h-4 w-4" /> },
          { label: "Swimming", icon: <Waves className="h-4 w-4" /> },
          { label: "Residentials", icon: <Tent className="h-4 w-4" /> },
          { label: "Climbing & Outdoor", icon: <Mountain className="h-4 w-4" /> },
          { label: "Summer Camps", icon: <Sun className="h-4 w-4" /> },
          { label: "Islamic Art", icon: <Palette className="h-4 w-4" /> },
          { label: "Eid Events", icon: <Moon className="h-4 w-4" /> },
          { label: "Community Service", icon: <HandshakeIcon className="h-4 w-4" /> },
          { label: "Creative Writing", icon: <PenLine className="h-4 w-4" /> },
          { label: "Coding Clubs", icon: <Monitor className="h-4 w-4" /> },
          { label: "Martial Arts", icon: <Swords className="h-4 w-4" /> },
          { label: "Debate & Public Speaking", icon: <Mic className="h-4 w-4" /> },
        ]}
      />

      <SpotlightGrid
        heading="Flagship Enrichment Experiences"
        subheading="Each programme is designed to challenge, inspire, and grow our young community members."
        items={[
          {
            title: "Summer Residentials",
            description: "Multi-day outdoor residential experiences combining adventure activities with Islamic reflection and team bonding in natural settings.",
            image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=900&auto=format&fit=crop&q=80",
            tag: "Residentials",
          },
          {
            title: "Sports Academies",
            description: "Structured football, swimming, and fitness programmes run by qualified coaches with Islamic values embedded throughout.",
            image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=900&auto=format&fit=crop&q=80",
            tag: "Sport",
          },
          {
            title: "Community Events",
            description: "Eid celebrations, interfaith visits, charity fundraisers, and local community service projects driven by our learners.",
            image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&auto=format&fit=crop&q=80",
            tag: "Community",
          },
          {
            title: "Outdoor Education",
            description: "Climbing, hiking, and environmental education challenges that push learners beyond their comfort zones in safe, guided settings.",
            image: "https://images.unsplash.com/photo-1464820453369-31d2c0b651af?w=900&auto=format&fit=crop&q=80",
            tag: "Outdoor",
          },
          {
            title: "Creative Arts Workshops",
            description: "Islamic calligraphy, digital art, spoken word poetry, and creative media workshops cultivating artistic identity.",
            image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=900&auto=format&fit=crop&q=80",
            tag: "Arts",
          },
          {
            title: "Leadership Programmes",
            description: "Youth leadership development courses including debate, public speaking, and community project management.",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=80",
            tag: "Leadership",
          },
        ]}
      />

      <ImageCarousel
        heading="Real Moments, Real Impact"
        slides={[
          {
            image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1600&auto=format&fit=crop&q=80",
            title: "Mountain & Outdoor Residentials",
            subtitle: "Week-long adventures that build resilience, teamwork, and Islamic reflection in stunning natural settings.",
            tag: "Residentials",
          },
          {
            image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1600&auto=format&fit=crop&q=80",
            title: "Sports Programme Graduates",
            subtitle: "Dozens of young people have gone on to local club and regional level through our structured sports academies.",
            tag: "Sport",
          },
          {
            image: "https://images.unsplash.com/photo-1464820453369-31d2c0b651af?w=1600&auto=format&fit=crop&q=80",
            title: "Teamwork & Challenge Days",
            subtitle: "Group problem-solving, obstacle courses, and leadership challenges that bond our community together.",
            tag: "Team",
          },
        ]}
      />

      <FlipCardGrid
        heading="Why Enrichment Matters"
        items={[
          {
            title: "Confidence & Identity",
            icon: <Zap className="h-6 w-6" />,
            front: "Young people who know who they are achieve more — in school and beyond.",
            back: "Our enrichment programmes are intentionally designed to build Muslim identity, cultural pride, and personal confidence simultaneously.",
            accent: "linear-gradient(135deg, #7e1625 0%, #a0202f 100%)",
          },
          {
            title: "Physical Wellbeing",
            icon: <Activity className="h-6 w-6" />,
            front: "Active bodies and active minds go hand in hand in healthy development.",
            back: "Sport, adventure, and outdoor learning provide the physical foundations for academic performance and emotional regulation.",
            accent: "linear-gradient(135deg, #5f121d 0%, #7e1625 100%)",
          },
          {
            title: "Social Skills",
            icon: <Users className="h-6 w-6" />,
            front: "Teamwork, empathy, and collaboration built through shared challenges.",
            back: "Multi-year friendships, community bonds, and social resilience skills form naturally through our group enrichment programmes.",
            accent: "linear-gradient(135deg, #b8860b 0%, #d4a017 100%)",
          },
          {
            title: "Spiritual Grounding",
            icon: <Moon className="h-6 w-6" />,
            front: "Faith and recreation woven together for a holistic Muslim experience.",
            back: "Prayer, reflection, Islamic talks, and Ramadan-focused activities ensure every enrichment programme is spiritually enriching too.",
            accent: "linear-gradient(135deg, #4a5568 0%, #7e1625 100%)",
          },
        ]}
      />

      <CounterShowcase
        heading="Enrichment by the Numbers"
        items={[
          { label: "Programme Types", value: 12, suffix: "+", description: "Sport, arts, outdoor, community", icon: <Target className="h-6 w-6" /> },
          { label: "Participants Annually", value: 250, suffix: "+", description: "Young people in enrichment each year", icon: <User className="h-6 w-6" /> },
          { label: "Partner Venues", value: 8, suffix: "+", description: "Sports centres, camps, outdoor sites", icon: <MapPin className="h-6 w-6" /> },
          { label: "Residential Days", value: 35, suffix: "+", description: "Away days and overnight experiences yearly", icon: <Tent className="h-6 w-6" /> },
        ]}
      />

      <PageCtaBand
        title="Book your child into an enrichment programme"
        description="Spaces are limited each term. Enquire early to secure a place in our sports, outdoor, or arts programmes."
        primaryCta="View Current Schedule"
        secondaryCta="Enquire Now"
      />
    </main>
  )
}

export default EnrichmentPage
