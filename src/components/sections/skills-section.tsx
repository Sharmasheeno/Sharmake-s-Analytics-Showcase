import { Section, SectionTitle } from "@/components/layout/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code, Database, BarChart2, FileSpreadsheet, Trophy, Brain } from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

type Skill = {
    title: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    details: string[];
};

const skills: Skill[] = [
    {
        title: "Python",
        icon: Code,
        details: [
            "Core Libraries: NumPy, Pandas, Matplotlib, Seaborn",
            "Web Scraping: Beautiful Soup, Scrapy",
        ],
    },
    {
        title: "Power BI",
        icon: BarChart2,
        details: [
            "Key Skills: Power Query, Data Modeling, Data Visualization",
            "Connecting to Multiple Data Sources",
            "Creating interactive, auto-updating dashboards",
        ],
    },
    {
        title: "SQL",
        icon: Database,
        details: [
            "Key Expertise: DML, DDL, Window Functions",
            "Date & Time Functions, Aggregation and Joins",
            "Writing complex queries for data ETL",
        ],
    },
    {
        title: "Excel",
        icon: FileSpreadsheet,
        details: [
            "Key Expertise: Complex Formulas, Pivot Tables",
            "Power Query, Power Pivot, Data Visualization",
            "Transforming and analyzing data efficiently",
        ],
    },
    {
        title: "Competitive Programming",
        icon: Trophy,
        details: [
            "Solved over 1,500 coding challenges",
            "Languages: C++, Python, SQL",
            "Skilled in applying algorithms for efficiency",
        ],
    },
    {
        title: "Statistics",
        icon: Brain,
        details: [
            "Descriptive Statistics: Frequency, Dispersion, Central Tendency",
            "Inferential Statistics: Hypothesis Testing, Confidence Intervals",
        ],
    },
];

export default function SkillsSection() {
    return (
        <Section id="skills">
            <SectionTitle>Skills</SectionTitle>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                    <Card key={index} className="flex flex-col">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <skill.icon className="w-10 h-10 text-accent" />
                            <CardTitle>{skill.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                {skill.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    )
}
