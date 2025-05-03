export default function Footer() {
  return (
    <footer className="w-full py-10 px-6 md:px-12 border-t border-white/10 bg-black text-center text-white/50 text-sm">
      <p>
        © {new Date().getFullYear()} Apulse. All rights reserved.
      </p>
      <p className="mt-2">
        Built with love, caffeine, and a touch of AI.
      </p>
    </footer>
  );
}
