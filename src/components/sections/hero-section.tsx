import { Button } from "@/components/ui/button";
import { FileText, Mail } from "lucide-react";
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="home" className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi,
              <br />
              I&apos;m <span className="text-accent">Sharmake</span>
              <br />
              Data Analyst
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto md:mx-0">
              Transforming data into meaningful insights that inform strategic decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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
          <div className="relative flex justify-center items-center h-[500px]">
             <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-500 to-accent rounded-full blur-3xl opacity-50 animated-gradient"></div>
            <Image
              src="https://picsum.photos/id/64/500/500"
              alt="Sharmake Hassan"
              width={500}
              height={500}
              className="rounded-full object-cover shadow-lg border-4 border-white z-10"
              data-ai-hint="professional headshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
