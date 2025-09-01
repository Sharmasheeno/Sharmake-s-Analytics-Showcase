import { Button } from "@/components/ui/button";
import { FileText, Mail } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-20 md:py-32"
    >
       <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary via-background to-accent animated-gradient -z-10"></div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in-down">
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
          <div className="relative flex justify-center items-center">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-accent/20">
                <Image
                    src="https://picsum.photos/400/400"
                    alt="Sharmake Hassan"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                    data-ai-hint="professional portrait"
                    priority
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
