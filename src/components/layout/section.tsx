import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: ReactNode;
    id: string;
}

export const Section = ({ children, id, className, ...props }: SectionProps) => {
    return (
        <section id={id} className={cn("py-16 md:py-24", className)} {...props}>
            <div className="container mx-auto px-4">
                {children}
            </div>
        </section>
    );
};

export const SectionTitle = ({ children, className }: { children: ReactNode; className?: string }) => {
    return (
        <div className="flex flex-col items-center mb-12">
            <h2 className={cn("text-3xl md:text-4xl font-bold text-center", className)}>
                {children}
            </h2>
            <div className="mt-2 h-1 w-16 bg-primary rounded"></div>
        </div>
    );
};
