import {
  MapPin,
  Mail,
  Phone,
  Clock,
  School,
  BookOpen,
  BarChart2,
  Users,
  Moon,
  HeartHandshake,
  Building2,
  Cross,
  Dumbbell,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react"
import { AnimatedContactForm } from "@/components/sections/animated-contact-form"
import { BentoGrid } from "@/components/sections/bento-grid"
import { QuoteBand } from "@/components/sections/quote-band"
import { MarqueeLogos } from "@/components/sections/marquee-logos"
import { motion } from "framer-motion"

const CONTACT_INFO = [
  { icon: <MapPin className="h-5 w-5" />, label: "Location", value: "Birmingham, West Midlands, UK" },
  { icon: <Mail className="h-5 w-5" />, label: "Email", value: "info@al-hikmah.org.uk" },
  { icon: <Phone className="h-5 w-5" />, label: "Phone", value: "+44 (0)121 000 0000" },
  { icon: <Clock className="h-5 w-5" />, label: "Response Time", value: "Within 2 working days" },
]

const SOCIAL_LINKS = [
  { icon: <Twitter className="h-4 w-4" />, label: "X / Twitter" },
  { icon: <Facebook className="h-4 w-4" />, label: "Facebook" },
  { icon: <Instagram className="h-4 w-4" />, label: "Instagram" },
  { icon: <Youtube className="h-4 w-4" />, label: "YouTube" },
]

const ContactPage = () => {
  return (
    <main className="w-full pb-16">
      <section className="mx-auto max-w-7xl px-4 pb-4 pt-8 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-3 inline-block rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700">
              Get in Touch
            </span>
            <h1 className="text-3xl font-black leading-tight text-brand-900 sm:text-4xl lg:text-5xl">
              We'd love to<br />
              <span className="text-brand-700">hear from you</span>
            </h1>
            <p className="mt-4 max-w-md text-brand-600">
              Whether you're a parent exploring options, a school seeking consultancy, a volunteer ready to contribute, or a partner wanting to collaborate — we respond to every enquiry within 2 working days.
            </p>

            <div className="mt-8 space-y-4">
              {CONTACT_INFO.map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-brand-500">{item.label}</div>
                    <div className="text-sm font-medium text-brand-800">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-500">Follow us</p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((s) => (
                  <button
                    key={s.label}
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-600 transition hover:border-brand-400 hover:bg-brand-50 hover:text-brand-800"
                  >
                    {s.icon}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <AnimatedContactForm />
          </motion.div>
        </div>
      </section>

      <MarqueeLogos
        heading="We work with and support"
        items={[
          { label: "Islamic Schools", icon: <Moon className="h-4 w-4" /> },
          { label: "State Academies", icon: <School className="h-4 w-4" /> },
          { label: "Mosques & Centres", icon: <Building2 className="h-4 w-4" /> },
          { label: "Local Charities", icon: <HeartHandshake className="h-4 w-4" /> },
          { label: "Community Groups", icon: <Users className="h-4 w-4" /> },
          { label: "NHS & Wellbeing", icon: <Cross className="h-4 w-4" /> },
          { label: "Sports Clubs", icon: <Dumbbell className="h-4 w-4" /> },
          { label: "Parent Networks", icon: <Users className="h-4 w-4" /> },
          { label: "Youth Organisations", icon: <BookOpen className="h-4 w-4" /> },
        ]}
      />

      <BentoGrid
        heading="How We Can Help You"
        subheading="The right team for every type of enquiry — from admissions to partnerships."
        items={[
          {
            title: "Academy Admissions",
            description: "Our admissions team guides families through every step of joining the academy.",
            icon: <School className="h-5 w-5" />,
            span: "wide",
            accent: "linear-gradient(135deg, #f9f4ee 0%, #fdebd0 100%)",
          },
          {
            title: "Course Enrolment",
            description: "Flexible enrolment for Arabic, Urdu, English and Islamic courses.",
            icon: <BookOpen className="h-5 w-5" />,
            accent: "linear-gradient(135deg, #fdebd0 0%, #f9f4ee 100%)",
          },
          {
            title: "Consultancy Enquiries",
            description: "For schools and education providers seeking improvement support.",
            icon: <BarChart2 className="h-5 w-5" />,
            accent: "linear-gradient(135deg, #f9f4ee 0%, #fdeee2 100%)",
          },
          {
            title: "Community & Partnerships",
            description: "Build something together with Al-Hikmah — for Birmingham and beyond.",
            image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&auto=format&fit=crop&q=80",
            span: "tall",
          },
          {
            title: "Volunteering",
            description: "Join our team of volunteers — teaching, mentoring, or supporting events.",
            icon: <Users className="h-5 w-5" />,
            accent: "linear-gradient(135deg, #fdebd0 0%, #f9f4ee 100%)",
          },
          {
            title: "Safeguarding Concerns",
            description: "Contact our DSL directly for any urgent safeguarding matters.",
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&auto=format&fit=crop&q=80",
          },
        ]}
      />

      <QuoteBand
        quotes={[
          {
            text: "I sent an enquiry on a Tuesday evening and had a full response with next steps by Thursday morning. Genuinely impressive and personal communication.",
            author: "Omar S.",
            role: "Parent Enquiry",
          },
          {
            text: "The team is accessible, friendly, and professional. They answered every question I had about the academy within hours.",
            author: "Rahana B.",
            role: "New Family, September 2024",
          },
          {
            text: "We reached out about a consultancy project and from the first call, felt we were dealing with experts who truly care about learner outcomes.",
            author: "School Partnership Lead",
            role: "Birmingham Academy",
          },
        ]}
      />
    </main>
  )
}

export default ContactPage
