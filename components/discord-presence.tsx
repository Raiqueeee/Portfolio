"use client"

export function DiscordPresence() {
  return (
    <div className="w-full pointer-events-auto select-none overflow-hidden">
      <div className="flex justify-center pb-3">
        <img src="/icon.png" alt="Raique Babar" className="w-56 h-56 rounded-full object-cover shadow-2xl shadow-violet-500/20" />
      </div>
      <div className="flex items-start justify-between px-4 pt-3">
        <div className="flex flex-col gap-1">
          <span className="text-md font-semibold text-foreground">Raique Babar</span>
          <span className="text-sm text-muted-foreground">@raiqueee</span>
        </div>
        <span className="w-3 h-3 rounded-full bg-emerald-400 mt-1" title="Available" />
      </div>
    </div>
  )
}
