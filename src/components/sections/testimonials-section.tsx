"use client";

import type { SVGProps } from 'react';
import { Section, SectionTitle } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { USAFlagIcon } from '@/components/icons/usa-flag-icon';
import { SaudiArabiaFlagIcon } from '@/components/icons/saudi-arabia-flag-icon';
import { EgyptFlagIcon } from '@/components/icons/egypt-flag-icon';

type Testimonial = {
  name: string;
  text: string;
  location: string;
  title: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

const testimonials: Testimonial[] = [
    { 
        name: "Mohammed", 
        text: "Fantastic work! I would recommend Sharmake without hesitation for his professionalism and expertise.", 
        location: "New York, USA", 
        title: "Senior Data Analyst",
        Icon: USAFlagIcon,
    },
    { 
        name: "Osama", 
        text: "Sharmake is a smart, diligent, and ambitious professional. It has been a pleasure collaborating and working with him. I wish him continued success and growth in all his endeavors.", 
        location: "Riyadh, Saudi Arabia", 
        title: "Senior Manager",
        Icon: SaudiArabiaFlagIcon,
    },
    { 
        name: "Ahmed Hagag", 
        text: "Highly cooperative, consistently punctual, and a true pleasure to work with!", 
        location: "Cairo, Egypt", 
        title: "Professor at the Faculty of Computers and AI",
        Icon: EgyptFlagIcon,
    },
    { 
        name: "Malik", 
        text: "Professionalism in every sense of the word, from adhering to work deadlines and delivering reports to the smooth and pleasant personal interactions. This is what I experienced while working with Engineer Sharmake.", 
        location: "Riyadh, Saudi Arabia", 
        title: "Media Buyer",
        Icon: SaudiArabiaFlagIcon,
    }
];


export default function TestimonialsSection() {
    return (
        <Section id="testimonials">
            <SectionTitle>Testimonials</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {testimonials.map((testimonial, index) => {
                    const Icon = testimonial.Icon;
                    return (
                        <Card key={index} className="transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                            <CardContent className="p-6 text-center">
                               <div className="flex justify-center mb-4">
                                    <Icon className="w-20 h-20 rounded-full" />
                               </div>
                                <h3 className="font-bold text-lg">{testimonial.name}</h3>
                                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                                <p className="text-sm font-semibold mt-1">{testimonial.title}</p>
                                <blockquote className="mt-4 italic text-muted-foreground">
                                    "{testimonial.text}"
                                </blockquote>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </Section>
    )
}
