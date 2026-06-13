"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio } from "@/src/config/portfolio";
import { FilterBar } from "@/src/components/portfolio/FilterBar";
import { ProjectCard } from "@/src/components/portfolio/ProjectCard";

export function PortfolioClient() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filtered = portfolio.projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 space-y-2"
      >
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          My Portfolio
        </h1>
        <p className="text-xl font-semibold uppercase tracking-widest text-muted-foreground">
          Acknowledgement:
        </p>
        <p className="text-muted-foreground max-w-lg">
          I would like to express my sincere gratitude to everyone who supported me throughout my TESOL training program at the American TESOL Academy in Agadir, Morocco.
          I am especially thankful to our respected and dedicated teacher trainers: Prof. Atlagh, Prof. Ouali, Prof. El Jakouk, Prof. Chraa, Prof. Kharouaa, Prof. Bakkas, Prof. Madaoui, Prof. Jamaati, and Prof. Mahou. Their invaluable guidance, encouragement, and expertise played a significant role in my professional development.
          Through their instruction and mentorship, I was able to develop essential teaching skills, strengthen my confidence as an educator, and gain a deeper understanding of TESOL principles and effective language teaching methodologies.
          I truly appreciate their continuous support and dedication throughout this learning journey.
        </p>
      </motion.div>

      {/* Filter bar */}
      <div className="mb-10">
        <FilterBar active={activeCategory} onChange={setActiveCategory} />
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty state */}
      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-24 text-center text-muted-foreground"
        >
          No projects in this category yet.
        </motion.div>
      )}
    </div>
  );
}
