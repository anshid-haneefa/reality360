import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.reality360studios.com"),

  title: {
    default:
      "Reality 360 Studios | VR Services & Architectural 3D Rendering in Kerala",
    template: "%s | Reality 360 Studios",
  },

  description:
    "Reality 360 Studios is a Kerala-based immersive technology studio offering premium VR event services and high-quality architectural 3D rendering solutions in Palakkad and across India.",

  keywords: [
    "VR services in Kerala",
    "VR events in Palakkad",
    "Virtual reality company Kerala",
    "Architectural 3D rendering Kerala",
    "3D visualization studio India",
    "Immersive VR experiences",
    "VR setup for events",
    "Meta Quest event rental Kerala",
    "Reality 360 Studios",
  ],

  authors: [{ name: "Reality 360 Studios" }],
  creator: "Reality 360 Studios",
  publisher: "Reality 360 Studios",
  category: "Technology",

  alternates: {
    canonical: "/",
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Reality 360 Studios",
    title:
      "VR Services & Architectural 3D Rendering in Kerala | Reality 360 Studios",
    description:
      "Premium VR event experiences and professional architectural visualization services in Palakkad and across Kerala.",
    images: [
      {
        url: "/images/vr-image.png",
        width: 1200,
        height: 630,
        alt: "Reality 360 Studios VR Experience Setup",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Reality 360 Studios | VR & Architectural 3D Rendering in Kerala",
    description:
      "Immersive VR event services and architectural visualization studio based in Kerala.",
    images: ["/images/vr-image.png"],
    creator: "@reality360studios",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/vr-image.png",
    shortcut: "/vr-image.png",
    apple: "/vr-image.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0e1a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}