import Image from "next/image";
import Layout from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className="h-screen flex flex-col">
        <div className="flex flex-1">
          <main className="relative flex-1">
            <Image
              src="/images/image-main.jpg" // Caminho da imagem na pasta pública
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
    </Layout>
  );
}
