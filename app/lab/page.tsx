import type { Metadata } from "next";
import LabPage from "@/components/LabPage";

export const metadata: Metadata = {
  title: "Lab — Meow Creative Haus",
  description:
    "Open source tools for the agentic era. Meow Operations — free token analytics dashboard for Claude Code, Cursor, Aider and Codex.",
  openGraph: {
    title: "Lab — Meow Creative Haus",
    description:
      "Open source tools for the agentic era. Free, MIT-licensed, local-first.",
    type: "website",
  },
};

export default function Lab() {
  return <LabPage />;
}
