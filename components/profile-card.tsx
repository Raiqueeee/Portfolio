"use client"

import { motion, useReducedMotion } from "framer-motion"
import { memo } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PERSONAL, PROFILE_TAGS, PROFILE_LINKS } from "@/lib/data"

export const ProfileCard = memo(function ProfileCard() {
  const shouldReduceMotion = useReducedMotion()
  return (
    <motion.div
      className="flex flex-col h-full"
      initial={{ opacity: 0, transform: shouldReduceMotion ? "translateY(0px)" : "translateY(20px)" }}
      animate={{ opacity: 1, transform: "translateY(0px)" }}
      transition={{ duration: shouldReduceMotion ? 0.15 : 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="flex gap-8 mt-7 px-5"
        initial={{ opacity: 0, transform: shouldReduceMotion ? "translateX(0px)" : "translateX(-20px)" }}
        animate={{ opacity: 1, transform: "translateX(0px)" }}
        transition={{ duration: shouldReduceMotion ? 0.15 : 0.5, delay: shouldReduceMotion ? 0 : 0.2 }}
      >

        <Avatar className="w-24 h-24 group relative bg-blue-300 rounded-full shrink-0">
          {PERSONAL.avatar && <AvatarImage src={PERSONAL.avatar} alt="Profile" />}
          <AvatarFallback>RB</AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <h2 className="text-3xl font-bold mb-3">{PERSONAL.name}</h2>

          <div className="flex flex-wrap gap-x-1 gap-y-0.5">
            {PROFILE_TAGS.map((tag, index) => (
              <div key={index} className="flex items-center gap-1 py-1 rounded-full text-muted-foreground bg-muted/10">
                {tag.icon}
                <span className="text-xs sm:text-sm font-medium">{tag.text}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-2">
            {PROFILE_LINKS.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="py-1 bg-card"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <p className="text-foreground text-md mt-8 px-5 max-w-2xl mx-auto leading-relaxed">
        {PERSONAL.bio}
      </p>


    </motion.div>
  )
})
