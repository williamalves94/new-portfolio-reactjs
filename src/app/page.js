import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-4">sidebar</aside>
        <main>main</main>
        <footer>footer</footer>
      </div>
    </div>
  );
}
