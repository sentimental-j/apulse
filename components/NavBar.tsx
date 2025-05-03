// components/Navbar.tsx
export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tight">Apulse</div>
        <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:scale-105 transition-transform">
          Start Building
        </button>
      </div>
    </header>
  );
}
