"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronsUpDown, ChevronDown, Bell, User, Check } from "lucide-react";
import Submenu from "./submenu";

export default function Navbar() {

    const menuItems = [
      { id: 1, label: "Visão geral", link: "/authenticated/dashboard" },
      { id: 2, label: "Rebanho", link: "/authenticated/herd" },
      { id: 3, label: "Pastagem", link: "/authenticated/pasture" },
      { id: 4, label: "Mercado", link: "/authenticated/market" },
      { id: 5, label: "Atividades", link: "/authenticated/activities" },
    ];
  
    const properties = [
      { id: 1, name: "Bosque da Alvorada Agropastoril" },
      { id: 2, name: "Fazenda Santa Nice" },
    ];
  
    const notifications = [
      { id: 1, message: "Nova mensagem recebida", isRead: false, timestamp: "12:45" },
      { id: 2, message: "Propriedade atualizada", isRead: true, timestamp: "05 fev 2024" },
      { id: 3, message: "Relatório disponível", isRead: false, timestamp: "05 fev 2024" },
      { id: 4, message: "Alerta de sistema", isRead: true, timestamp: "04 fev 2024" }
    ];
  
    const user = {
      name: "Geovane Toledo",
      email: "geovane@bosquedaalvorada.com.br",
    };
  
    const [isNavbarHidden, setIsNavbarHidden] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState(properties[0]);
    const [isPropertyDropdownOpen, setIsPropertyDropdownOpen] = useState(false);
    const [isNotificationsDropdownOpen, setIsNotificationsDropdownOpen] =
      useState(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  
    const propertyDropdownRef = useRef<HTMLDivElement>(null);
    const notificationsDropdownRef = useRef<HTMLDivElement>(null);
    const userDropdownRef = useRef<HTMLDivElement>(null);
  
    // Monitora o scroll da página
    useEffect(() => {
      const handleScroll = () => {
        setIsNavbarHidden(window.scrollY > 80);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    // Fecha os dropdowns ao clicar fora
    useEffect(() => {
      function handleOutsideClick(event: MouseEvent) {
        if (
          propertyDropdownRef.current &&
          !propertyDropdownRef.current.contains(event.target as Node)
        ) {
          setIsPropertyDropdownOpen(false);
        }
  
        if (
          notificationsDropdownRef.current &&
          !notificationsDropdownRef.current.contains(event.target as Node)
        ) {
          setIsNotificationsDropdownOpen(false);
        }
  
        if (
          userDropdownRef.current &&
          !userDropdownRef.current.contains(event.target as Node)
        ) {
          setIsUserDropdownOpen(false);
        }
  
      }
  
      document.addEventListener("mousedown", handleOutsideClick);
  
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, []);

  return (
    <>
      {/* Navbar Principal */}
      <header className={`bg-gray-50 fixed top-0 w-full z-50 transition-transform duration-300 ${isNavbarHidden ? "-translate-y-full" : "translate-y-0"}`}>
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          
          {/* Logo e Seletor de Propriedade */}
          <div className="flex items-center space-x-6">
            <Link href="/authenticated/dashboard">
              <Image src="/icons/logo-large-dark.svg" alt="Logo" width={106} height={28} />
            </Link>

            {/* Dropdown de propriedades */}
            <div className="relative" ref={propertyDropdownRef}>
              <button
                onClick={() => setIsPropertyDropdownOpen(!isPropertyDropdownOpen)}
                className="flex items-center space-x-2 text-gray-800 hover:text-[#1D3108] transition"
              >
                <span className="text-sm">{selectedProperty.name}</span>
                <ChevronsUpDown size={16} />
              </button>

              {isPropertyDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-3 border border-gray-100">
                  <span className="block px-4 py-2 text-gray-600 text-xs uppercase font-semibold">Propriedades</span>
                  {properties.map((property) => (
                    <button
                      key={property.id}
                      onClick={() => {
                        setSelectedProperty(property);
                        setIsPropertyDropdownOpen(false);
                      }}
                      className={`flex justify-between w-full px-4 py-2 text-left text-sm hover:bg-gray-100 rounded-md ${
                        property.id === selectedProperty.id ? "bg-gray-200 font-semibold" : ""
                      }`}
                    >
                      {property.name}
                      {property.id === selectedProperty.id && <Check className="text-green-600" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Notificações e Usuário */}
          <div className="flex items-center space-x-4">
            {/* Notificações */}
            <div className="relative" ref={notificationsDropdownRef}>
              <button onClick={() => setIsNotificationsDropdownOpen(!isNotificationsDropdownOpen)} className="p-2 text-gray-800 hover:text-[#1D3108]">
                <Bell size={22} />
              </button>

              {isNotificationsDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-md text-black p-2">
                  <span className="block px-4 py-2 text-gray-600">Notificações</span>
                  {notifications.length ? (
                    notifications.map((notif) => (
                      <div key={notif.id} className="flex justify-between px-4 py-2 text-sm hover:bg-gray-200 rounded-md">
                        <span>{notif.message}</span>
                        <span className="text-xs text-gray-500">{notif.timestamp}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-center py-4 text-gray-600">Sem notificações</p>
                  )}
                </div>

              )}
            </div>

            {/* Usuário */}
            <div className="relative" ref={userDropdownRef}>
              <button onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)} className="flex items-center space-x-2 text-gray-800 hover:text-[#1D3108] transition">
                <User size={22} />
                <ChevronDown size={16} />
              </button>

              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-2 w-60 bg-white shadow-lg rounded-md text-black p-2">
                  <div className="px-4 py-2 border-b">
                    <span className="block text-sm font-semibold">{user.name}</span>
                    <span className="block text-xs text-gray-500">{user.email}</span>
                  </div>
                  <Link href="/perfil" className="block px-4 py-2 hover:bg-gray-200">Perfil</Link>
                  <Link href="/configuracoes" className="block px-4 py-2 hover:bg-gray-200">Configurações</Link>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-200">Sair</button>
                </div>
              )}
              
            </div>
          </div>
        </div>
      </header>

      {/* Submenu */}
      <Submenu menuItems={menuItems} isNavbarHidden={isNavbarHidden} />
    </>
  );
}