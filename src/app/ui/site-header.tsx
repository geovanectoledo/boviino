"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/ui/button";
import { RiMenuLine, RiCloseLine } from "react-icons/ri"; // Ícones para menu mobile

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full bg-gray-50 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/icons/logo-large-dark.svg"
            alt="Logo"
            width={106}
            height={28}
            className="h-auto"
          />
        </Link>

        {/* NAVIGATION - Escondido no mobile, visível no desktop */}
        <nav className="hidden lg:flex space-x-2">
          <Link href="/">
            <Button variant="ghost">Pequeno produtor</Button>
          </Link>
          <Link href="/farm">
            <Button variant="ghost">Fazendas</Button>
          </Link>
          <Link href="/features">
            <Button variant="ghost">Funcionalidades</Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost">Sobre nós</Button>
          </Link>
        </nav>

        {/* BOTÕES LOGIN / CADASTRO - Visíveis no desktop, escondidos no mobile */}
        <div className="hidden lg:flex space-x-2">
          <Link href="/login">
            <Button variant="ghost">Entrar</Button>
          </Link>
          <Link href="/register">
            <Button> Criar conta </Button>
          </Link>
        </div>

        {/* BOTÃO MENU MOBILE */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 text-[#1D3108] focus:outline-none"
          aria-label="Abrir Menu"
        >
          {isMenuOpen ? (
            <RiCloseLine className="w-6 h-6" />
          ) : (
            <RiMenuLine className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* MENU MOBILE (Dropdown) */}
      {isMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-gray-50 p-4 flex flex-col space-y-3 lg:hidden">
          <Link href="/" onClick={toggleMenu}>
            <Button variant="ghost" className="w-full text-left">Pequeno produtor</Button>
          </Link>
          <Link href="/farm" onClick={toggleMenu}>
            <Button variant="ghost" className="w-full text-left">Fazendas</Button>
          </Link>
          <Link href="/features" onClick={toggleMenu}>
            <Button variant="ghost" className="w-full text-left">Funcionalidades</Button>
          </Link>
          <Link href="/about" onClick={toggleMenu}>
            <Button variant="ghost" className="w-full text-left">Sobre nós</Button>
          </Link>
          <hr className="border-gray-300" />
          <Link href="/login" onClick={toggleMenu}>
            <Button variant="ghost" className="w-full text-left">Entrar</Button>
          </Link>
          <Link href="/register" onClick={toggleMenu}>
            <Button className="w-full">Criar conta</Button>
          </Link>
        </div>
      )}
    </header>
  );
}