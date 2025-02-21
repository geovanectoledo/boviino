"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { X } from "lucide-react"
import { Logos } from "@/app/ui/logos/Logos";

import { siteConfig } from "@/app/siteConfig";
import { Button } from "@/components/Button";
import { Checkbox } from "@/components/Checkbox";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";

export default function Register() {
  const router = useRouter(); // Hook do Next.js para navegação

  return (
    <>
      <div className="relative flex min-h-screen flex-1 flex-col justify-center px-4 lg:px-6">
        
        {/* Header (Logo + Botão Fechar) */}
        <div className="mx-auto flex max-w-6xl w-full md:my-auto fixed inset-x-3 top-2 z-50 flex items-center justify-between border border-transparent rounded-xl px-3 py-3 overflow-hidden transform-gpu animate-slide-down-fade transition-all duration-300 will-change-transform" >
            {/* Logo */}
            <Link href={siteConfig.baseLinks.home.href} aria-label="Home">
                <span className="sr-only">Boviino</span>
                <div className="text-gray-900 dark:text-gray-200">
                    <Logos.BoviinoLarge className="w-28 mb-2" />
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

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h3 className="text-center text-lg font-semibold text-gray-900 dark:text-gray-50">
            Criar a sua conta
          </h3>
          <p className="mb-6 text-center text-sm text-gray-500 dark:text-gray-500">
            Já tem uma conta?{" "}
            <a
              href={siteConfig.baseLinks.login.href}
              className="font-semibold text-green-600 hover:text-green-500 dark:text-green-500 dark:hover:text-green-400"
            >
              Entrar
            </a>
          </p>

          <form action="#" method="post" className="space-y-4">
            <div>
              <Label htmlFor="name" className="font-medium">
                Nome
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Digite seu nome completo"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="email" className="font-medium">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="Digite seu melhor e-mail"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="password" className="font-medium">
                Senha
              </Label>
              <Input
                type="password"
                id="password"
                name="password"
                autoComplete="password"
                placeholder="Digite sua senha"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="confirm-password" className="font-medium">
                Confirmar senha
              </Label>
              <Input
                type="password"
                id="confirm-password"
                name="confirm-password"
                autoComplete="confirm-password"
                placeholder="Repita a senha"
                className="mt-2"
              />
            </div>
            <div className="mt-2 flex items-start">
              <div className="flex h-6 items-center">
                <Checkbox id="newsletter" name="newsletter" />
              </div>
              <Label
                htmlFor="newsletter"
                className="ml-3 leading-6 text-gray-500 dark:text-gray-500"
              >
                Assinar nossa newsletter
              </Label>
            </div>
            <Button type="submit" className="mt-4 w-full font-semibold">
              Criar conta
            </Button>
            <p className="mt-4 text-xs text-gray-500 dark:text-gray-500">
              Ao se cadastrar, você aceita nossos{" "}
              <a href="#" className="underline underline-offset-4">
                termos de serviço
              </a>{" "}
              e{" "}
              <a href="#" className="underline underline-offset-4">
                política de privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  );
}