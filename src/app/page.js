import Image from "next/image";
import { Button } from "@/components/ui/button";

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
              <Button className="bg-zinc-500 font-bold" variant="outline">
                Home
              </Button>
              <Button className="mt-4 bg-zinc-500 font-bold" variant="outline">
                About
              </Button>
              <Button className="mt-4 bg-zinc-500 font-bold" variant="outline">
                Experiences
              </Button>
              <Button className="mt-4 bg-zinc-500 font-bold" variant="outline">
                Projects
              </Button>
              <Button className="mt-4 bg-zinc-500 font-bold" variant="outline">
                Contact
              </Button>
            </div>
          </div>
        </aside>
        <main className="flex-1">
          <div className="flex flex-col">
            <span>William Alves</span>
            <span>Eu sou um desenvolvedor front-end</span>
          </div>
        </main>
      </div>
    </div>
  );
}
