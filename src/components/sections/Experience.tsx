import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import experiences from "@/data/experience.json";

export default function Experience() {
  return (
    <section id="experience" className="container py-12 md:py-24 lg:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">Experience</h2>
      <div className="flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 border-l-2 border-muted pl-8 relative">
             <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
            <div className="md:w-1/3">
              <h3 className="text-xl font-semibold">
                {exp.link && exp.link !== "#" ? (
                  <Link href={exp.link} target="_blank" className="hover:underline hover:text-primary transition-colors">
                    {exp.company}
                  </Link>
                ) : (
                   exp.company
                )}
              </h3>
              <p className="text-muted-foreground">{exp.role}</p>
              <span className="text-sm text-muted-foreground">{exp.period}</span>
            </div>
            <div className="md:w-2/3">
              <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
