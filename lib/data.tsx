import React from "react"
import { MapPin, GraduationCap, Calendar, Mail, Bot, Workflow, Webhook, FileSpreadsheet, Terminal, Braces, Zap, Database, MessageSquare } from "lucide-react"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { SiPython, SiJavascript, SiNumpy, SiPandas, SiOpencv, SiOpenai, SiN8N, SiSupabase, SiMysql, SiGit, SiHtml5, SiCss3, SiHubspot } from "react-icons/si"

export const PERSONAL = {
    name: "Raique Babar",
    headline: ["Heyy!", "I'm Raique Babar"],
    bannerBio: "I Talk to Bots So You Don’t Have To",
    bio: "AI Engineer, vibe coder & automation builder. I work with AI/ML, GenAI, and no-code/low-code tools to build LLM agents, RAG systems, voice bots, and automations. Basically, I turn “what if we automated this?” into something that actually works.",
    avatar: "/icon.png",
    readmePath: "raique.dev / README.md",
}

export const PROFILE_TAGS = [
    { icon: <MapPin size={16} />, text: "Pakistan" },
    { icon: <GraduationCap size={16} />, text: "AI Engineer" },
    { icon: <Calendar size={16} />, text: "Open to building" },
]

export const PROFILE_LINKS = [
    { label: "LinkedIn", href: "https://linkedin.com/in/raiqueee", icon: <FaLinkedin size={20} className="text-[#0A66C2]" /> },
    { label: "GitHub", href: "https://github.com/Raiqueeee", icon: <FaGithub size={20} /> },
    { label: "Email", href: "mailto:raique1331@gmail.com", icon: <Mail size={20} className="text-[#f4b267]" /> },
]

export const BANNER_SOCIALS = [
    { label: "GitHub", href: "https://github.com/Raiqueeee", bgClass: "bg-black", icon: <FaGithub className="w-4 h-4 text-white" /> },
    { label: "LinkedIn", href: "https://linkedin.com/in/raiqueee", bgClass: "bg-[#0A66C2]", icon: <FaLinkedin className="w-4 h-4 text-white" /> },
    { label: "Email", href: "mailto:raique1331@gmail.com", bgClass: "bg-[#f4b267]", icon: <Mail className="w-4 h-4 text-black" /> },
]

export interface AutomationWorkflow { title: string; description: string; tools: string[] }
export interface Project { title: string; description: string; tags: string[]; image: string; githubUrl?: string; liveUrl?: string; workflows?: AutomationWorkflow[] }
export const PROJECTS: Project[] = [
    {
        title: "SpaceX-Falcon9-Landing",
        description: "A physics-accurate Falcon 9 landing simulator built in Python and MuJoCo. It compares a PPO reinforcement-learning agent trained on roughly 3M CPU-only frames with a deterministic classical controller based on a five-phase FSM, cascade PID guidance, and a physics-timed suicide burn. The classical controller reaches 100% landing success with touchdown velocity below 0.6 m/s, while the current PPO run reaches the pad area and is still being tuned for clean touchdowns.",
        tags: ["Python", "MuJoCo", "PyTorch", "TorchRL", "PPO", "Reinforcement Learning", "Hydra", "Weights & Biases"],
        image: "https://opengraph.githubassets.com/1/Raiqueeee/SpaceX-Falcon9-Landing",
        githubUrl: "https://github.com/Raiqueeee/SpaceX-Falcon9-Landing",
    },
    {
        title: "NCEG Labs",
        description: "Sample-submission portal for the National Centre of Excellence in Geology, University of Peshawar. Applicants submit samples online, choose tests per lab with live pricing, pay by bank transfer, and track status. Each of the 14 labs has its own coordinator dashboard, while a master account sees everything. Labs, tests, and prices are database-driven so the platform can grow without code changes.",
        tags: ["HTML", "CSS", "JavaScript", "Supabase", "PostgreSQL", "RLS", "Auth", "Storage"],
        image: "https://placehold.co/1200x675/171717/A374FF?text=NCEG+Labs",
    },
    {
        title: "Free Cluely",
        description: "A cross-platform Electron desktop AI assistant for meetings, interviews, presentations, and professional conversations. It supports screenshot analysis, audio intelligence and transcription, contextual chat, and flexible AI providers including Gemini and local Ollama models for privacy-focused workflows.",
        tags: ["Electron", "TypeScript", "React", "Gemini", "Ollama", "AI Assistant", "Screenshot Analysis"],
        image: "https://opengraph.githubassets.com/1/Raiqueeee/free-cluely",
        githubUrl: "https://github.com/Raiqueeee/free-cluely",
    },
    {
        title: "AI-powered Mental Health Chatbot",
        description: "Final Year Project (FYP): an AI-powered mental health assistant combining voice and chat interactions. The project explores how conversational AI can create a more accessible and natural way for people to express themselves and receive supportive responses.",
        tags: ["FYP", "AI/ML", "GenAI", "NLP", "Voice AI", "Chatbot"],
        image: "https://opengraph.githubassets.com/1/Raiqueeee/AI-powered-Mental-Health-Chatbot",
        githubUrl: "https://github.com/Raiqueeee/AI-powered-Mental-Health-Chatbot",
    },
    {
        title: "DocuMind AI RAG",
        description: "A document intelligence system that lets users work with their own documents through Retrieval-Augmented Generation. It ingests document content, retrieves relevant context, and produces grounded AI answers with source-aware citations instead of relying on unsupported responses.",
        tags: ["RAG", "LLMs", "Embeddings", "Vector Search", "Document AI", "GenAI"],
        image: "https://opengraph.githubassets.com/1/Raiqueeee/DocuMind-AI-RAG",
        githubUrl: "https://github.com/Raiqueeee/DocuMind-AI-RAG",
    },
    {
        title: "AI Notes FastAPI",
        description: "An AI-powered notes application built around a FastAPI backend. The project focuses on exposing a clean Python API for creating and working with intelligent notes, giving AI features a practical, service-ready foundation.",
        tags: ["Python", "FastAPI", "AI", "Backend"],
        image: "https://opengraph.githubassets.com/1/Raiqueeee/AI-Notes-Fast-API-",
        githubUrl: "https://github.com/Raiqueeee/AI-Notes-Fast-API-",
    },
    {
        title: "HubSpot to GoHighLevel CRM Migration",
        description: "Led a large-scale CRM platform migration end-to-end. Handled company deduplication across a full relational database, managed high-volume contact imports, performed opportunity matching across the migrated dataset, and resolved platform-specific configuration and synchronization issues.",
        tags: ["HubSpot", "GoHighLevel", "CRM", "Data Migration", "Automation"],
        image: "https://placehold.co/1200x675/171717/60A5FA?text=CRM+Migration",
    },
    {
        title: "GHL Resort Booking Chatbot & Frontend",
        description: "Built a GoHighLevel chatbot for resort bookings alongside a custom frontend booking page. Connected the experience to a Google Sheet backend, pulled real-time availability, and handled reservation logic end-to-end.",
        tags: ["GoHighLevel", "Chatbot", "JavaScript", "Google Sheets", "Webhooks", "Automation"],
        image: "https://placehold.co/1200x675/171717/F4B267?text=Maple+Resorts+B2B",
        liveUrl: "https://www.mapleresorts.pk/maple-b2b",
    },
    {
        title: "n8n / Make.com Automation Systems",
        description: "A collection of production-style automations connecting inboxes, meetings, AI agents, CRMs, spreadsheets, databases, and content platforms into reliable business workflows.",
        tags: ["n8n", "Make.com", "Retell AI", "GoHighLevel", "Supabase", "Trello", "Google Sheets"],
        image: "https://placehold.co/1200x675/171717/EA4B71?text=n8n+%2F+Make.com+Automations",
        workflows: [
            { title: "Outlook → Sheet → CRM contact workflow", description: "Monitors incoming Outlook email, logs each lead into Google Sheets, checks the CRM for an existing contact, creates a new contact when needed, and adds the email to the right conversation or record.", tools: ["Outlook", "Google Sheets", "CRM", "n8n"] },
            { title: "Fathom meetings → CRM notes", description: "Captures meeting transcripts and summaries from Fathom, identifies the relevant contact or opportunity, and writes clean meeting notes back into the CRM so the next follow-up has the full context.", tools: ["Fathom", "Webhooks", "CRM", "Make.com"] },
            { title: "AI proposal generation from meetings", description: "Turns meeting information into a client-ready proposal by updating a Google Slides template with the project context, scope, and next steps, then emails the finished proposal to the client.", tools: ["Fathom", "OpenAI", "Google Slides", "Gmail", "Make.com"] },
            { title: "Text prompt → image → YouTube upload", description: "Takes a content idea or text prompt, generates visual assets, prepares the publishing metadata, and uploads the finished content to YouTube as part of an automated content pipeline.", tools: ["OpenAI", "Image generation", "YouTube", "n8n"] },
            { title: "Email agents", description: "AI-powered email agents classify inbound messages, extract intent and lead details, draft helpful replies, route urgent requests, and keep the CRM or team workspace updated automatically.", tools: ["LLMs", "Gmail", "CRM", "n8n"] },
            { title: "Newsletter agents", description: "Collects source material, summarizes and organizes the most useful updates, drafts newsletter sections in a consistent voice, and prepares the campaign for review and sending.", tools: ["LLMs", "Research", "Google Docs", "Make.com"] },
            { title: "Retell call → Supabase, Trello & CRM", description: "Processes Retell AI call outcomes, extracts the important customer details and follow-up actions, then synchronizes the contact, notes, tasks, and call summary across Supabase, Trello, and the CRM.", tools: ["Retell AI", "Supabase", "Trello", "CRM"] },
            { title: "Apify scraping agents", description: "Uses Apify actors to collect structured web data, cleans and enriches the results with AI, removes duplicates, and sends qualified records into the appropriate spreadsheet, CRM, or campaign workflow.", tools: ["Apify", "n8n", "LLMs", "Google Sheets"] },
        ],
    },
    {
        title: "Retell AI Voice Agent Systems",
        description: "Voice automation projects built with Retell AI, combining natural phone conversations with calendar availability, booking workflows, email confirmations, and intelligent call routing.",
        tags: ["Retell AI", "Voice Agents", "n8n", "Google Calendar", "Call Routing", "Automation"],
        image: "https://placehold.co/1200x675/171717/8B5CF6?text=Retell+AI+Voice+Agents",
        workflows: [
            { title: "Salon availability & booking agent", description: "A Retell AI calling agent handles salon enquiries by voice, understands the customer’s preferred service and time, checks Google Calendar availability through n8n, creates the booking, and sends a confirmation email when the appointment is completed.", tools: ["Retell AI", "n8n", "Google Calendar", "Email"] },
            { title: "Hospital reception & department routing", description: "A hospital conversation flow connects callers to the right reception desk, person, or department. It supports static routing for known destinations and dynamic routing when the agent identifies the caller’s request, department, or specialist from the conversation.", tools: ["Retell AI", "Voice routing", "Reception", "Dynamic flows"] },
        ],
    },
]

export type ExperienceIcon = "company" | "education" | "freelance" | "organization"
export interface ExperienceItem { id: number; title: string; company: string; period: string; description: string; skills: string[]; icon: ExperienceIcon }
export const EXPERIENCE: ExperienceItem[] = [
    { id: 1, title: "AI Automation Engineer", company: "The AI Call", period: "Dec 2025 - Present", description: "Designing applied AI/ML systems including a reinforcement-learning Falcon 9 landing simulator. Building and QA-ing Retell AI voice agents and engineering n8n/Make automations that connect LLMs and business logic into CRM and marketing workflows.", skills: ["Python", "Retell AI", "n8n", "Make", "CRM APIs"], icon: "company" },
    { id: 2, title: "Forum Moderator", company: "Retell AI", period: "Dec 2025 - Present", description: "Troubleshooting production voice agent configurations, call-flow issues, integrations, NLP intent recognition, and dialogue understanding problems while escalating platform-level bugs to the core team.", skills: ["Voice AI", "NLP", "Debugging", "Community"], icon: "organization" },
    { id: 3, title: "GHL Automations and CRM Systems", company: "7Labs Marketing Consultants", period: "Apr 2026 - Jun 2026", description: "Built full-cycle GoHighLevel booking automations for hospitality clients, including chatbots, custom booking pages, Google Sheets/Apps Script integrations, real-time availability, and reservation workflows.", skills: ["GoHighLevel", "Apps Script", "Chatbots", "Webhooks"], icon: "freelance" },
    { id: 4, title: "AI Automation Engineer", company: "AI Data House (SMC-PVT) LTD", period: "Jul 2025 - Dec 2025", description: "Developed ChatRace chatbots integrated with POS systems, n8n automation pipelines, multi-turn Voiceflow experiences, and voice AI agents with VAPI.", skills: ["ChatRace", "n8n", "Voiceflow", "VAPI"], icon: "company" },
    { id: 5, title: "BS in Artificial Intelligence", company: "University of Haripur", period: "2021 - 2025", description: "Completed a Bachelor of Science in Artificial Intelligence. Thesis: AI Mental Health Assistant combining voice and chat interactions.", skills: ["Machine Learning", "Deep Learning", "NLP", "AI Systems"], icon: "education" },
]

export const EDUCATION = EXPERIENCE.filter((item) => item.icon === "education")

export type AchievementIcon = "award" | "star" | "trophy" | "medal" | "sparkles"
export interface Achievement { id: string; title: string; description: string; icon: AchievementIcon; date?: string; certificateUrl?: string }
export const ACHIEVEMENTS: Achievement[] = [
    { id: "1", title: "Oracle Cloud AI Foundations Associate", description: "Certified in fundamental AI, machine learning, deep learning, and generative AI concepts with an OCI focus.", icon: "award", date: "2025" },
    { id: "2", title: "Make Intermediate", description: "Hands-on workflow automation with iterators, array aggregators, webhooks, HTTP modules, and error handling.", icon: "trophy" },
    { id: "3", title: "Google AI - Gemini", description: "Completed training on practical ways to work with Gemini and generative AI capabilities.", icon: "sparkles" },
    { id: "4", title: "Python Frenzy Competition", description: "Scored 54/60 in a Python programming competition.", icon: "medal" },
]

export const TECH_STACK = [
    { name: "Python", icon: SiPython, color: "#3776AB" }, { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "NumPy", icon: SiNumpy, color: "#4D77CF" }, { name: "Pandas", icon: SiPandas, color: "#150458" },
    { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" }, { name: "OpenAI", icon: SiOpenai, color: "currentColor" },
    { name: "Retell AI", icon: Bot, color: "#8B5CF6" }, { name: "GoHighLevel", icon: Workflow, color: "#F97316" },
    { name: "n8n", icon: SiN8N, color: "#EA4B71" }, { name: "Make.com", icon: Zap, color: "#7C3AED" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" }, { name: "HubSpot", icon: SiHubspot, color: "#FF7A59" },
    { name: "Claude Code", icon: Terminal, color: "#D97757" }, { name: "APIs", icon: Webhook, color: "#14B8A6" },
    { name: "Excel", icon: FileSpreadsheet, color: "#217346" }, { name: "Google Sheets", icon: Database, color: "#34A853" },
    { name: "Voiceflow", icon: MessageSquare, color: "#6366F1" }, { name: "Webhooks", icon: Braces, color: "#F59E0B" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" }, { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Git", icon: SiGit, color: "#F05032" }, { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
]
