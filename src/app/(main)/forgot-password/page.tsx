"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { X } from "lucide-react"
import { Logos } from "@/app/ui/logos/Logos";

import { siteConfig } from "@/app/siteConfig";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";

export default function ForgotPassword() {
  const router = useRouter(); // Hook para navegação

  return (
    <>

    {/* Header (Logo + Botão Fechar) */}
    <div className="mx-auto flex max-w-6xl w-full md:my-auto fixed inset-x-3 top-4 z-50 flex items-center justify-between border border-transparent rounded-xl px-3 py-3 overflow-hidden transform-gpu animate-slide-down-fade transition-all duration-300 will-change-transform" >
        {/* Logo */}
        <Link href={siteConfig.baseLinks.home} aria-label="Home">
            <span className="sr-only">Boviino</span>
            <div className="text-gray-900 dark:text-gray-200">
                <Logos.BoviinoLarge className="w-28" />
            </div>
        </Link>

        {/* Botão de Fechar */}
        <Button
            onClick={() => router.push("/")}
            variant="light"
            className="aspect-square p-2 mr-6 lg:mr-0"
        >
            <X aria-hidden="true" className="size-5" />
        </Button>
    </div>

      <div className="flex min-h-screen flex-1 flex-col justify-center px-4 lg:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h3 className="text-center text-lg font-semibold text-gray-900 dark:text-gray-50">
            Redefinir senha
          </h3>
          <p className="mb-6 text-center text-sm text-gray-500 dark:text-gray-500">
            Insira seu e-mail cadastrado
          </p>

          <form action="#" method="post" className="mt-6 space-y-4">
            <div>
              <Label htmlFor="email" className="font-medium">
                E-mail
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="Digite seu e-mail"
                className="mt-2"
              />
            </div>
            <Button type="submit" className="mt-4 w-full font-semibold">
              Enviar link para redefinição de senha
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}