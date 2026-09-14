"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building2, CalendarClock, ChevronDown, CircleHelp, Eye, FileText, Globe2, History, ImagePlus, LayoutDashboard, Megaphone, Menu, Plus, Save, Settings, Users } from "lucide-react";
import { PreviewComingSoon } from "@/components/preview-coming-soon";

const nav = [
  ["Overview", LayoutDashboard], ["Website", Globe2], ["Updates", Megaphone], ["Media", ImagePlus], ["Team", Users], ["History", History], ["Settings", Settings],
] as const;

export default function Dashboard() {
  if (process.env.NEXT_PUBLIC_CLIENT_PREVIEW === "true") return <PreviewComingSoon />;
  return <DashboardEditor />;
}

function DashboardEditor() {
  const [active, setActive] = useState("Overview");
  const [facebook, setFacebook] = useState(true);
  const [instagram, setInstagram] = useState(true);
  const [google, setGoogle] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const context = (document as Document & { modelContext?: { registerTool: (tool: unknown, options?: { signal?: AbortSignal }) => void | Promise<void> } }).modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    void Promise.resolve(context.registerTool({
      name: "stage_website_draft",
      title: "Stage website draft",
      description: "Mark the currently visible Urgent Dental Care website edits as a private draft. This does not publish the website or post to social media.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute: async () => { setSaved(true); return { status: "draft_saved", published: false }; },
    }, { signal: lifecycle.signal })).catch(() => undefined);
    return () => lifecycle.abort();
  }, []);

  return (
    <main className="dashboard-shell">
      <aside className="dash-sidebar">
        <div className="platform-brand"><span className="brand-mark">U</span><div><strong>SiteDesk</strong><small>Client workspace</small></div></div>
        <button className="client-switcher"><span className="client-icon"><Building2 size={18}/></span><span><small>Current website</small><strong>Urgent Dental Care</strong></span><ChevronDown size={16}/></button>
        <nav>{nav.map(([label, Icon]) => <button key={label} className={active === label ? "active" : ""} onClick={() => setActive(label)}><Icon size={18}/>{label}</button>)}</nav>
        <div className="sidebar-help"><CircleHelp size={18}/><div><strong>Need a hand?</strong><small>Contact platform support</small></div></div>
      </aside>

      <section className="dash-main">
        <header className="dash-topbar"><button className="mobile-menu" aria-label="Open menu"><Menu size={20}/></button><div><p>Urgent Dental Care</p><Badge variant="outline" className="status-badge"><span/>Private preview</Badge></div><div className="top-actions"><Button variant="outline" asChild><Link href="/"><Eye/> View website</Link></Button><button className="avatar">ZH</button></div></header>
        <div className="dash-content">
          <div className="dash-title"><div><p className="dash-kicker">Thursday, September 11</p><h1>{active === "Overview" ? "Good morning, Zuhair." : active}</h1><p>{active === "Overview" ? "Here’s what’s happening across this client website." : `Manage ${active.toLowerCase()} for Urgent Dental Care.`}</p></div><Button className="new-update"><Plus/> Create update</Button></div>

          <div className="metric-grid">
            <article><span className="metric-icon teal"><Globe2/></span><small>Website status</small><strong>Private preview</strong><p><span className="dot"/> Ready for review</p></article>
            <article><span className="metric-icon blue"><FileText/></span><small>Draft changes</small><strong>3</strong><p>Last edited 18 min ago</p></article>
            <article><span className="metric-icon amber"><CalendarClock/></span><small>Scheduled posts</small><strong>2</strong><p>Next: Friday at 9:00 AM</p></article>
          </div>

          <div className="dashboard-grid">
            <section className="dash-card editor-card">
              <div className="card-head"><div><h2>Quick website editor</h2><p>Update the information patients see most.</p></div><Badge variant="secondary">Draft</Badge></div>
              <Tabs defaultValue="details">
                <TabsList><TabsTrigger value="details">Business details</TabsTrigger><TabsTrigger value="announcement">Announcement</TabsTrigger><TabsTrigger value="social">Social publishing</TabsTrigger></TabsList>
                <TabsContent value="details" className="editor-form">
                  <label>Business name<Input defaultValue="Urgent Dental Care" onChange={() => setSaved(false)}/></label>
                  <div className="two-fields"><label>Phone<Input defaultValue="(248) 879-5858" onChange={() => setSaved(false)}/></label><label>City<Input defaultValue="Troy, Michigan" onChange={() => setSaved(false)}/></label></div>
                  <label>Homepage headline<Textarea defaultValue="Dental pain shouldn’t have to wait." onChange={() => setSaved(false)}/></label>
                  <div className="editor-actions"><span>{saved ? "Draft saved just now" : "Changes stay private until published"}</span><Button onClick={() => setSaved(true)}><Save/> Save draft</Button></div>
                </TabsContent>
                <TabsContent value="announcement" className="editor-form"><label>Update title<Input placeholder="Example: Saturday appointments available" /></label><label>Message<Textarea placeholder="Write a short, helpful update..." /></label><label className="upload-zone"><ImagePlus/><strong>Add an approved image</strong><small>JPG, PNG, or WebP · patient images require authorization</small><Input type="file" accept="image/png,image/jpeg,image/webp" /></label><div className="editor-actions"><span>Nothing publishes without review</span><Button><Save/> Save draft</Button></div></TabsContent>
                <TabsContent value="social" className="social-panel"><p>Choose where an approved update should appear. Connections remain disabled until each business account is authorized.</p>{[["Facebook Page", facebook, setFacebook, "Connected"],["Instagram Business", instagram, setInstagram, "Connected"],["Google Business Profile", google, setGoogle, "Needs connection"]].map(([name, checked, setter, status]) => <div className="channel" key={String(name)}><div><strong>{String(name)}</strong><small>{String(status)}</small></div><Switch checked={Boolean(checked)} onCheckedChange={setter as (value:boolean)=>void} disabled={status === "Needs connection"}/></div>)}<Button disabled>Review social post</Button></TabsContent>
              </Tabs>
            </section>

            <aside className="dash-card activity-card"><div className="card-head"><div><h2>Recent activity</h2><p>Recorded across this client.</p></div><button>View all</button></div><div className="timeline"><div><span>Z</span><p><strong>Homepage headline edited</strong><small>Draft saved by Zuhair · 18 min ago</small></p></div><div><span>U</span><p><strong>Office hours reviewed</strong><small>No changes published · Yesterday</small></p></div><div><span>S</span><p><strong>Social channels checked</strong><small>2 connected · September 9</small></p></div></div><div className="safety-note"><strong>Patient privacy safeguard</strong><p>Detailed health information is kept outside the website content system.</p></div></aside>
          </div>
        </div>
      </section>
    </main>
  );
}
