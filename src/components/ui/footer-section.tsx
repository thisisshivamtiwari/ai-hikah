"use client"

import * as React from "react"
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageSquare,
  Send,
  Twitter,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function Footerdemo() {
  const [isChatOpen, setIsChatOpen] = React.useState(false)

  return (
    <footer className="relative border-t border-brand-200/80 bg-gradient-to-b from-brand-50/40 via-brand-50/70 to-brand-100 text-brand-900 transition-colors duration-300">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:px-8 lg:px-10">
        <div className="rounded-2xl border border-brand-200/80 bg-white/80 p-6 shadow-brand sm:p-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-brand-900">Stay Connected</h2>
            <p className="mb-6 text-brand-700/90">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="relative">
              <Input type="email" placeholder="Enter your email" className="border-brand-200 bg-white pr-12" />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-brand-200/50 blur-2xl" />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-brand-900">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a href="/home#home" className="block transition-colors hover:text-brand-700">
                Home
              </a>
              <a href="/home#about" className="block transition-colors hover:text-brand-700">
                About Us
              </a>
              <a href="/home#courses" className="block transition-colors hover:text-brand-700">
                Courses
              </a>
              <a href="/home#consultancy" className="block transition-colors hover:text-brand-700">
                Consultancy
              </a>
              <a href="/home#contact" className="block transition-colors hover:text-brand-700">
                Contact
              </a>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-brand-900">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic text-brand-700">
              <p>Birmingham, West Midlands</p>
              <p>Phone: 0121 987 6543</p>
              <p>Email: info@alhikmah.org.uk</p>
            </address>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full justify-start"
              onClick={() => setIsChatOpen((previousState) => !previousState)}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              {isChatOpen ? "Close message box" : "Quick message"}
            </Button>
            {isChatOpen && (
              <div className="mt-3">
                <Textarea placeholder="Write your message..." />
              </div>
            )}
          </div>

          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold text-brand-900">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-brand-200 bg-white">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-brand-200 bg-white">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-brand-200 bg-white">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-brand-200 bg-white">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-brand-200/80 pt-8 text-center md:flex-row">
          <p className="text-sm text-brand-700">© 2024 Al-Hikmah. All rights reserved.</p>
          <nav className="flex gap-4 text-sm">
            <a href="/home#safeguarding" className="transition-colors hover:text-brand-700">
              Privacy Policy
            </a>
            <a href="/home#contact" className="transition-colors hover:text-brand-700">
              Terms of Service
            </a>
            <a href="/home#contact" className="transition-colors hover:text-brand-700">
              Cookie Settings
            </a>
          </nav>
        </div>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }
