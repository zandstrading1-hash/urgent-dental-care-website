import Link from "next/link";
import { Clock3, MapPin, Phone } from "lucide-react";

export function SiteHeader({ previewMode = false }: { previewMode?: boolean }) {
  const homeHref = previewMode ? "/client-preview" : "/";
  const pageHref = (path: string) => previewMode ? `/client-preview/coming-soon?from=${path}` : path;

  return <>
    <div className="practice-bar"><span><Clock3/> Call for same-day availability</span><span><MapPin/> 6053 Rochester Rd, Troy, MI 48085</span></div>
    <header className={`practice-header${previewMode ? " preview-header" : ""}`}>
      <Link href={homeHref} className="practice-logo" aria-label="Urgent Dental Care home"><span>UDC</span><div><strong>Urgent Dental Care</strong><small>formerly Square Lake Family Dentistry</small></div></Link>
      <nav aria-label="Main navigation"><Link href={pageHref("emergency-care")}>Emergency Care</Link><Link href={pageHref("services")}>Services</Link><Link href={pageHref("about")}>About</Link><Link href={pageHref("patient-info")}>Patient Info</Link><Link href={pageHref("contact")}>Contact</Link></nav>
      <a className="nav-phone" href="tel:+12488795858"><Phone/> <span>Call (248) 879-5858</span></a>
    </header>
  </>;
}
