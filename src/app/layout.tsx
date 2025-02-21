"use client";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Inter } from "next/font/google";
import "./global.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="pt-br" suppressHydrationWarning className="antialiased">
      <body
        className={`${inter.className} min-h-screen scroll-auto antialiased selection:bg-green-100 selection:text-green-700 dark:bg-gray-950`}
      >
        {/* Evita erro de hidratação renderizando apenas no cliente */}
        {mounted ? (
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <NuqsAdapter>
              <div>{children}</div>
            </NuqsAdapter>
          </ThemeProvider>
        ) : null}
      </body>
    </html>
  );
}