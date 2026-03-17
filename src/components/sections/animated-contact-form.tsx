"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import {
  School,
  BookOpen,
  Trophy,
  BarChart2,
  Users,
  MessageCircle,
  CheckCircle2,
} from "lucide-react"

type FormStep = "type" | "details" | "message" | "done"

const ENQUIRY_TYPES = [
  { id: "academy", label: "Academy Admissions", icon: <School className="h-5 w-5" /> },
  { id: "courses", label: "Course Enrolment", icon: <BookOpen className="h-5 w-5" /> },
  { id: "enrichment", label: "Enrichment Programme", icon: <Trophy className="h-5 w-5" /> },
  { id: "consultancy", label: "Consultancy Services", icon: <BarChart2 className="h-5 w-5" /> },
  { id: "volunteer", label: "Volunteering", icon: <Users className="h-5 w-5" /> },
  { id: "other", label: "General Enquiry", icon: <MessageCircle className="h-5 w-5" /> },
]

const STEPS: FormStep[] = ["type", "details", "message", "done"]

export const AnimatedContactForm = () => {
  const [step, setStep] = useState<FormStep>("type")
  const [selectedType, setSelectedType] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("done")
  }

  return (
    <section className="mx-auto mt-10 w-full max-w-2xl px-4 sm:px-6 lg:px-0">
      <div className="overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-sm">
        <div className="border-b border-brand-100 bg-brand-50 px-6 py-4">
          <div className="flex items-center gap-2">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                    step === s
                      ? "bg-brand-700 text-white"
                      : STEPS.indexOf(step) > i
                      ? "bg-brand-200 text-brand-700"
                      : "bg-brand-100 text-brand-400"
                  }`}
                >
                  {STEPS.indexOf(step) > i ? "✓" : i + 1}
                </div>
                {i < 3 && <div className="h-px w-4 bg-brand-200" />}
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8" style={{ minHeight: 320 }}>
          <AnimatePresence mode="wait">
            {step === "type" && (
              <motion.div
                key="type"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="mb-1 text-lg font-bold text-brand-900">What are you enquiring about?</h3>
                <p className="mb-5 text-sm text-brand-600">Select the area that best matches your enquiry.</p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {ENQUIRY_TYPES.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => {
                        setSelectedType(type.id)
                        setStep("details")
                      }}
                      className={`flex flex-col items-start rounded-xl border p-3 text-left transition-all hover:border-brand-400 hover:bg-brand-50 ${
                        selectedType === type.id ? "border-brand-700 bg-brand-50" : "border-brand-100"
                      }`}
                    >
                      <span className="mb-1 flex h-6 w-6 items-center justify-center text-brand-700">{type.icon}</span>
                      <span className="text-xs font-semibold text-brand-800">{type.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === "details" && (
              <motion.div
                key="details"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="mb-1 text-lg font-bold text-brand-900">Your contact details</h3>
                <p className="mb-5 text-sm text-brand-600">We'll respond within 2 working days.</p>
                <div className="space-y-3">
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-brand-700">Full Name *</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Aisha Rahman"
                      className="w-full rounded-lg border border-brand-200 px-3 py-2.5 text-sm text-brand-900 placeholder:text-brand-300 focus:border-brand-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-brand-700">Email Address *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. aisha@email.com"
                      className="w-full rounded-lg border border-brand-200 px-3 py-2.5 text-sm text-brand-900 placeholder:text-brand-300 focus:border-brand-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-brand-700">Phone Number (optional)</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 07700 900000"
                      className="w-full rounded-lg border border-brand-200 px-3 py-2.5 text-sm text-brand-900 placeholder:text-brand-300 focus:border-brand-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="mt-5 flex gap-3">
                  <button
                    onClick={() => setStep("type")}
                    className="rounded-lg border border-brand-200 px-4 py-2 text-sm font-medium text-brand-600 hover:bg-brand-50"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => name && email && setStep("message")}
                    disabled={!name || !email}
                    className="flex-1 rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-800 disabled:opacity-40"
                  >
                    Continue
                  </button>
                </div>
              </motion.div>
            )}

            {step === "message" && (
              <motion.form
                key="message"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="mb-1 text-lg font-bold text-brand-900">Your message</h3>
                <p className="mb-5 text-sm text-brand-600">Tell us what you need — the more detail, the faster we can help.</p>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  placeholder="e.g. I have a child aged 10 who I'd like to enrol in the Academy. What is the process and when does the next intake begin?"
                  className="w-full rounded-lg border border-brand-200 px-3 py-2.5 text-sm text-brand-900 placeholder:text-brand-300 focus:border-brand-500 focus:outline-none"
                />
                <div className="mt-4 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep("details")}
                    className="rounded-lg border border-brand-200 px-4 py-2 text-sm font-medium text-brand-600 hover:bg-brand-50"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={!message}
                    className="flex-1 rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-800 disabled:opacity-40"
                  >
                    Send Enquiry
                  </button>
                </div>
              </motion.form>
            )}

            {step === "done" && (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="flex flex-col items-center py-8 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-700"
                >
                  <CheckCircle2 className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-bold text-brand-900">Enquiry Received!</h3>
                <p className="mt-2 max-w-xs text-sm text-brand-600">
                  Thank you, {name}. We'll respond to <strong>{email}</strong> within 2 working days.
                </p>
                <button
                  onClick={() => {
                    setStep("type")
                    setName("")
                    setEmail("")
                    setPhone("")
                    setMessage("")
                    setSelectedType("")
                  }}
                  className="mt-6 rounded-lg border border-brand-200 px-5 py-2 text-sm font-medium text-brand-700 hover:bg-brand-50"
                >
                  Submit another enquiry
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
