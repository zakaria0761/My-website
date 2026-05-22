"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink, GitBranch } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import type { Project } from "@/src/config/portfolio";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Card className="group flex h-full flex-col overflow-hidden transition-shadow duration-200 hover:shadow-md">
        {/* Project image */}
        <div className="relative aspect-video w-full overflow-hidden bg-secondary">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              // Hide broken images gracefully
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
    
        </div>

        {/* Content */}
        <CardContent className="flex flex-1 flex-col gap-3 pt-6">
          {/* Category badge */}
          <Badge variant="secondary" className="w-fit text-xs">
            {project.category}
          </Badge>

          <h3 className="font-semibold text-foreground">{project.title}</h3>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {project.description}
          </p>

        
        </CardContent>

        {/* Footer links */}
        <CardFooter className="gap-2 pt-2">
          
          <Button asChild size="sm" className="flex-1">
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Show More
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
