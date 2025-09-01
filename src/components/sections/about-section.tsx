import { Section, SectionTitle } from "@/components/layout/section";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Github, Youtube, Code, BrainCircuit, BookOpen, Star, Award, PenTool, Rss, Terminal, Laptop } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const socialLinks: { name: string; href: string; Icon: LucideIcon }[] = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/abdallahanalyst/", Icon: Linkedin },
    { name: "GitHub", href: "https://github.com/AbdallahNasserr", Icon: Github },
    { name: "Maven", href: "https://mavenanalytics.io/profile/Abdallah-Nasser/199163157", Icon: Award },
    { name: "Kaggle", href: "https://www.kaggle.com/abdallahprogrammer", Icon: BrainCircuit },
    { name: "DataCamp", href: "https://www.datacamp.com/portfolio/sabelalhedaya5", Icon: Laptop },
    { name: "Coursera", href: "https://www.coursera.org/learner/abdallah", Icon: BookOpen },
    { name: "Medium", href: "https://medium.com/@sabelalhedaya5", Icon: Rss },
    { name: "Credly", href: "https://www.credly.com/users/abdallah-nasser.f593db42", Icon: Star },
    { name: "YouTube", href: "https://www.youtube.com/@AbdallahAnalyst", Icon: Youtube },
    { name: "HackerRank", href: "https://www.hackerrank.com/profile/abdallahprogram1", Icon: Terminal },
    { name: "CodeForces", href: "https://codeforces.com/profile/Abdallah_Nasser", Icon: Code },
];

export default function AboutSection() {
    return (
        <Section id="about">
            <SectionTitle>About Me</SectionTitle>
            <div className="grid md:grid-cols-5 gap-12 items-center">
                <div className="md:col-span-2">
                    <Image
                        src="https://picsum.photos/600/800"
                        alt="Sharmake Hassan"
                        width={600}
                        height={800}
                        className="rounded-lg object-cover shadow-lg w-full h-auto"
                        data-ai-hint="professional portrait"
                    />
                </div>
                <div className="md:col-span-3 space-y-4">
                    <h3 className="text-2xl font-semibold">I&apos;m Sharmake</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        I am a data analyst with a foundation in computer science, specializing in transforming data into meaningful insights
                        that inform strategic decision-making. My expertise in Power BI, SQL, and Python allows me to analyze complex datasets
                        and deliver clear, actionable recommendations. Committed to continuous learning and professional growth, I am eager to
                        collaborate with others in developing innovative, data-driven solutions.
                    </p>
                </div>
            </div>

            <div className="mt-20">
                <h3 className="text-2xl font-bold text-center mb-4">My Presence in the Data Community</h3>
                <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                    See how I engage and grow across key data and programming communities:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {socialLinks.map(({ name, href, Icon }) => (
                        <a href={href} key={name} target="_blank" rel="noopener noreferrer">
                            <Card className="hover:bg-accent/20 hover:border-accent transition-all duration-300 transform hover:-translate-y-1">
                                <CardContent className="flex flex-col items-center justify-center p-6 gap-2">
                                    <Icon className="w-8 h-8 text-accent" />
                                    <span className="font-medium text-sm text-center">{name}</span>
                                </CardContent>
                            </Card>
                        </a>
                    ))}
                </div>
            </div>
        </Section>
    )
}
