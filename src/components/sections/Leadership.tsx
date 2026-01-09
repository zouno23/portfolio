import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import activities from "@/data/leadership.json";

export default function Leadership() {
  return (
    <section id="leadership" className="container py-12 md:py-24 lg:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">Leadership & Activities</h2>
      <div className="flex flex-col gap-8">
        {activities.map((activity, index) => (
          <Card key={index} className="border-none shadow-none bg-transparent">
            <CardHeader className="p-0 mb-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <CardTitle className="text-xl">{activity.role} @ {activity.organization}</CardTitle>
                <Badge variant="secondary" className="w-fit">{activity.period}</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-0">
               <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground">
                {activity.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
