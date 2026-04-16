import { AnimatedMarqueeHero } from "@/components/ui/hero-3"

const DEMO_IMAGES = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=900&auto=format&fit=crop&q=80",
]

const AnimatedHeroDemo = () => {
  return (
    <AnimatedMarqueeHero
      tagline="Community-rooted and values-driven education"
      title={
        <>
          Learn with purpose,
          <br />
          grow with confidence
        </>
      }
      description="From home education and enrichment to faith, language, and compliance courses, Al-Hikmah helps learners and organisations thrive with support that is practical, inclusive, and impactful."
      ctaText="Book a Consultation"
      images={DEMO_IMAGES}
    />
  )
}

export default AnimatedHeroDemo
