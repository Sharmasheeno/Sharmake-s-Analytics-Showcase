import { Section, SectionTitle } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const achievements = [
    {
        title: "SQL Competition",
        description: "Participated in a prestigious SQL competition and achieved 3rd place among over 3,000 participants.",
        imgSrc: "https://picsum.photos/400/300?random=1",
        hint: "trophy competition"
    },
    {
        title: "Coursera Courses Completed",
        description: "Completed 50+ Coursera courses (1000+ hours) in data analysis and business intelligence. Ranked in top 1% across multiple skills.",
        imgSrc: "https://picsum.photos/400/300?random=2",
        hint: "online learning"
    },
    {
        title: "DataCamp Courses Completed",
        description: "Completed over 65 courses on DataCamp, enhancing data analysis skills.",
        imgSrc: "https://picsum.photos/400/300?random=3",
        hint: "data science"
    },
    {
        title: "Kaggle Rank",
        description: "2x Kaggle Expert with 21 notebooks and 11 datasets published in data analysis.",
        imgSrc: "https://picsum.photos/400/300?random=4",
        hint: "data competition"
    },
    {
        title: "Codeforces Rank",
        description: "Achieved pupil rank on Codeforces after solving over 1,000 problems.",
        imgSrc: "https://picsum.photos/400/300?random=5",
        hint: "competitive programming"
    },
    {
        title: "HackerRank Gold Badge",
        description: "Earned a Gold Badge for solving numerous challenges on HackerRank (SQL - Python).",
        imgSrc: "https://picsum.photos/400/300?random=6",
        hint: "coding challenge"
    }
];

export default function AchievementsSection() {
    return (
        <Section id="achievements" className="bg-gray-50/50">
            <SectionTitle>Achievements</SectionTitle>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievements.map((achievement, index) => (
                    <Card key={index} className="overflow-hidden">
                        <Image
                            src={achievement.imgSrc}
                            alt={achievement.title}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover"
                            data-ai-hint={achievement.hint}
                        />
                        <CardContent className="p-6">
                            <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                            <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
