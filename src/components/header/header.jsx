export default function Header({ title }) {
  return (
    <header className="shadow-md p-8 bg-zinc-700 text-white text-4xl">
      <h1>{title}</h1>
    </header>
  );
}
