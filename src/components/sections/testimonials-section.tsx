"use client";

import { useState } from 'react';
import { Section, SectionTitle } from "@/components/layout/section";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { summarizeTestimonials } from "@/ai/flows/summarize-testimonials";
import type { SummarizeTestimonialsInput } from "@/ai/flows/summarize-testimonials";
import Image from 'next/image';
import { Sparkles, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";

const testimonials: SummarizeTestimonialsInput = [
    { name: "Mohammed", text: "Fantastic work! I would recommend Sharmake without hesitation for his professionalism and expertise." },
    { name: "Osama", text: "Sharmake is a smart, diligent, and ambitious professional. It has been a pleasure collaborating and working with him. I wish him continued success and growth in all his endeavors." },
    { name: "Ahmed Hagag", text: "Highly cooperative, consistently punctual, and a true pleasure to work with!" },
    { name: "Malik", text: "Professionalism in every sense of the word, from adhering to work deadlines and delivering reports to the smooth and pleasant personal interactions. This is what I experienced while working with Engineer Sharmake." }
];

const testimonialDetails = [
    { location: "New York, USA", title: "Senior Data Analyst" },
    { location: "Riyadh, Saudi Arabia", title: "Senior Manager" },
    { location: "Cairo, Egypt", title: "Professor at the Faculty of Computers and AI" },
    { location: "Riyadh, Saudi Arabia", title: "Media Buyer" }
]

export default function TestimonialsSection() {
    const [summary, setSummary] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const handleSummarize = async () => {
        setIsLoading(true);
        setSummary('');
        try {
            const result = await summarizeTestimonials(testimonials);
            setSummary(result);
        } catch (e) {
            console.error(e);
            toast({
                title: "Error",
                description: "Failed to summarize testimonials. Please try again later.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <Section id="testimonials">
            <SectionTitle>Testimonials</SectionTitle>
            <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                    <Card key={index} className="transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                        <CardContent className="p-6">
                            <blockquote className="border-l-2 pl-6 italic text-muted-foreground">
                                "{testimonial.text}"
                            </blockquote>
                            <div className="flex items-center gap-4 mt-6">
                                <Image 
                                    src={`https://picsum.photos/seed/${testimonial.name}/50/50`}
                                    alt={testimonial.name}
                                    width={50}
                                    height={50}
                                    className="rounded-full"
                                    data-ai-hint="person"
                                />
                                <div>
                                    <p className="font-semibold">{testimonial.name}</p>
                                    <p className="text-sm text-muted-foreground">{testimonialDetails[index].title}</p>
                                    <p className="text-xs text-muted-foreground">{testimonialDetails[index].location}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="text-center mt-12">
                <Button onClick={handleSummarize} disabled={isLoading} size="lg">
                    {isLoading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                        <Sparkles className="mr-2 h-4 w-4" />
                    )}
                    Summarize with AI
                </Button>
            </div>

            {summary && (
                <div className="mt-8 max-w-3xl mx-auto">
                     <Alert>
                        <Sparkles className="h-4 w-4" />
                        <AlertTitle>AI Generated Summary</AlertTitle>
                        <AlertDescription>
                            {summary}
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </Section>
    )
}
