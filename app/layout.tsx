import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nadir Mounim | Cybersecurity Engineer & Cloud Architect",
  description: "Portfolio showcasing expertise in network security, cloud infrastructure, DevOps automation, and secure system architecture. Specializing in pfSense, AWS, OpenStack, Docker, and penetration testing.",
  keywords: [
    "Cybersecurity",
    "Cloud Security",
    "DevOps",
    "Network Security",
    "pfSense",
    "AWS",
    "OpenStack",
    "Docker",
    "Penetration Testing",
    "Infrastructure Security",
    "Terraform",
    "FST Tanger"
  ],
  authors: [{ name: "Nadir Mounim" }],
  openGraph: {
    title: "Nadir Mounim | Cybersecurity Engineer",
    description: "Portfolio showcasing enterprise-grade security projects and cloud infrastructure deployments",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
