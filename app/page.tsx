export default function Home() {
  return (
    <main className="min-h-screen w-full px-6 md:px-12 pt-10 md:pt-20 text-white relative">
      {/* Top Navbar */}
      <header className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tight">Apulse</div>
        <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:scale-105 transition-transform">
          Start Building
        </button>
      </header>

      {/* Hero Section */}
      <section className="mt-32 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
          Your competitors are already online.
          <br />
          It's your turn to shine.
        </h1>
        <p className="text-lg mt-6 opacity-80 max-w-xl mx-auto">
          Launch your AI-built website in minutes, not months.
        </p>
      </section>

      {/* Placeholder for upcoming components */}
      <section className="mt-40 mb-20 text-center opacity-40">
        <p>[ Cards, Mockup Preview, AI Chatbot, etc. coming soon... ]</p>
      </section>
    </main>
  );
}
