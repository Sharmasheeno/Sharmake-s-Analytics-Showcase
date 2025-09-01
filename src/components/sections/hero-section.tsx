import { Button } from "@/components/ui/button";
import { FileText, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="py-20 md:py-32 overflow-hidden animate-fade-in-down">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="space-y-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi,
              <br />
              I&apos;m <span className="text-accent">Sharmake</span>
              <br />
              Data Analyst
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              Transforming data into meaningful insights that inform strategic decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="https://drive.google.com/file/d/1FapXf-nE5o8WuMGzANpkgS1qo2JqhniP/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-5 w-5" /> View Resume
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" /> Contact
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
