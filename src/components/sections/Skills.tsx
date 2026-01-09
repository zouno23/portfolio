import { Badge } from "@/components/ui/badge";
import skills from "@/data/skills.json";

export default function Skills() {
  return (
    <section id="skills" className="container py-12 md:py-24 lg:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">Skills</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
