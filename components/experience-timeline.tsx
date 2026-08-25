"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { EDUCATION, EXPERIENCE } from "@/lib/data"

export function ExperienceTimeline() {
  const shouldReduceMotion = useReducedMotion()
  const [view, setView] = useState<"experience" | "education">("experience")
  const items = view === "experience" ? EXPERIENCE.filter((item) => item.icon !== "education") : EDUCATION

  return (
    <div className="p-4 hide-scrollbar">
      <div className="flex items-center justify-between gap-4 mb-6 p-1 rounded-xl border bg-muted/20 max-w-md">
        <button
          type="button"
          onClick={() => setView("experience")}
          className={`flex-1 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${view === "experience" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
        >
          Experience
        </button>
        <button
          type="button"
          onClick={() => setView("education")}
          className={`flex-1 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${view === "education" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
        >
          Education
        </button>
      </div>

      <motion.div
        key={view}
        initial={{ opacity: 0, rotateY: shouldReduceMotion ? 0 : 70 }}
        animate={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: shouldReduceMotion ? 0.15 : 0.4, ease: "easeOut" }}
        style={{ transformOrigin: "center" }}
        className="space-y-6"
      >
      {items.map((exp) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, transform: shouldReduceMotion ? "translateY(0px)" : "translateY(20px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ delay: shouldReduceMotion ? 0 : exp.id * 0.05 }}
          className="py-1"
        >
          <div className="flex items-center justify-between px-4 bg-muted/30">
            <div className="flex items-start w-full">
              <div className="flex flex-col w-full">

                <div className="flex w-full items-baseline justify-between">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <span className="text-md font-bold whitespace-nowrap">{exp.period}</span>
                </div>

                <p className="text-md text-primary">{exp.company}</p>
              </div>
            </div>
          </div>

          <div className="px-4">
            <p className="mb-3 text-md text-muted-foreground">{exp.description}</p>
            <div className="flex flex-wrap gap-1">
              {exp.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
      </motion.div>
    </div>
  )
}
