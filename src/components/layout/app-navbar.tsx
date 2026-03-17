import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  NavItems,
  Navbar,
  NavbarButton,
  NavbarLogo,
} from "@/components/ui/resizable-navbar"
import { useState } from "react"

const navItems = [
  { name: "Home", link: "/home" },
  { name: "About", link: "/about" },
  { name: "Academy", link: "/academy" },
  { name: "Enrichment", link: "/enrichment" },
  { name: "Courses", link: "/courses" },
  { name: "Consultancy", link: "/consultancy" },
  { name: "Safeguarding", link: "/safeguarding" },
  { name: "Support Us", link: "/support-us" },
  { name: "Contact", link: "/contact" },
]

export const AppNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="relative w-full">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="hidden items-center gap-2 2xl:flex">
            <NavbarButton href="/support-us" variant="secondary">
              Support Us
            </NavbarButton>
            <NavbarButton href="/contact" variant="gradient">
              Contact Us
            </NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((previousState) => !previousState)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="cursor-pointer text-brand-800 hover:text-brand-700"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-3">
              <NavbarButton
                href="/support-us"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full"
              >
                Support Us
              </NavbarButton>
              <NavbarButton
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="gradient"
                className="w-full"
              >
                Contact Us
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </header>
  )
}
