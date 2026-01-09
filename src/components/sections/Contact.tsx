import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";
import contactData from "@/data/contact.json";

export default function Contact() {
  return (
    <section id="contact" className="container py-12 md:py-24 lg:py-32 mb-20">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{contactData.title}</h2>
        <p className="max-w-[600px] text-muted-foreground md:text-xl">
          {contactData.description}
        </p>
        <Button asChild size="lg" className="mt-4">
          <Link href={contactData.email}>
            <Mail className="mr-2 h-4 w-4" />
            {contactData.cta}
          </Link>
        </Button>
      </div>
    </section>
  );
}
