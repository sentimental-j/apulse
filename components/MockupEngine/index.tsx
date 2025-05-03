"use client";

import Templates from "./Templates";
import DevicePreview from "./DevicePreview";
import Chat from "./Chat";

export default function MockupEngine() {
  return (
    <section className="w-full py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Generate Your AI Mockup Instantly
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* AI Chat Interface */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow h-full">
          <Chat />
        </div>

        {/* Responsive Mockup Display */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow h-full">
          <DevicePreview />
        </div>
      </div>

      {/* Template Grid */}
      <Templates />
    </section>
  );
}
