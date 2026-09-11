"use client";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function AppointmentForm() {
  const [sent, setSent] = useState(false);
  if (sent) return <div className="form-success"><CheckCircle2/><h3>Your request is ready for review.</h3><p>This prototype does not send patient information yet. When the secure form service is connected, the office will receive requests here.</p><button onClick={()=>setSent(false)}>Return to form</button></div>;
  return <form className="appointment-form" onSubmit={(event)=>{event.preventDefault();setSent(true)}}>
    <div className="form-row"><label>First name<input required autoComplete="given-name" /></label><label>Last name<input required autoComplete="family-name" /></label></div>
    <div className="form-row"><label>Phone number<input required type="tel" autoComplete="tel" /></label><label>Email address<input type="email" autoComplete="email" /></label></div>
    <label>What do you need help with?<select required defaultValue=""><option value="" disabled>Choose a general reason</option><option>Tooth pain</option><option>Broken or chipped tooth</option><option>Swelling or possible infection</option><option>Lost filling or crown</option><option>Routine dental appointment</option><option>Something else</option></select></label>
    <label>When should we call?<select defaultValue="As soon as possible"><option>As soon as possible</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select></label>
    <div className="form-warning"><strong>Please don’t include medical details here.</strong> The office will discuss symptoms and health history with you by phone or through an approved secure system.</div>
    <button type="submit">Request a call back <ArrowRight/></button><small>Prototype mode: nothing is transmitted from this form yet.</small>
  </form>;
}
