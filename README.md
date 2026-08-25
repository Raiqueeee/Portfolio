# Raique Babar — AI Engineer Portfolio

An interactive OS-style portfolio for **Raique Babar**, an AI engineer, vibe coder, and automation builder. The site presents AI/ML work, GenAI systems, voice agents, CRM automations, education, experience, and projects inside a draggable desktop-style interface.

## Features

- Draggable, resizable desktop-style panels
- About, projects, experience, education, achievements, and tech-stack views
- Expandable project cards with detailed automation and voice-agent workflows
- GitHub contribution activity and profile statistics
- Interactive message constellation with local fallback support
- Keyboard command bar for opening and managing panels
- Light and dark themes
- Responsive mobile layout

## Selected Projects

- [SpaceX-Falcon9-Landing](https://github.com/Raiqueeee/SpaceX-Falcon9-Landing) — MuJoCo Falcon 9 landing simulator using reinforcement learning and classical control.
- NCEG Labs — Sample-submission portal for the National Centre of Excellence in Geology, University of Peshawar.
- [Free Cluely](https://github.com/Raiqueeee/free-cluely) — Cross-platform desktop AI assistant for meetings and professional conversations.
- [AI-powered Mental Health Chatbot](https://github.com/Raiqueeee/AI-powered-Mental-Health-Chatbot) — Final Year Project combining voice and chat interactions.
- [DocuMind AI RAG](https://github.com/Raiqueeee/DocuMind-AI-RAG) — Document intelligence and retrieval-augmented generation system.
- [AI Notes FastAPI](https://github.com/Raiqueeee/AI-Notes-Fast-API-) — AI-powered notes application with a FastAPI backend.
- HubSpot to GoHighLevel CRM Migration — CRM deduplication, contact imports, opportunity matching, and platform synchronization.
- GHL Resort Booking Chatbot & Frontend — GoHighLevel booking experience connected to Google Sheets and live availability.
- n8n / Make.com Automation Systems — Email, CRM, meeting, proposal, newsletter, scraping, and content workflows.
- Retell AI Voice Agent Systems — Salon booking agents and hospital reception/department routing flows.

## Tech Stack

Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Supabase, PostgreSQL, Python, OpenAI, Retell AI, n8n, Make.com, GoHighLevel, HubSpot, Google Sheets, Google Calendar, Trello, Apify, FastAPI, Git, and Claude Code.

## Run Locally

### Prerequisites

- Node.js 18+
- npm
- Optional Supabase project for persistent messages and visitor tracking

### Installation

```bash
git clone https://github.com/Raiqueeee/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

Copy `.env.example` to `.env.local` and add your Supabase values when persistent backend features are needed:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

Without Supabase credentials, the portfolio still runs locally with safe fallback data for the message experience and visitor counter.

## Education

**BS in Artificial Intelligence**  
University of Haripur · 2021–2025

Thesis: AI Mental Health Assistant combining voice and chat interactions.

## Contact

- GitHub: [@Raiqueeee](https://github.com/Raiqueeee)
- LinkedIn: [linkedin.com/in/raiqueee](https://linkedin.com/in/raiqueee)
- Email: [raique1331@gmail.com](mailto:raique1331@gmail.com)

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
