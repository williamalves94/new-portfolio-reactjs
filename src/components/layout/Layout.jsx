import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="h-screen flex">
      <aside className="w-44 bg-zinc-900 text-white">
        <header className="">
          <Image
            src="/images/perfil-one.jpg"
            alt="Perfil"
            width={180}
            height={150}
          />
          <div className="bg-zinc-600 p-1 text-center">
            <div className="font-bold">William Alves</div>
          </div>
        </header>
        <nav className="bg-zinc-900 flex flex-col p-2 mt-4">
          <Link href="/" passHref>
            <Button
              className="bg-zinc-600 border-0 shadow-lg shadow-lg hover:bg-zinc-700 hover:text-white font-bold w-full"
              variant="outline"
            >
              Inicio
            </Button>
          </Link>
          <Link href="/about" passHref>
            <Button
              className="mt-5 bg-zinc-600 border-0 shadow-lg shadow-lg hover:bg-zinc-700 hover:text-white font-bold w-full"
              variant="outline"
            >
              Sobre
            </Button>
          </Link>
          <Link href="/experiences" passHref>
            <Button
              className="mt-5 bg-zinc-600 border-0 shadow-lg shadow-lg hover:bg-zinc-700 hover:text-white font-bold w-full"
              variant="outline"
            >
              Experiencias
            </Button>
          </Link>
          <Link href="/projects" passHref>
            <Button
              className="mt-5 bg-zinc-600 border-0 shadow-lg shadow-lg hover:bg-zinc-700 hover:text-white font-bold w-full"
              variant="outline"
            >
              Projetos
            </Button>
          </Link>
          <Link href="/contact" passHref>
            <Button
              className="mt-5 bg-zinc-600 border-0 shadow-lg shadow-lg hover:bg-zinc-700 hover:text-white font-bold w-full"
              variant="outline"
            >
              Contato
            </Button>
          </Link>
        </nav>
      </aside>
      <main className="flex-1 relative">{children}</main>
    </div>
  );
}
