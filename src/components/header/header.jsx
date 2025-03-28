export default function Header({ title }) {
  return (
    <header className="shadow-md p-6 bg-zinc-700 text-white text-3xl">
      <h1>{title}</h1>
    </header>
  );
}
