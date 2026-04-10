"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { openSourceProjects } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const FEATURES = [
  {
    icon: "📊",
    title: "Token Analytics",
    desc: "Cost by day, project, model, and session type. Ghost sessions flagged. Burn rate forecasted.",
  },
  {
    icon: "⚡",
    title: "Agent Ops",
    desc: "Wall-clock Gantt for subagent runs. Which agents overlapped. Output tokens per dollar — the number that matters.",
  },
  {
    icon: "🐱",
    title: "3D Companion",
    desc: "WebGL cat that physically evolves from your coding patterns. Tamagotchi mechanics. Permanent memory marks. Shareable card.",
  },
];

const COMING = [
  "Run narratives — one plain English sentence per run: \"3 agents, 68% cache hit, clean run.\"",
  "Health score (0–100): efficiency, cache rate, ghost ratio and parallelism in one grade.",
  "Slug identities — consistent color and emoji per agent name across every run.",
  "Constellation view — your runs as a star map. Efficiency on Y, time on X, cost as bubble size.",
];

export default function LabPage() {
  const [comingOpen, setComingOpen] = useState(false);
  const project = openSourceProjects[0];

  return (
    <main className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-[1000px] mx-auto">

        {/* Hero */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="mb-24">
          <motion.p variants={fadeUp} className="text-label-sm uppercase text-accent-teal tracking-[0.2em] mb-4">
            From the Lab
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-display-lg mb-6">
            Open tools for{" "}
            <span className="text-gradient-accent">the agentic age.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-body-lg text-text-muted max-w-[580px]">
            Free, MIT-licensed, and designed for developers who want to understand
            what their AI is actually doing.
          </motion.p>
        </motion.div>

        {/* Meow Ops project block */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="border border-surface-border bg-surface-elevated p-8 md:p-12 mb-8"
        >
          {/* Header */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <h2 className="text-display-md text-accent-teal">{project.name}</h2>
            <span className="text-label-sm text-text-dim border border-surface-border px-2 py-0.5">v1.3.0</span>
            <span className="text-label-sm text-accent-teal border border-accent-teal/30 px-2 py-0.5">LIVE · MIT</span>
          </div>
          <p className="text-body-lg text-text-muted mb-10">{project.tagline}</p>

          {/* Feature columns */}
          <div className="grid md:grid-cols-3 gap-8 mb-10 pb-10 border-b border-surface-border">
            {FEATURES.map((f) => (
              <div key={f.title}>
                <span className="text-2xl block mb-3">{f.icon}</span>
                <h3 className="text-body-md font-semibold mb-2">{f.title}</h3>
                <p className="text-body-md text-text-muted">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Install block */}
          <p className="text-label-sm uppercase text-text-dim tracking-[0.15em] mb-3">
            Install in 2 minutes — no account needed
          </p>
          <div className="bg-surface border border-surface-border font-mono text-sm text-text-muted p-5 mb-8 overflow-x-auto">
            <p><span className="text-accent-teal">$</span> git clone https://github.com/merak3i/meow-ops.git</p>
            <p><span className="text-accent-teal">$</span> cd meow-ops &amp;&amp; npm install</p>
            <p><span className="text-accent-teal">$</span> node sync/export-local.mjs &amp;&amp; npm run dev</p>
          </div>
          <p className="text-label-sm text-text-dim mb-8">
            Open <span className="text-text-muted font-mono">http://localhost:5173</span>. Your sessions load immediately.
            Install as a desktop app via Chrome → address bar → install icon.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-teal text-surface text-label-sm uppercase tracking-wider hover:bg-accent-teal/90 transition-colors duration-300"
            >
              Try demo →
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-accent-gold/50 text-accent-gold text-label-sm uppercase tracking-wider hover:border-accent-gold hover:bg-accent-gold/5 transition-all duration-300"
            >
              ★ Star on GitHub
            </a>
          </div>

          {/* What's coming */}
          <button
            onClick={() => setComingOpen((o) => !o)}
            className="flex items-center gap-2 text-label-sm uppercase text-text-dim hover:text-text transition-colors duration-300 tracking-wider mb-4"
          >
            <span>What&apos;s coming</span>
            <span
              className="transition-transform duration-300"
              style={{ display: "inline-block", transform: comingOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              ▾
            </span>
          </button>
          {comingOpen && (
            <ul className="space-y-3 border-l-2 border-surface-border pl-5">
              {COMING.map((item, i) => (
                <li key={i} className="text-body-md text-text-muted">{item}</li>
              ))}
            </ul>
          )}
        </motion.div>

        {/* Footer attribution */}
        <p className="text-label-sm text-text-dim text-center">
          Powered by{" "}
          <a href="/" className="text-text-muted hover:text-accent-teal transition-colors duration-300">
            Meow Creative Haus
          </a>{" "}
          · MIT License · Free forever
        </p>
      </div>
    </main>
  );
}
