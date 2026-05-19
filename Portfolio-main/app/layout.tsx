import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tata Nikhil Dharma Sai | ServiceNow & Full-Stack Portfolio",
  description:
    "Portfolio of Tata Nikhil Dharma Sai - Enterprise workflow automation specialist (ServiceNow CSA/CAD) and full-stack web developer.",
  openGraph: {
    title: "Tata Nikhil Dharma Sai | Portfolio",
    description: "Enterprise workflow automation + modern full-stack development.",
    type: "website"
  }
};

export const viewport: Viewport = {
  themeColor: "#09090b"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
