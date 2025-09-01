import { Section, SectionTitle } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

const projects = [
    { title: "Sales Analysis - Power BI", imgSrc: "https://picsum.photos/600/400?random=1", href: "#", hint: "dashboard sales" },
    { title: "LinkedIn Performance - Power BI", imgSrc: "https://picsum.photos/600/400?random=2", href: "#", hint: "social media dashboard" },
    { title: "Airline Analysis - Power BI", imgSrc: "https://picsum.photos/600/400?random=3", href: "#", hint: "travel analytics" },
    { title: "Top Billionaires - Power BI", imgSrc: "https://picsum.photos/600/400?random=4", href: "#", hint: "wealth dashboard" },
    { title: "Adventure Works - Excel", imgSrc: "https://picsum.photos/600/400?random=5", href: "#", hint: "spreadsheet analysis" },
    { title: "Healthcare Analysis- Excel", imgSrc: "https://picsum.photos/600/400?random=6", href: "#", hint: "medical data" },
    { title: "HR Analysis - Excel", imgSrc: "https://picsum.photos/600/400?random=7", href: "#", hint: "employee data" },
    { title: "Covid19 - SQL", imgSrc: "https://picsum.photos/600/400?random=8", href: "#", hint: "database query" },
    { title: "Football Analysis - SQL", imgSrc: "https://picsum.photos/600/400?random=9", href: "#", hint: "sports analytics" },
    { title: "American Names - SQL", imgSrc: "https://picsum.photos/600/400?random=10", href: "#", hint: "data trends" },
    { title: "Golden Age of Games - SQL", imgSrc: "https://picsum.photos/600/400?random=11", href: "#", hint: "gaming data" },
    { title: "My Pandas Tutorial - Python", imgSrc: "https://picsum.photos/600/400?random=12", href: "#", hint: "python code" },
    { title: "My Matplotlib Tutorial - Python", imgSrc: "https://picsum.photos/600/400?random=13", href: "#", hint: "data visualization" },
];

export default function PortfolioSection() {
    return (
        <Section id="work" className="bg-gray-50/50">
            <SectionTitle>Work Portfolio</SectionTitle>
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
                <CarouselContent>
                    {projects.map((project, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 h-full">
                                <a href={project.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                                    <Card className="overflow-hidden group h-full flex flex-col">
                                        <div className="relative overflow-hidden">
                                            <Image
                                                src={project.imgSrc}
                                                alt={project.title}
                                                width={600}
                                                height={400}
                                                className="w-full h-auto object-cover aspect-video group-hover:scale-105 transition-transform duration-300"
                                                data-ai-hint={project.hint}
                                            />
                                        </div>
                                        <CardContent className="p-4 flex-grow">
                                            <h3 className="font-semibold">{project.title}</h3>
                                        </CardContent>
                                    </Card>
                                </a>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </Section>
    )
}
