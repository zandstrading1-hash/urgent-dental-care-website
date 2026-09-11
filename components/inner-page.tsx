import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function InnerPage({ eyebrow, title, intro, children }: { eyebrow:string; title:string; intro:string; children:React.ReactNode }) {
  return <main className="practice-site"><SiteHeader/><header className="inner-hero"><p className="local-label">{eyebrow}</p><h1>{title}</h1><p>{intro}</p><div><a className="solid-button" href="tel:+12488795858"><Phone/> Call (248) 879-5858</a><Link className="text-button" href="/contact">Request a call back <ArrowRight/></Link></div></header>{children}<SiteFooter/></main>;
}
