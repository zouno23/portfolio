import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.medazizbenhmidene.com"),
  title: {
    default: "Med Aziz Ben Hmidene | Portfolio",
    template: "%s | Med Aziz Ben Hmidene",
  },
  description: "Full Stack Software Engineer specializing in distributed systems, cloud infrastructure, and microservices orchestration.",
  keywords: [
    "Full Stack Engineer",
    "Distributed Systems",
    "Cloud Infrastructure",
    "Microservices",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "AWS",
    "Docker",
    "Kubernetes",
  ],
  authors: [{ name: "Med Aziz Ben Hmidene", url: "https://www.medazizbenhmidene.com" }],
  creator: "Med Aziz Ben Hmidene",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.medazizbenhmidene.com",
    title: "Med Aziz Ben Hmidene | Portfolio",
    description: "Full Stack Software Engineer specializing in distributed systems, cloud infrastructure, and microservices orchestration.",
    siteName: "Med Aziz Ben Hmidene Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Med Aziz Ben Hmidene | Portfolio",
    description: "Full Stack Software Engineer specializing in distributed systems, cloud infrastructure, and microservices orchestration.",
    creator: "@medazizbenhmidene", 
  },
  alternates: {
    canonical: "https://www.medazizbenhmidene.com",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Med Aziz Ben Hmidene",
    url: "https://www.medazizbenhmidene.com",
    jobTitle: "Full Stack Software Engineer",
    sameAs: [
      "https://linkedin.com/in/medazizbenhmidene",
      "https://github.com/zouno23",
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Private Polytechnic School of Monastir",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "ISIMM",
      },
    ],
  };

  return (
    <html lang="en" className={`${GeistSans.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-neutral-200 dark:selection:bg-neutral-700 flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">
             {children}
          </main>
          <Footer />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
