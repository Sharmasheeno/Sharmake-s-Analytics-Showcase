import { Section, SectionTitle } from "@/components/layout/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
    { title: "Data Analyst", company: "Burji", date: "Jan 2024 - Jan 2025", description: "Worked remotely, analyzing user data to provide actionable insights for business growth. Developed reports and dashboards to track key performance indicators and inform marketing strategies." },
    { title: "Power BI Developer", company: "MyClinic", date: "Oct 2024 - Apr 2025", description: "Developed interactive Power BI dashboards to monitor 300+ employees across three departments. Used SQL and Excel for data analysis, providing insights that enhanced performance." },
    { title: "Marketing Data Analyst", company: "Iibiye Online", date: "Sep 2024 - Nov 2024", description: "Analyzed social media ads on TikTok and Snapchat, optimizing campaigns with Power BI and Python." },
    { title: "Power BI Intern", company: "DEPI", date: "May 2024 - Sep 2024", description: "Created Power BI dashboards, transforming data into actionable insights for internal teams." },
    { title: "Freelance Data Analyst", company: "Freelance", date: "Oct 2024 - Present", description: "Completed 25+ projects in data analysis, web scraping, and dashboard creation." }
];

const education = {
    degree: "Bachelor's Degree in Computer Science",
    university: "Jamhuriya University, Mogadishu, Somalia",
    grade: "Very Good",
    cgpa: "3.3"
};

const ExperienceCard = ({ experience, side }: { experience: (typeof experiences)[0], side: 'left' | 'right' }) => (
    <div className={cn("w-full md:w-1/2 flex", side === 'left' ? 'justify-start' : 'justify-end')}>
        <div className={cn("w-full md:w-5/6", side === 'left' ? 'md:text-right' : 'md:text-left')}>
            <Card className="group transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground">{experience.date}</p>
                    <h3 className="font-bold text-lg">{experience.title} | {experience.company}</h3>
                    <p className="text-muted-foreground">{experience.description}</p>
                </CardContent>
            </Card>
        </div>
    </div>
);

export default function ExperienceSection() {
    return (
        <Section id="experience" className="bg-gray-50/50">
            <div className="grid lg:grid-cols-2 gap-16">
                <div>
                    <SectionTitle>Experience</SectionTitle>
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-border -translate-x-1/2"></div>

                        <div className="space-y-8 md:space-y-0">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative flex items-center flex-col md:flex-row">
                                    {/* Timeline Dot */}
                                    <div className="hidden md:block absolute top-1/2 left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-y-1/2 -translate-x-1/2 z-10"></div>
                                    
                                    {index % 2 === 0 ? (
                                        <>
                                            <ExperienceCard experience={exp} side="left" />
                                            <div className="hidden md:block w-1/2"></div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="hidden md:block w-1/2"></div>
                                            <ExperienceCard experience={exp} side="right" />
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <SectionTitle>Education</SectionTitle>
                    <Card className="flex-grow transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <div className="p-2 bg-accent/20 rounded-md">
                                <GraduationCap className="w-8 h-8 text-accent" />
                            </div>
                            <div>
                                <CardTitle>{education.degree}</CardTitle>
                                <p className="text-muted-foreground">{education.university}</p>
                            </div>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 gap-4">
                            <div>
                                <span className="text-sm text-muted-foreground">Grade</span>
                                <p className="font-semibold">{education.grade}</p>
                            </div>
                             <div>
                                <span className="text-sm text-muted-foreground">CGPA</span>
                                <p className="font-semibold">{education.cgpa}</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Section>
    )
}
