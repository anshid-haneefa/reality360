import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const _spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Reality 360 Studios | Immersive VR Experiences & Architectural Visualization",
  description:
    "Reality 360 Studios is a Palakkad-based immersive technology studio delivering premium virtual reality experiences for events and high-quality 3D architectural visualization solutions.",
}

export const viewport: Viewport = {
  themeColor: "#0a0e1a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_inter.variable} ${_spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
