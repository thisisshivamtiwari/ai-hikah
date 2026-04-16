import { useNavigate } from "react-router-dom"
import {
  School,
  Trophy,
  BookMarked,
  BarChart2,
  GraduationCap,
  Users,
  ClipboardList,
  Globe,
  Languages,
  Tent,
  Moon,
  Palette,
  Scale,
  Sparkles,
  CheckCircle2,
  Rocket,
  Landmark,
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
          {
            label: (
              <>
                Academic
                <br />
                pathways
              </>
            ),
            icon: <GraduationCap className="h-4 w-4" />,
          },
          { label: "GCSE courses", icon: <ClipboardList className="h-4 w-4" /> },
          { label: "Languages", icon: <Languages className="h-4 w-4" /> },
          { label: "Consultancy", icon: <BarChart2 className="h-4 w-4" /> },
          { label: "Enrichment", icon: <Trophy className="h-4 w-4" /> },
          { label: "Residentials", icon: <Tent className="h-4 w-4" /> },
          {
            label: (
              <>
                Arts and
                <br />
                Crafts
              </>
            ),
            icon: <Palette className="h-4 w-4" />,
          },
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
          <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">Our Offer</h2>
          <p className="mt-2 max-w-2xl text-brand-600">
            A complete ecosystem of education, enrichment, and community support — all in one place.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {[
            {
              route: "/academy",
              icon: <School className="h-6 w-6" />,
              tag: "KS3–KS5",
              title: "Academy",
              description:
                "Al-Hikmah Academy provides high-quality weekday tuition for students in KS3–KS5, delivered in a focused, supportive learning environment. Our small class sizes, subject-specialist teaching, and values-driven approach ensure strong academic progress, character development, and preparation for future pathways. We also offer expert support for home-educating families, including curriculum planning, assessment guidance, and personalised advice to help parents feel confident and fully equipped in their educational choices.",
              image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&auto=format&fit=crop&q=80",
            },
            {
              route: "/courses",
              icon: <BookMarked className="h-6 w-6" />,
              tag: "Online",
              title: "Courses",
              description:
                "Our growing range of online courses is designed to foster curiosity, independence, and lifelong learning. These flexible programmes support learners of all ages and promote continuous personal and academic development.",
              image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=900&auto=format&fit=crop&q=80",
            },
            {
              route: "/enrichment",
              icon: <Trophy className="h-6 w-6" />,
              tag: "Community",
              title: "Enrichment",
              description:
                "We deliver a diverse programme of enrichment activities that bring families and communities together. From creative workshops to youth development initiatives, our enrichment offer promotes wellbeing, confidence, and meaningful community engagement.",
              image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=900&auto=format&fit=crop&q=80",
            },
            {
              route: "/consultancy",
              icon: <BarChart2 className="h-6 w-6" />,
              tag: "Schools & organisations",
              title: "Consultancy",
              description:
                "Al-Hikmah provides tailored consultancy services for schools, community organisations, and educational establishments. We support institutions with strategic planning, curriculum development, staff training, and bespoke solutions to enhance educational quality and outcomes.",
              image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&auto=format&fit=crop&q=80",
            },
          ].map((item, index) => (
            <motion.button
              key={item.route}
              type="button"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              onClick={() => navigate(item.route)}
              className="group flex h-full min-h-0 flex-col overflow-hidden rounded-3xl border border-brand-200/90 bg-gradient-to-b from-white to-brand-50/40 text-left shadow-md ring-1 ring-brand-200/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg hover:ring-brand-300/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
              aria-label={`Go to ${item.title}`}
            >
              <div className="relative h-44 w-full shrink-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.title} — Al-Hikmah`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/25 to-transparent" />
                <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/95 text-brand-700 shadow-md backdrop-blur-sm transition duration-300 group-hover:border-brand-200 group-hover:bg-brand-700 group-hover:text-white">
                  {item.icon}
                </div>
              </div>
              <div className="flex min-h-0 flex-1 flex-col p-6">
                <span className="w-fit rounded-full border border-brand-200/80 bg-brand-100/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-800">
                  {item.tag}
                </span>
                <div className="mt-4 flex items-center gap-2 border-b border-brand-200/60 pb-3">
                  <h3 className="font-serif text-xl font-semibold tracking-tight text-brand-900">{item.title}</h3>
                  <ArrowRight
                    className="h-4 w-4 shrink-0 translate-y-px text-brand-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-brand-700"
                    aria-hidden
                  />
                </div>
                <div className="mt-3 min-h-[17rem] max-h-[17rem] flex-1 overflow-y-auto overscroll-y-contain pr-1 [scrollbar-color:rgba(155,28,44,0.35)_transparent] [scrollbar-width:thin]">
                  <p className="text-[0.8125rem] leading-[1.7] text-brand-800/95 sm:text-sm">{item.description}</p>
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
          { label: "Learners Supported", value: 250, suffix: "+", description: "Across all programmes since founding", icon: <GraduationCap className="h-6 w-6" /> },
          { label: "Years of Service", value: 5, suffix: "+", description: "Serving the West Midlands community", icon: <MapPin className="h-6 w-6" /> },
          { label: "Active Programmes", value: 10, suffix: "", description: "Running every term across all areas", icon: <ClipboardList className="h-6 w-6" /> },
          { label: "Community Partners", value: 15, suffix: "+", description: "Schools, charities, and organisations", icon: <Globe className="h-6 w-6" /> },
        ]}
      />

      <FlipCardGrid
        heading="Al-Hikmah Values"
        items={[
          {
            title: "H — Honesty",
            icon: <Scale className="h-6 w-6" />,
            front: "Integrity, sincerity, and ethical conduct in how we work with every learner and partner.",
            back: "We uphold the highest standards of integrity, sincerity, and ethical conduct in all aspects of our work.",
            accent: "linear-gradient(135deg, #7e1625 0%, #a0202f 100%)",
          },
          {
            title: "I — Inspiration",
            icon: <Sparkles className="h-6 w-6" />,
            front: "Curiosity, ambition, and a lifelong commitment to learning and excellence.",
            back: "We inspire curiosity, ambition, and a lifelong commitment to learning, encouraging every individual to strive for excellence.",
            accent: "linear-gradient(135deg, #5f121d 0%, #7e1625 100%)",
          },
          {
            title: "K — Knowledge (ʿIlm)",
            icon: <BookMarked className="h-6 w-6" />,
            front: "A love of learning rooted in curiosity, reflection, and growth for every learner.",
            back: "We cultivate a love of learning rooted in curiosity, reflection, and growth, ensuring every learner gains the knowledge and understanding they need to thrive.",
            accent: "linear-gradient(135deg, #b8860b 0%, #d4a017 100%)",
          },
          {
            title: "M — Motivation",
            icon: <Rocket className="h-6 w-6" />,
            front: "Ambition, resilience, and self-belief so learners persevere and reach their goals.",
            back: "We promote ambition, resilience, and self-belief, empowering learners to persevere and achieve their goals.",
            accent: "linear-gradient(135deg, #7e1625 0%, #b8860b 100%)",
          },
          {
            title: "A — Accountability",
            icon: <CheckCircle2 className="h-6 w-6" />,
            front: "Clear ownership of actions, decisions, and outcomes — with a drive to keep improving.",
            back: "We take responsibility for our actions, decisions, and outcomes, maintaining a commitment to continuous improvement and high standards.",
            accent: "linear-gradient(135deg, #5f121d 0%, #a0202f 100%)",
          },
          {
            title: "H — Heritage",
            icon: <Landmark className="h-6 w-6" />,
            front: "Honouring Islamic and cultural tradition as a living foundation for who we become.",
            back: "We honour our Islamic and cultural heritage, drawing on timeless scholarship and community tradition so learners grow with strong identity, dignity, and continuity across generations.",
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
