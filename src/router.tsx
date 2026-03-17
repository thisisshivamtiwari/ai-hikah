import AppLayout from "@/layouts/app-layout"
import AboutPage from "@/pages/about-page"
import AcademyPage from "@/pages/academy-page"
import ConsultancyPage from "@/pages/consultancy-page"
import ContactPage from "@/pages/contact-page"
import CoursesPage from "@/pages/courses-page"
import EnrichmentPage from "@/pages/enrichment-page"
import HomePage from "@/pages/home-page"
import SafeguardingPage from "@/pages/safeguarding-page"
import SupportUsPage from "@/pages/support-us-page"
import { Navigate, createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: "home", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "academy", element: <AcademyPage /> },
      { path: "enrichment", element: <EnrichmentPage /> },
      { path: "courses", element: <CoursesPage /> },
      { path: "consultancy", element: <ConsultancyPage /> },
      { path: "safeguarding", element: <SafeguardingPage /> },
      { path: "support-us", element: <SupportUsPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
  { path: "*", element: <Navigate to="/home" replace /> },
])
