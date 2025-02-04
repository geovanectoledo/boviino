import Link from "next/link";
import { Button } from "@/app/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white">
      <h1 className="text-4xl font-bold text-gray-900">Bem-vindo ao Boviino</h1>
      <p className="mt-4 text-lg text-gray-600">Seu sistema de gestão pecuária moderno e eficiente.</p>

      <div className="mt-6">
        <Link href="/overview">
          <Button> Acessar dashboard </Button>
        </Link>
      </div>
    </div>
  );
}