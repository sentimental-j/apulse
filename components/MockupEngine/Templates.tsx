// File: components/MockupEngine/Templates.tsx
"use client";
import Image from "next/image";

type Template = {
  id: number;
  name: string;
  preview: string;
};

const templates: Template[] = [
  {
    id: 1,
    name: "E-commerce",
    preview: "/mockups/ecommerce-preview.png",
  },
  {
    id: 2,
    name: "Portfolio",
    preview: "/mockups/portfolio-preview.png",
  },
  {
    id: 3,
    name: "Landing Page",
    preview: "/mockups/landing-preview.png",
  },
  {
    id: 4,
    name: "SaaS Dashboard",
    preview: "/mockups/saas-preview.png",
  },
];

export default function Templates() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
      {templates.map((template) => (
        <div
          key={template.id}
          className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow hover:scale-105 transition-transform cursor-pointer"
        >
          <div className="relative w-full h-40">
            <Image
              src={template.preview}
              alt={template.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium">{template.name}</h3>
            <p className="text-sm text-white/70">AI-ready mockup</p>
          </div>
        </div>
      ))}
    </div>
  );
}
