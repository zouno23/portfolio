import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import education from "@/data/education.json";

export default function Education() {
  return (
    <section id="education" className="container py-12 md:py-24 lg:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">Education</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((edu, index) => (
          <Card key={index} className="bg-muted/50">
            <CardHeader>
              <CardTitle>{edu.school}</CardTitle>
              <div className="text-sm text-muted-foreground">{edu.period}</div>
            </CardHeader>
            <CardContent>
              <p className="font-medium">{edu.degree}</p>
              <p className="text-muted-foreground mt-2">{edu.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
