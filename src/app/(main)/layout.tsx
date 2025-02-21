"use client";

import "../global.css";
import { usePathname } from "next/navigation"; // Importa para pegar a rota atual

import Footer from "@/app/ui/main/Footer";
import { Navbar } from "@/app/ui/main/Navbar";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Obtém a rota atual

  // Verifica se estamos na página de login ou cadastro
  const isAuthPage = pathname === "/login" || pathname === "/register" || pathname === "/forgot-password";

  return (
    <main className="flex flex-col overflow-hidden">
      {/* Se não for uma página de autenticação, exibe a Navbar */}
      {!isAuthPage && <Navbar />}
      
      {children}
      
      {/* Se não for uma página de autenticação, exibe o Footer */}
      {!isAuthPage && <Footer />}
    </main>
  );
}