import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-60 bg-zinc-950 p-4 text-white">sidebar</aside>
        <main className="flex-1">main</main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-3">
        footer
      </footer>
    </div>
  );
}
