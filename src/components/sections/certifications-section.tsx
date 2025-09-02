"use client";

import { Section, SectionTitle } from "@/components/layout/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const certifications = [
    { title: "Microsoft Power BI Data Analyst (PL-300)", provider: "Microsoft", date: "September 2024", courses: 1, imgSrc: "https://picsum.photos/400/300?random=21", hint: "data dashboard" },
    { title: "Google Data Analytics Professional Certification", provider: "Coursera", date: "July 2024", courses: 8, imgSrc: "https://picsum.photos/400/300?random=22", hint: "analytics chart" },
    { title: "IBM Data Analyst Professional Certification", provider: "Coursera", date: "August 2024", courses: 9, imgSrc: "https://picsum.photos/400/300?random=23", hint: "data science" },
    { title: "Microsoft Power BI Data Analyst (Coursera)", provider: "Coursera", date: "September 2024", courses: 8, imgSrc: "https://picsum.photos/400/300?random=24", hint: "business intelligence" },
    { title: "Meta Data Analyst", provider: "Coursera", date: "September 2024", courses: 5, imgSrc: "https://picsum.photos/400/300?random=25", hint: "social media analytics" },
    { title: "Excel Skills for Business", provider: "Coursera", date: "August 2024", courses: 4, imgSrc: "https://picsum.photos/400/300?random=26", hint: "spreadsheet data" },
    { title: "Excel for Data Analysis and Visualization", provider: "Coursera", date: "August 2024", courses: 3, imgSrc: "https://picsum.photos/400/300?random=27", hint: "excel charts" },
    { title: "Hackerrank SQL Certifications", provider: "Hackerrank", date: "July 2024", courses: 3, imgSrc: "https://picsum.photos/400/300?random=28", hint: "database code" },
    { title: "Data Analyst with Python", provider: "DataCamp", date: "August 2024", courses: 9, imgSrc: "https://picsum.photos/400/300?random=29", hint: "python programming" },
    { title: "Data Analyst with Power BI", provider: "DataCamp", date: "August 2024", courses: 17, imgSrc: "https://picsum.photos/400/300?random=30", hint: "analytics dashboard" },
    { title: "Data Analyst with SQL", provider: "DataCamp", date: "August 2024", courses: 11, imgSrc: "https://picsum.photos/400/300?random=31", hint: "sql database" },
    { title: "Data Analyst with Excel", provider: "DataCamp", date: "August 2024", courses: 5, imgSrc: "https://picsum.photos/400/300?random=32", hint: "financial spreadsheet" }
];

export default function CertificationsSection() {
    return (
        <Section id="certifications">
            <SectionTitle>Certifications</SectionTitle>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                    <Card key={index} className="overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10 flex flex-col">
                        <Image
                            src={cert.imgSrc}
                            alt={cert.title}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover"
                            data-ai-hint={cert.hint}
                        />
                        <CardContent className="p-6 flex-grow flex flex-col">
                           <div className="flex-grow">
                             <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
                             <p className="text-sm text-muted-foreground">{cert.provider}</p>
                           </div>
                            <p className="text-xs text-muted-foreground mt-2">{cert.date} · {cert.courses} {cert.courses > 1 ? 'courses' : 'course'}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    )
}
