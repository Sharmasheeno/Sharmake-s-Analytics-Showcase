import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ExperienceSection from '@/components/sections/experience-section';
import SkillsSection from '@/components/sections/skills-section';
import PortfolioSection from '@/components/sections/portfolio-section';
import CertificationsSection from '@/components/sections/certifications-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactSection from '@/components/sections/contact-section';
import Footer from '@/components/layout/footer';
import AchievementsSection from '@/components/sections/achievements-section';
import CommunityPresenceSection from '@/components/sections/community-presence-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <CommunityPresenceSection />
        <ExperienceSection />
        <SkillsSection />
        <PortfolioSection />
        <CertificationsSection />
        <TestimonialsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
