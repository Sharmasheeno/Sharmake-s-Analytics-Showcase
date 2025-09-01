"use client";

import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#certifications", label: "Certifications" },
  { href: "#testimonials", label: "Testimonials" },
];

export default function Header() {
  const [activeLink, setActiveLink] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const sections = navLinks.map(link => document.querySelector(link.href));
      let current = "";
      for (const section of sections) {
        if (section && window.scrollY >= (section as HTMLElement).offsetTop - 100) {
          current = `#${section.id}`;
        }
      }
      if(current) setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinkItems = ({ isMobile = false }) => (
    <>
      {navLinks.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          onClick={() => isMobile && setIsMobileMenuOpen(false)}
          className={cn(
            "font-medium transition-colors relative",
            activeLink === href ? "text-primary" : "text-foreground/80 hover:text-primary",
            isMobile ? "block py-2 text-lg" : "text-sm",
          )}
        >
          {label}
           {activeLink === href && !isMobile && (
            <span className="absolute bottom-[-8px] left-0 w-full h-0.5 bg-primary"></span>
          )}
        </a>
      ))}
       <Button asChild variant={isMobile ? "default" : "outline"} size="sm" onClick={() => isMobile && setIsMobileMenuOpen(false)}>
        <a href="#contact">Contact</a>
      </Button>
    </>
  );

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", isScrolled && "shadow-sm")}>
      <div className="container flex h-16 items-center justify-between px-4">
        <a href="#home" className="text-base md:text-lg font-bold text-foreground transition-transform hover:scale-105">
          Sharmake’s Analytics Hub
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          <NavLinkItems />
        </nav>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <NavLinkItems isMobile={true} />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
