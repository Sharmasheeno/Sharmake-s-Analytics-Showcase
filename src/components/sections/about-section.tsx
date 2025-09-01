import { Section, SectionTitle } from "@/components/layout/section";

export default function AboutSection() {
    return (
        <Section id="about" className="bg-gray-50/50">
            <SectionTitle>About</SectionTitle>
            <div className="max-w-3xl mx-auto text-center space-y-4">
                <h3 className="text-3xl font-bold">I&apos;m Sharmake</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                    I am a data analyst with a foundation in computer science, specializing in transforming data into meaningful insights
                    that inform strategic decision-making. My expertise in Power BI, SQL, and Python allows me to analyze complex datasets
                    and deliver clear, actionable recommendations. Committed to continuous learning and professional growth, I am eager to
                    collaborate with others in developing innovative, data-driven solutions.
                </p>
            </div>
        </Section>
    )
}
