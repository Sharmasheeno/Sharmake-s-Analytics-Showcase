"use client";

import { Section, SectionTitle } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast({
            title: "Message Sent!",
            description: "Thank you for reaching out. I will get back to you shortly.",
        });
        (e.target as HTMLFormElement).reset();
    };
    
    return (
        <Section id="contact" className="bg-gray-50/50">
            <SectionTitle>Contact Me</SectionTitle>
            <Card className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2">
                    <div className="p-8 space-y-6 bg-primary text-primary-foreground rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                        <h3 className="text-2xl font-bold">Get in Touch</h3>
                        <p className="text-primary-foreground/80">If you would like to get in touch, please reach out using the information below or fill out the form.</p>
                        <div className="space-y-4">
                            <a href="mailto:iamabdallahnasser@gmail.com" className="flex items-center gap-4 text-lg hover:text-accent transition-colors">
                                <Mail className="w-6 h-6 text-accent" />
                                <span>iamabdallahnasser@gmail.com</span>
                            </a>
                            <a href="tel:+201069074781" className="flex items-center gap-4 text-lg hover:text-accent transition-colors">
                                <Phone className="w-6 h-6 text-accent" />
                                <span>+201069074781</span>
                            </a>
                        </div>
                    </div>
                    <div className="p-8">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <Input required placeholder="Your Name" />
                            <Input required type="email" placeholder="Your Email" />
                            <Textarea required placeholder="Your Message" rows={5}/>
                            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Send Message</Button>
                        </form>
                    </div>
                </div>
            </Card>
        </Section>
    )
}
