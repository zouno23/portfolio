import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import projectsData from "@/data/projects.json";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  return (
    <section id="projects" className="container py-12 md:py-24 lg:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.map((project, index) => (
          <CardContainer key={index} className="inter-var w-full h-full" containerClassName="py-2">
            <CardBody className="bg-card relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border flex flex-col justify-between">
              <div>
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-foreground"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-muted-foreground text-sm mt-2"
                >
                  {project.description}
                </CardItem>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags?.map((tag, i) => (
                    <CardItem
                      key={i}
                      translateZ="40"
                      className="inline-block"
                    >
                      <Badge variant="secondary">{tag}</Badge>
                    </CardItem>
                  ))}
                </div>
              </div>

              <div className="flex justify-end items-center mt-8">
                {project.link && (
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project.link}
                    target="_blank"
                    className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold"
                  >
                    View Project
                  </CardItem>
                )}
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
