import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-44 bg-zinc-950  text-white">
          <header>
            <Image
              src="/images/perfil-one.jpg"
              alt="desc"
              width={180}
              height={150}
            />
            <div className="bg-zinc-500 p-1 text-center">
              <div className="font-bold">William Alves</div>
            </div>
          </header>
          <div>
            <div className="flex flex-col p-2 mt-4">
              <Link href="/" passHref>
                <Button
                  className="bg-zinc-500 font-bold w-full"
                  variant="outline"
                >
                  Inicio
                </Button>
              </Link>

              <Link href="/about" passHref>
                <Button
                  className="mt-5 bg-zinc-500 font-bold w-full"
                  variant="outline"
                >
                  Sobre
                </Button>
              </Link>

              <Link href="/experiences" passHref>
                <Button
                  className="mt-5 bg-zinc-500 font-bold w-full"
                  variant="outline"
                >
                  Experiencias
                </Button>
              </Link>

              <Link href="/projects" passHref>
                <Button
                  className="mt-5 bg-zinc-500 font-bold w-full"
                  variant="outline"
                >
                  Projetos
                </Button>
              </Link>

              <Link href="/contact" passHref>
                <Button
                  className="mt-5 bg-zinc-500 font-bold w-full"
                  variant="outline"
                >
                  Contato
                </Button>
              </Link>
            </div>
          </div>
        </aside>
        <main className="relative flex-1">
          <Image
            src="/images/image-tech-main.jpg" // Caminho da imagem na pasta pública
            alt="Fundo"
            layout="fill" // Preenche o elemento pai
            objectFit="cover" // Ajusta a imagem para cobrir todo o espaço
            quality={100} // Define a qualidade da imagem
            className="-z-10" // Coloca a imagem atrás do conteúdo
          />
          <div className="flex flex-col mt-64 ms-20">
            <h1 className="text-7xl text-white">William Alves</h1>
            <h1 className="text-4xl text-white">
              Eu sou um desenvolvedor front-end
            </h1>
          </div>
        </main>
      </div>
    </div>
  );
}
