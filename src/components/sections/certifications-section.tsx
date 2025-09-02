"use client";

import { Section, SectionTitle } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const certifications = [
    { title: "Microsoft Power BI Data Analyst (PL-300)", provider: "Microsoft", date: "September 2024", courses: 1, imgSrc: "https://picsum.photos/150/150?random=21", hint: "data certificate" },
    { title: "Google Data Analytics Professional Certification", provider: "Coursera", date: "July 2024", courses: 8, imgSrc: "https://picsum.photos/150/150?random=22", hint: "analytics award" },
    { title: "IBM Data Analyst Professional Certification", provider: "Coursera", date: "August 2024", courses: 9, imgSrc: "https://picsum.photos/150/150?random=23", hint: "data science document" },
    { title: "Microsoft Power BI Data Analyst (Coursera)", provider: "Coursera", date: "September 2024", courses: 8, imgSrc: "https://picsum.photos/150/150?random=24", hint: "business intelligence paper" },
    { title: "Meta Data Analyst", provider: "Coursera", date: "September 2024", courses: 5, imgSrc: "https://picsum.photos/150/150?random=25", hint: "social media certificate" },
    { title: "Excel Skills for Business", provider: "Coursera", date: "August 2024", courses: 4, imgSrc: "https://picsum.photos/150/150?random=26", hint: "spreadsheet award" },
    { title: "Excel for Data Analysis and Visualization", provider: "Coursera", date: "August 2024", courses: 3, imgSrc: "https://picsum.photos/150/150?random=27", hint: "excel charts document" },
    { title: "Hackerrank SQL Certifications", provider: "Hackerrank", date: "July 2024", courses: 3, imgSrc: "https://picsum.photos/150/150?random=28", hint: "database code certificate" },
    { title: "Data Analyst with Python", provider: "DataCamp", date: "August 2024", courses: 9, imgSrc: "https://picsum.photos/150/150?random=29", hint: "python programming award" },
    { title: "Data Analyst with Power BI", provider: "DataCamp", date: "August 2024", courses: 17, imgSrc: "https://picsum.photos/150/150?random=30", hint: "analytics dashboard paper" },
    { title: "Data Analyst with SQL", provider: "DataCamp", date: "August 2024", courses: 11, imgSrc: "https://picsum.photos/150/150?random=31", hint: "sql database document" },
    { title: "Data Analyst with Excel", provider: "DataCamp", date: "August 2024", courses: 5, imgSrc: "https://picsum.photos/150/150?random=32", hint: "financial spreadsheet certificate" }
];

export default function CertificationsSection() {
    return (
        <Section id="certifications">
            <SectionTitle>Certifications</SectionTitle>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                    <Card key={index} className="transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                        <CardContent className="p-6 flex items-center gap-6">
                           <div className="flex-shrink-0">
                                <Image
                                    src={cert.imgSrc}
                                    alt={cert.title}
                                    width={80}
                                    height={80}
                                    className="rounded-md object-cover"
                                    data-ai-hint={cert.hint}
                                />
                           </div>
                           <div className="flex-grow space-y-1">
                             <h3 className="font-bold text-base leading-tight">{cert.title}</h3>
                             <p className="text-sm text-muted-foreground">Issued by: {cert.provider}</p>
                             <p className="text-sm text-muted-foreground">Completed: {cert.date}</p>
                             <p className="text-sm text-muted-foreground">Courses: {cert.courses}</p>
                           </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    )
}
