"use client"

import Link from "next/link"
import { Layers } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { useState, useEffect } from "react"

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-md border-b transition-colors duration-300 ${
        isScrolled ? "bg-black/70 border-white/20" : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-purple-400 text-xl font-semibold select-none">
          <Layers className="h-6 w-6" />
          Apulse
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-white/70 font-medium text-sm">
          <Link href="#features" className="hover:text-white transition">
            Features
          </Link>
          <Link href="#mockup" className="hover:text-white transition">
            Mock-up Engine
          </Link>
          <Link href="#pricing" className="hover:text-white transition">
            Pricing
          </Link>
          <Link href="#testimonials" className="hover:text-white transition">
            Testimonials
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button
            variant="outline"
            className="hidden md:inline-flex rounded-full border-white/20 text-white hover:bg-white/10"
            size="sm"
          >
            Log in
          </Button>
          <Button className="rounded-full bg-purple hover:bg-purple-dark" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}
