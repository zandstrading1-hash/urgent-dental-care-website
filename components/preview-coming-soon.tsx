import Link from "next/link";
import { ArrowLeft, Clock3 } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function PreviewComingSoon() {
  return <div className="client-only-preview">
    <main className="practice-site coming-soon-page">
      <SiteHeader previewMode />
      <section className="coming-soon-card">
        <span className="coming-soon-icon"><Clock3 /></span>
        <p className="section-label">Website preview</p>
        <h1>This page is coming soon.</h1>
        <p>We’re still preparing this part of the Urgent Dental Care website. For now, you can return to the homepage preview.</p>
        <Link href="/client-preview"><ArrowLeft /> Back to the homepage</Link>
      </section>
      <SiteFooter previewMode />
    </main>
  </div>;
}
