import Home from "../page";

export const metadata = {
  title: "Urgent Dental Care — Homepage Preview",
  robots: { index: false, follow: false },
};

export default function ClientPreview() {
  return <div className="client-only-preview"><Home /></div>;
}
