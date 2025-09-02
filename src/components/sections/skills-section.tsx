"use client";

import { Section, SectionTitle } from "@/components/layout/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { SVGProps } from "react";
import { PythonIcon } from "@/components/icons/python-icon";
import { PowerBiIcon } from "@/components/icons/power-bi-icon";
import { SqlIcon } from "@/components/icons/sql-icon";
import { ExcelIcon } from "@/components/icons/excel-icon";
import { TrophyIcon } from "@/components/icons/trophy-icon";
import { StatisticsIcon } from "@/components/icons/statistics-icon";

type Skill = {
    title: string;
    icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    details: { title: string; points: string[] }[];
};

const skills: Skill[] = [
    {
        title: "Python",
        icon: PythonIcon,
        details: [
            { title: "Core Libraries for Data Analysis:", points: ["NumPy", "Pandas", "Matplotlib", "Seaborn"] },
            { title: "Web Scraping:", points: ["Beautiful Soup", "Scrapy"] }
        ],
    },
    {
        title: "Power BI",
        icon: PowerBiIcon,
        details: [
            { title: "Key Skills:", points: ["Power Query", "Data Modeling", "Data Visualization", "Connecting to Multiple Data Sources", "Creating interactive, auto-updating dashboards"] }
        ],
    },
    {
        title: "SQL",
        icon: SqlIcon,
        details: [
            { title: "Key Expertise:", points: ["DML", "DDL", "Window Functions", "Date & Time Functions", "Aggregation and Joins", "Writing complex queries for data ETL"] }
        ],
    },
    {
        title: "Excel",
        icon: ExcelIcon,
        details: [
            { title: "Key Expertise:", points: ["Complex Formulas", "Pivot Tables", "Power Query", "Power Pivot", "Data Visualization", "Transforming and analyzing data efficiently"] }
        ],
    },
    {
        title: "Competitive Programming",
        icon: TrophyIcon,
        details: [
            { title: "Key Skills:", points: ["Solved over 1,500 coding challenges", "Languages: C++, Python, SQL", "Skilled in applying algorithms for efficiency"] }
        ],
    },
    {
        title: "Statistics",
        icon: StatisticsIcon,
        details: [
            { title: "Descriptive Statistics:", points: ["Frequency", "Dispersion", "Central Tendency"] },
            { title: "Inferential Statistics:", points: ["Hypothesis Testing", "Confidence Intervals"] },
        ],
    },
];

export default function SkillsSection() {
    return (
        <Section id="skills">
            <SectionTitle>Skills</SectionTitle>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                    <Card key={index} className="flex flex-col bg-primary text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <skill.icon className="w-10 h-10" />
                            <CardTitle className="text-2xl font-bold">{skill.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-4">
                            {skill.details.map((detailGroup, i) => (
                                <div key={i}>
                                    <h4 className="font-bold mb-2">{detailGroup.title}</h4>
                                    <ul className="list-disc list-inside text-primary-foreground/90 space-y-1">
                                        {detailGroup.points.map((point, j) => (
                                            <li key={j}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    )
}
