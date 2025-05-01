import Image from "next/image";

export default function NavBar() {
  return (
    <header className="relative z-10 w-full pt-6 pb-2 flex items-center justify-between max-w-7xl mx-auto px-6">
      {/* Left: Logo */}
      <a href="/" aria-label="Home" className="flex items-center gap-2 select-none">
        {/* Use your logo.svg in /public */}
        <Image
          src="/logo.svg"
          alt="Logo"
          width={36}
          height={36}
          priority
          className="h-9 w-9 object-contain"
        />
      </a>
      {/* Right: Hamburger (mobile only, hides on desktop for now) */}
      <button
        className="block sm:hidden rounded-md p-2 hover:bg-white/10 transition"
        aria-label="Open menu"
      >
        {/* Hamburger icon in SVG */}
        <svg width="28" height="28" fill="none" stroke="#e6e6e6" strokeWidth={2} strokeLinecap="round">
          <line x1="7" y1="9" x2="21" y2="9" />
          <line x1="7" y1="14" x2="21" y2="14" />
          <line x1="7" y1="19" x2="21" y2="19" />
        </svg>
      </button>
      {/* Right: Placeholder for links (visible on larger screens if desired)
      <nav className="hidden sm:flex gap-6">
        <a href="#features" className="text-white/70 hover:text-white transition">Features</a>
        <a href="#pricing" className="text-white/70 hover:text-white transition">Pricing</a>
      </nav>
      */}
    </header>
  );
}
