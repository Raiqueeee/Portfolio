"use client"

import { useState, memo } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { techIcons } from "@/components/tech-icons"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]      // → converted to icons via techIcons
  image: string
  githubUrl?: string
  liveUrl?: string
  workflows?: { title: string; description: string; tools: string[] }[]
}

export const ProjectCard = memo(function ProjectCard({
  title,
  description,
  tags,
  image,
  githubUrl,
  liveUrl,
  workflows,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [detailsOpen, setDetailsOpen] = useState(false)

  return (
    // allow overflow so tooltips aren't clipped
    <TooltipProvider delayDuration={0}>
      <motion.div
        onClick={() => workflows && setDetailsOpen(true)}
        className={`flex flex-col h-full rounded-2xl overflow-visible border bg-card text-card-foreground group ${workflows ? "cursor-pointer" : ""}`}
      >
        {/* IMAGE */}
        <div className="relative overflow-hidden rounded-t-2xl">
          {image ? <img src={image} alt={title} className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105" /> : (
            <div className="w-full h-44 bg-[radial-gradient(circle_at_20%_20%,rgba(163,116,255,.55),transparent_35%),linear-gradient(135deg,#171717,#262626)] flex items-end p-5">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/70">AI / automation</span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40" />
        </div>

        <div className="p-5 flex flex-col flex-grow">
          {/* TITLE + ICONS (GitHub / Live) */}
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>

            <div className="flex items-center gap-3">
              {githubUrl && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      onClick={(event) => event.stopPropagation()}
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-card border border-neutral-700 transition-[background-color,transform] duration-150 hover:bg-accent active:scale-95"
                      aria-label="Open GitHub"
                    >
                      <Github className="h-4 w-4 text-foreground" />
                    </a>
                  </TooltipTrigger>

                  <TooltipContent
                    side="top"
                    sideOffset={8}
                    avoidCollisions={false}
                    className="!z-[99999] pointer-events-none"
                  >
                    <p className="whitespace-nowrap">GitHub</p>
                  </TooltipContent>
                </Tooltip>
              )}

              {liveUrl && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      onClick={(event) => event.stopPropagation()}
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-card border border-neutral-700 transition-[background-color,transform] duration-150 hover:bg-accent active:scale-95"
                      aria-label="Open Live Demo"
                    >
                      <ExternalLink className="h-4 w-4 text-foreground" />
                    </a>
                  </TooltipTrigger>

                  <TooltipContent
                    side="top"
                    sideOffset={8}
                    avoidCollisions={false}
                    className="!z-[99999] pointer-events-none"
                  >
                    <p className="whitespace-nowrap">Live Demo</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>

          {/* TECHNOLOGIES */}
          <div className="mt-auto pt-5">
            <div className="text-sm font-medium text-muted-foreground">Technologies</div>

            <div className="mt-3 flex flex-wrap items-center gap-2.5">
              {tags.map((tag) => {
                const Icon = techIcons[tag]

                if (!Icon) {
                  return (
                    <span
                      key={tag}
                      className="flex items-center justify-center h-[22px] px-2 rounded-full text-[11px] font-medium text-muted-foreground bg-muted/40"
                    >
                      {tag}
                    </span>
                  )
                }

                return (
                  <Tooltip key={tag}>
                    <TooltipTrigger asChild>
                      <div
                        role="button"
                        tabIndex={0}
                        className="flex items-center justify-center w-[22px] h-[22px] transition-transform hover:scale-110"
                        aria-label={tag}
                      >
                        {Icon}
                      </div>
                    </TooltipTrigger>

                    <TooltipContent
                      side="top"
                      sideOffset={8}
                      avoidCollisions={false}
                      className="!z-[99999] pointer-events-none"
                    >
                      <p className="whitespace-nowrap">{tag}</p>
                    </TooltipContent>
                  </Tooltip>
                )
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {workflows && (
        <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
          <DialogContent className="w-[calc(100vw-2rem)] max-w-3xl max-h-[78vh] overflow-y-auto border-neutral-700 bg-card p-0">
            <DialogHeader className="border-b border-border px-5 py-4 pr-12">
              <DialogTitle className="text-xl">{title}</DialogTitle>
              <p className="pt-1.5 text-sm leading-5 text-muted-foreground">{description}</p>
            </DialogHeader>
            <div className="grid gap-3 p-4 sm:grid-cols-2">
              {workflows.map((workflow, index) => (
                <article key={workflow.title} className="rounded-xl border border-border bg-background/40 p-4">
                  <div className="mb-2.5 flex items-start gap-2.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground text-[11px] font-bold text-background">{index + 1}</span>
                    <h3 className="text-sm font-semibold leading-5">{workflow.title}</h3>
                  </div>
                  <p className="text-xs leading-5 text-muted-foreground">{workflow.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {workflow.tools.map((tool) => <span key={tool} className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">{tool}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </TooltipProvider>
  )
})
