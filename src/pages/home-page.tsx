import { useNavigate } from "react-router-dom"
import {
  School,
  Trophy,
  BookMarked,
  BarChart2,
  Shield,
  HeartHandshake,
  GraduationCap,
  Users,
  ClipboardList,
  Globe,
  Moon,
  BookOpen,
  PenLine,
  Dumbbell,
  Palette,
  Heart,
  CheckCircle2,
  Feather,
  Rocket,
  MapPin,
  ArrowRight,
} from "lucide-react"
import HeroSectionDemo from "@/components/ui/hero-section-9-demo"
import AnimatedHeroDemo from "@/components/ui/hero-3-demo"
import { MarqueeLogos } from "@/components/sections/marquee-logos"
import { BentoGrid } from "@/components/sections/bento-grid"
import { CounterShowcase } from "@/components/sections/counter-showcase"
import { FlipCardGrid } from "@/components/sections/flip-card-grid"
import { SpotlightGrid } from "@/components/sections/spotlight-grid"
import { QuoteBand } from "@/components/sections/quote-band"
import { PageCtaBand } from "@/components/sections/page-cta-band"
import { motion } from "framer-motion"

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <main id="home" className="w-full pb-16">
      <HeroSectionDemo />
      <AnimatedHeroDemo />

      <MarqueeLogos
        heading="What we offer at Al-Hikmah"
        items={[
          { label: "Full-Time Academy", icon: <School className="h-4 w-4" /> },
          { label: "Enrichment & Sport", icon: <Trophy className="h-4 w-4" /> },
          { label: "Arabic Language", icon: <Moon className="h-4 w-4" /> },
          { label: "Islamic Studies", icon: <BookMarked className="h-4 w-4" /> },
          { label: "Urdu Language", icon: <PenLine className="h-4 w-4" /> },
          { label: "English Skills", icon: <BookOpen className="h-4 w-4" /> },
          { label: "School Consultancy", icon: <BarChart2 className="h-4 w-4" /> },
          { label: "Safeguarding Support", icon: <Shield className="h-4 w-4" /> },
          { label: "Outdoor Residentials", icon: <Dumbbell className="h-4 w-4" /> },
          { label: "Arts & Creativity", icon: <Palette className="h-4 w-4" /> },
          { label: "Parent Literacy", icon: <Users className="h-4 w-4" /> },
          { label: "Community Events", icon: <Globe className="h-4 w-4" /> },
        ]}
      />

      {/* Programme Showcase */}
      <section className="mx-auto mt-10 w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">Everything Al-Hikmah offers</h2>
          <p className="mt-2 max-w-2xl text-brand-600">
            A complete ecosystem of education, enrichment, and community support — all in one place.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              route: "/academy",
              icon: <School className="h-6 w-6" />,
              tag: "Ages 5–16",
              title: "Academy",
              description: "A full-time, faith-enriched academy curriculum aligned with the national framework — combining academic rigour with Islamic values.",
              image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&auto=format&fit=crop&q=80",
            },
            {
              route: "/enrichment",
              icon: <Trophy className="h-6 w-6" />,
              tag: "All Ages",
              title: "Enrichment & Community",
              description: "Sport, outdoor residentials, arts, and community events that build confidence, identity, and lifelong friendships.",
              image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=900&auto=format&fit=crop&q=80",
            },
            {
              route: "/courses",
              icon: <BookMarked className="h-6 w-6" />,
              tag: "All Levels",
              title: "Language & Islamic Courses",
              description: "Arabic, Urdu, English Skills, Islamic Studies, and Professional Development courses for every age and level.",
              image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=900&auto=format&fit=crop&q=80",
            },
            {
              route: "/consultancy",
              icon: <BarChart2 className="h-6 w-6" />,
              tag: "For Schools",
              title: "Consultancy",
              description: "Curriculum mapping, assessment frameworks, and school improvement support for Islamic schools and academies across the UK.",
              image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&auto=format&fit=crop&q=80",
            },
            {
              route: "/safeguarding",
              icon: <Shield className="h-6 w-6" />,
              tag: "Statutory",
              title: "Safeguarding",
              description: "Our safeguarding framework exceeds UK requirements — DBS-checked staff, GDPR compliance, and a dedicated DSL.",
              image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&auto=format&fit=crop&q=80",
            },
            {
              route: "/support-us",
              icon: <HeartHandshake className="h-6 w-6" />,
              tag: "Community",
              title: "Support & Give",
              description: "Volunteer, donate, or partner with Al-Hikmah to expand our reach and impact for young Muslims across Birmingham.",
              image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&auto=format&fit=crop&q=80",
            },
          ].map((item, index) => (
            <motion.button
              key={item.route}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              whileHover={{ y: -4 }}
              onClick={() => navigate(item.route)}
              className="group relative overflow-hidden rounded-2xl text-left"
              style={{ height: 280 }}
              aria-label={`Go to ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                    {item.tag}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition group-hover:bg-white group-hover:text-brand-700">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-lg font-black text-white">{item.title}</h3>
                    <ArrowRight className="h-4 w-4 text-white/60 transition-transform group-hover:translate-x-1 group-hover:text-white" />
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-white/80">{item.description}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <CounterShowcase
        heading="Real impact across Birmingham and beyond"
        subheading="Numbers that reflect years of commitment to community education and learner growth."
        dark
        items={[
          { label: "Learners Supported", value: 500, suffix: "+", description: "Across all programmes since founding", icon: <GraduationCap className="h-6 w-6" /> },
          { label: "Years of Service", value: 14, suffix: "+", description: "Serving the West Midlands community", icon: <MapPin className="h-6 w-6" /> },
          { label: "Active Programmes", value: 12, suffix: "", description: "Running every term across all areas", icon: <ClipboardList className="h-6 w-6" /> },
          { label: "Community Partners", value: 30, suffix: "+", description: "Schools, charities, and organisations", icon: <Globe className="h-6 w-6" /> },
        ]}
      />

      <FlipCardGrid
        heading="The HIKMAH Difference"
        items={[
          {
            title: "Honesty",
            icon: <Heart className="h-6 w-6" />,
            front: "Transparent relationships at every level — with learners, families, and partners.",
            back: "Open communication, honest feedback, and visible accountability underpin everything we do. No ambiguity, no hidden agendas.",
            accent: "linear-gradient(135deg, #7e1625 0%, #a0202f 100%)",
          },
          {
            title: "Ilm (Knowledge)",
            icon: <BookMarked className="h-6 w-6" />,
            front: "Purposeful learning driven by curiosity, scholarship, and spiritual grounding.",
            back: "Islamic scholarly tradition meets contemporary learning science — giving learners frameworks for lifelong academic and spiritual growth.",
            accent: "linear-gradient(135deg, #5f121d 0%, #7e1625 100%)",
          },
          {
            title: "Kindness",
            icon: <Heart className="h-6 w-6" />,
            front: "Every learner is treated with dignity, patience, and genuine compassion.",
            back: "Trauma-aware, pastoral practice ensures no learner feels invisible, unsupported, or out of place in our learning community.",
            accent: "linear-gradient(135deg, #b8860b 0%, #d4a017 100%)",
          },
          {
            title: "Motivation",
            icon: <Rocket className="h-6 w-6" />,
            front: "Ambition guided by purpose, community aspiration, and Islamic values.",
            back: "High expectations paired with the right support scaffolding — so every learner can reach and exceed their personal potential.",
            accent: "linear-gradient(135deg, #7e1625 0%, #b8860b 100%)",
          },
          {
            title: "Accountability",
            icon: <CheckCircle2 className="h-6 w-6" />,
            front: "Staff and learners own their growth and openly acknowledge their challenges.",
            back: "Regular reviews, transparent checkpoints, and shared responsibility drive continuous improvement at every level of our organisation.",
            accent: "linear-gradient(135deg, #5f121d 0%, #a0202f 100%)",
          },
          {
            title: "Harmony",
            icon: <Feather className="h-6 w-6" />,
            front: "A community where all backgrounds, abilities, and identities genuinely belong.",
            back: "Inclusive practice, cultural cohesion, and respectful dialogue make Al-Hikmah a space where every person feels welcome and valued.",
            accent: "linear-gradient(135deg, #4a5568 0%, #7e1625 100%)",
          },
        ]}
      />

      <SpotlightGrid
        heading="Community moments that define us"
        subheading="From classrooms to residentials — a glimpse into the Al-Hikmah community."
        items={[
          {
            title: "Academy Classrooms",
            description: "National-curriculum lessons enriched with Islamic scholarship and values, taught by experienced and caring educators.",
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&auto=format&fit=crop&q=80",
            tag: "Academy",
          },
          {
            title: "Outdoor Residentials",
            description: "Week-long adventure experiences that build resilience, teamwork, and a deep sense of Muslim identity in natural settings.",
            image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=900&auto=format&fit=crop&q=80",
            tag: "Enrichment",
          },
          {
            title: "Language & Quran Study",
            description: "Small-group Arabic and Quranic sessions with qualified scholars, paced to every learner's level and learning style.",
            image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=900&auto=format&fit=crop&q=80",
            tag: "Courses",
          },
          {
            title: "Sports & Fitness",
            description: "Structured football, swimming, and fitness programmes run by qualified coaches with Islamic values embedded throughout.",
            image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=900&auto=format&fit=crop&q=80",
            tag: "Sport",
          },
          {
            title: "School Improvement",
            description: "Curriculum mapping and assessment consultancy that has measurably improved outcomes for 22+ schools across the UK.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&auto=format&fit=crop&q=80",
            tag: "Consultancy",
          },
          {
            title: "Community & Giving",
            description: "Volunteers, donors, and partners working together to ensure every learner can access Al-Hikmah regardless of means.",
            image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&auto=format&fit=crop&q=80",
            tag: "Community",
          },
        ]}
      />

      <QuoteBand
        quotes={[
          {
            text: "Al-Hikmah gave my daughter not just an education, but a sense of identity, community, and purpose she carries everywhere she goes.",
            author: "Aisha R.",
            role: "Parent, Birmingham",
          },
          {
            text: "The curriculum review Al-Hikmah delivered was the most practical and actionable school improvement work we've received in five years.",
            author: "Head Teacher",
            role: "Islamic Primary School, Birmingham",
          },
          {
            text: "Volunteering with Al-Hikmah has been the most rewarding thing I've done outside of my career. Seeing the children grow is priceless.",
            author: "Yusuf A.",
            role: "Volunteer Arabic Teacher",
          },
          {
            text: "Our children come home inspired — not just about what they learned, but who they're becoming as young Muslims.",
            author: "Ibrahim K.",
            role: "Parent, West Midlands",
          },
        ]}
      />

      <BentoGrid
        heading="Built on a foundation of trust"
        subheading="Every aspect of Al-Hikmah is designed to give families, learners, and partners complete confidence."
        items={[
          {
            title: "DBS-Checked & Safeguarding-Trained",
            description: "Every staff member and volunteer holds an enhanced DBS check and completes annual safeguarding training.",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&auto=format&fit=crop&q=80",
            span: "wide",
          },
          {
            title: "Faith-Centred Values",
            description: "The HIKMAH value system shapes every interaction, policy, and programme we run.",
            icon: <Moon className="h-5 w-5" />,
            accent: "linear-gradient(135deg, #f9f4ee 0%, #fdebd0 100%)",
          },
          {
            title: "Birmingham-Rooted",
            description: "Serving the West Midlands community for over 14 years with deep local knowledge.",
            icon: <MapPin className="h-5 w-5" />,
            accent: "linear-gradient(135deg, #fdebd0 0%, #f9f4ee 100%)",
          },
          {
            title: "Inclusive & Accessible",
            description: "Bursary places, flexible scheduling, and diverse programme formats ensure everyone can participate.",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=80",
            span: "tall",
          },
          {
            title: "Parent Partnership",
            description: "Regular progress reports, open communication, and parent engagement built in to every programme.",
            icon: <Users className="h-5 w-5" />,
            accent: "linear-gradient(135deg, #f9f4ee 0%, #fdeee2 100%)",
          },
          {
            title: "Measurable Outcomes",
            description: "Progress tracked, reported, and visible — for learners, families, and our organisation.",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&auto=format&fit=crop&q=80",
          },
        ]}
      />

      <PageCtaBand
        title="Ready to take the next step with Al-Hikmah?"
        description="Explore our academy, enrol in a course, book a consultation, or simply get in touch. We respond within 2 working days."
        primaryCta="Explore Academy"
        secondaryCta="Contact Us"
      />
    </main>
  )
}

export default HomePage
