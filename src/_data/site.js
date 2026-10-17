import fs from "node:fs";
import path from "node:path";

// Inline the stylesheet into <head> so nothing blocks first paint.
function css() {
  const raw = fs.readFileSync(path.join("src", "css", "main.css"), "utf8");
  return raw
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{};,>])\s*/g, "$1")
    .replace(/:\s+/g, ":")
    .replace(/;}/g, "}")
    .trim();
}

export default {
  name: "Doctors AI Tools",
  url: "https://doctorsaitools.com",
  tagline: "Physician-reviewed AI tools for clinicians",
  description:
    "Independent, hands-on reviews of AI tools for doctors — AI medical scribes, radiology AI and more — each reviewed by a radiologist and pathologist with 50+ years in practice.",
  // Flip to true on launch day, once real reviews, photos and partners replace the sample content.
  live: process.env.LIVE === "1" || false,
  // Paste the MailerLite embedded-form action URL here (Forms → Embedded form → copy the form 'action').
  // Public contact email shown on /contact/ (leave empty until ready).
  contactEmail: "editor@doctorsaitools.com",
  newsletterAction: "",
  // Cloudflare Web Analytics token (leave empty to disable).
  cfAnalyticsToken: "",
  editor: {
    name: "Dr. Ravi Shankar Gupta",
    credentials: "DMRE, DCP, FAGS",
    title: "Chief Medical Editor",
    specialty: "Radiologist & Pathologist",
    experience: "50+ years in practice",
  },
  css: css(),
  year: new Date().getFullYear(),
};
