import { Button } from "@/components/ui/button";
import { FileText, Mail } from "lucide-react";
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="home" className="py-20 md:py-32 overflow-hidden animate-fade-in-down">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left order-2 md:order-1">
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
          <div className="relative flex justify-center items-center h-[350px] w-[350px] md:h-[450px] md:w-[450px] mx-auto order-1 md:order-2">
            <svg
              className="absolute w-full h-full text-accent"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M46.2,-61.2C59.2,-51.9,68.8,-37.8,73.5,-21.8C78.2,-5.8,78,12,71.1,26.5C64.2,41.1,50.6,52.3,36.2,61.3C21.8,70.3,6.5,77,-9,78.8C-24.5,80.7,-40.2,77.7,-53.2,69.1C-66.2,60.5,-76.5,46.3,-79,30.8C-81.5,15.3,-76.1,-1.5,-68.8,-15.8C-61.4,-30.1,-52,-41.9,-40.7,-52.3C-29.4,-62.7,-16.2,-71.7,-1.3,-70.5C13.6,-69.4,27.2,-57.8,40.4,-49.2"
                transform="translate(100 100) scale(1.1)"
              />
            </svg>
            <Image
              src="https://picsum.photos/id/64/400/400"
              alt="Sharmake Hassan"
              width={400}
              height={400}
              className="rounded-full object-cover shadow-lg border-4 border-white z-10 w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
              data-ai-hint="professional headshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
