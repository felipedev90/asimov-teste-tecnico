export default function Home() {
  return (
    <main className="p-10 space-y-6">
      <h1 className="text-h1 font-bold text-dark">
        Navigating the digital landscape
      </h1>
      <h2 className="text-h2 text-dark">Heading 2 com tamanho certo</h2>
      <p className="text-body text-dark">
        Esse é um parágrafo de teste. A fonte deve estar Space Grotesk.
      </p>
      <button className="bg-primary text-dark px-6 py-3 rounded-xl font-medium">
        Botão com cor primary
      </button>
      <div className="bg-dark text-primary p-6 rounded-2xl">
        Card escuro com texto verde
      </div>
    </main>
  );
}