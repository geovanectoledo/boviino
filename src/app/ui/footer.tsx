"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa"; 

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    
        {/* Logo */}
        <div className="flex flex-col items-start">
          <Link href="/" className="flex items-center">
            <Image
              src="/icons/logo-large-dark.svg"
              alt="Logo Boviino"
              width={106}
              height={28}
              className="h-auto"
            />
          </Link>
        </div>

        {/* Funcionalidades */}
        <div>
          <h4 className="text-base font-semibold text-[#1D3108]">Funcionalidades</h4>
          <ul className="mt-2 space-y-1">
            <li><Link href="/rebanho" className="text-sm text-gray-800 hover:text-[#97f070] transition">Gestão de rebanho</Link></li>
            <li><Link href="/pastagem" className="text-sm text-gray-800 hover:text-[#97f070] transition">Monitoramento de pastagem</Link></li>
            <li><Link href="/mercado" className="text-sm text-gray-800 hover:text-[#97f070] transition">Mercado e insights</Link></li>
            <li><Link href="/relatorios" className="text-sm text-gray-800 hover:text-[#97f070] transition">Relatórios</Link></li>
          </ul>
        </div>

        {/* Informações */}
        <div>
          <h4 className="text-base font-semibold text-[#1D3108]">Informações</h4>
          <ul className="mt-2 space-y-1">
            <li><Link href="/privacy-policy" className="text-sm text-gray-800 hover:text-[#97f070] transition">Política de privacidade</Link></li>
            <li><Link href="/terms" className="text-sm text-gray-800 hover:text-[#97f070] transition">Termos de uso</Link></li>
            <li><Link href="/contact" className="text-sm text-gray-800 hover:text-[#97f070] transition">Contato</Link></li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div>
          <h4 className="text-base font-semibold text-[#1D3108]">Redes sociais</h4>
          <div className="mt-2 flex space-x-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="w-6 h-6 text-[#1D3108] hover:text-[#97f070] transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="w-6 h-6 text-[#1D3108] hover:text-[#97f070] transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Direitos reservados */}
      <div className="mt-8 border-t pt-4 text-center text-xs text-gray-600">
        &copy; {year} Boviino. Pecuária Inteligente. Todos os direitos reservados.
      </div>
    </footer>
  );
}