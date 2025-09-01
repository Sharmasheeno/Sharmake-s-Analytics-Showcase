"use client";

import { Button } from "@/components/ui/button";
import { FileText, Mail } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I&apos;m <span className="text-primary">Sharmake</span>
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-foreground">
              Data Analyst
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="transition-transform transform hover:scale-105">
                <a href="https://drive.google.com/file/d/1FapXf-nE5o8WuMGzANpkgS1qo2JqhniP/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-5 w-5" /> View Resume
                </a>
              </Button>
              <Button asChild size="lg" className="transition-transform transform hover:scale-105">
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" /> Contact
                </a>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-primary/20 rounded-full blur-3xl pulse-slow -z-10" />
            <Image
              src="https://picsum.photos/600/600"
              alt="Sharmake Hassan"
              width={400}
              height={400}
              className="rounded-full object-cover shadow-lg border-4 border-primary/20 w-64 h-64 sm:w-80 sm:h-80"
              data-ai-hint="professional portrait"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
