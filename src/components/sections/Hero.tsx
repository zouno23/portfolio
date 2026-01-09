import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, Phone } from "lucide-react";
import heroData from "@/data/hero.json";

export default function Hero() {
  return (
    <section id="home" className="flex min-h-[calc(100vh-4rem)] flex-col justify-center py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            {heroData.name}
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
            {heroData.role}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="outline" size="sm">
              <Link href={heroData.links.email}>
                <Mail className="mr-2 h-4 w-4" />
                Email
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href={heroData.links.linkedin} target="_blank">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href={heroData.links.github} target="_blank">
                <Github className="mr-2 h-4 w-4" />
                Github
              </Link>
            </Button>
             <Button asChild variant="outline" size="sm">
              <Link href={heroData.links.resume} target="_blank">
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href={heroData.links.phone}>
                <Phone className="mr-2 h-4 w-4" />
                {heroData.phoneDisplay}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
