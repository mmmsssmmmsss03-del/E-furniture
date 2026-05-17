import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Container from "@/components/global/Container";
import { Toaster } from "@/components/ui/sonner"


const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "E-store",
  description: "Web Designed By NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
          <Navbar/>
          <Container className="pt-24">
          {children}            
          </Container>
            <Toaster/>
        </ThemeProvider>
        </body>
    </html>
  );
}
