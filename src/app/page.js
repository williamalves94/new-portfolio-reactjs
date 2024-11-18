import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-44 bg-zinc-950  text-white">
          <header>
            <Image
              src="/images/perfil-one.jpg"
              alt="desc"
              width={200}
              height={200}
            />
            <div className="bg-zinc-500 p-1 text-center">
              <div className="">William Alves</div>
            </div>
          </header>
          <div>Home</div>
          <div>About</div>
          <div>Experiences</div>
          <div>Projects</div>
          <div>Contact</div>
        </aside>
        <main className="flex-1">main</main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-3">
        footer
      </footer>
    </div>
  );
}
