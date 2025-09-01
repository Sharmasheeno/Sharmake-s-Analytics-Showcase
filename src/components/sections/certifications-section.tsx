import { Section, SectionTitle } from "@/components/layout/section";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck } from 'lucide-react';

const certifications = [
    { title: "Microsoft Power BI Data Analyst (PL-300)", provider: "Microsoft", date: "September 2024", courses: 1 },
    { title: "Google Data Analytics Professional Certification", provider: "Coursera", date: "July 2024", courses: 8 },
    { title: "IBM Data Analyst Professional Certification", provider: "Coursera", date: "August 2024", courses: 9 },
    { title: "Microsoft Power BI Data Analyst (Coursera)", provider: "Coursera", date: "September 2024", courses: 8 },
    { title: "Meta Data Analyst", provider: "Coursera", date: "September 2024", courses: 5 },
    { title: "Excel Skills for Business", provider: "Coursera", date: "August 2024", courses: 4 },
    { title: "Excel for Data Analysis and Visualization", provider: "Coursera", date: "August 2024", courses: 3 },
    { title: "Hackerrank SQL Certifications", provider: "Hackerrank", date: "July 2024", courses: 3 },
    { title: "Data Analyst with Python", provider: "DataCamp", date: "August 2024", courses: 9 },
    { title: "Data Analyst with Power BI", provider: "DataCamp", date: "August 2024", courses: 17 },
    { title: "Data Analyst with SQL", provider: "DataCamp", date: "August 2024", courses: 11 },
    { title: "Data Analyst with Excel", provider: "DataCamp", date: "August 2024", courses: 5 }
];

export default function CertificationsSection() {
    return (
        <Section id="certifications">
            <SectionTitle>Certifications</SectionTitle>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                    <Card key={index} className="transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                        <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                            <BadgeCheck className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                            <div>
                                <CardTitle className="text-base font-semibold">{cert.title}</CardTitle>
                                <p className="text-sm text-muted-foreground">{cert.provider}</p>
                                <p className="text-xs text-muted-foreground mt-1">{cert.date} · {cert.courses} {cert.courses > 1 ? 'courses' : 'course'}</p>
                            </div>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </Section>
    )
}
