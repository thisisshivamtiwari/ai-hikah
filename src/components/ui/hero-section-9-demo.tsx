import { Briefcase, Link as LinkIcon, Users } from "lucide-react"

import HeroSection from "@/components/ui/hero-section-9"

const HeroSectionDemo = () => {
  const handleNavigateTo = (sectionId: string) => () => {
    window.location.href = `/home#${sectionId}`
  }

  const heroData = {
    title: (
      <>
        Inspire hearts, educate minds, <br /> and empower lives
      </>
    ),
    subtitle:
      "Al-Hikmah provides holistic and inclusive learning through academy pathways, enrichment programmes, courses, and expert consultancy support.",
    actions: [
      {
        text: "Explore Academy",
        onClick: handleNavigateTo("academy"),
        variant: "default" as const,
      },
      {
        text: "View Courses",
        onClick: handleNavigateTo("courses"),
        variant: "outline" as const,
      },
    ],
    stats: [
      {
        value: "5-16",
        label: "Age pathways",
        icon: <Users className="h-5 w-5 text-brand-700" />,
      },
      {
        value: "DBS",
        label: "Checked team",
        icon: <Briefcase className="h-5 w-5 text-brand-700" />,
      },
      {
        value: "West Midlands",
        label: "Service area",
        icon: <LinkIcon className="h-5 w-5 text-brand-700" />,
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
    ],
  }

  return (
    <div className="w-full">
      <HeroSection
        title={heroData.title}
        subtitle={heroData.subtitle}
        actions={heroData.actions}
        stats={heroData.stats}
        images={heroData.images}
      />
    </div>
  )
}

export default HeroSectionDemo
