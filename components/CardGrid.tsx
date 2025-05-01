"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    imgSrc: "https://framerusercontent.com/images/vq9vnuJruUyplvTmweJBT00k1I.jpg",
    title: "Modernizing a Subscription Management Platform",
    description:
      "User-centered approach to create an intuitive interface for effortless financial management with gamification.",
    caseStudyLink: "./work/modernization-of-a-subscription-management-platform",
    bgColor: "rgb(130, 201, 94)",
  },
  {
    imgSrc: "https://framerusercontent.com/images/82V0lDZt5IN8w9i1157kfT8pSU.jpg",
    title: "Revamping an E-Commerce Website",
    description:
      "Redesigned an e-commerce site to improve UX and increase sales, with streamlined checkout and navigation.",
    caseStudyLink: "./work/revamping-an-e-commerce-website",
    bgColor: "rgb(212, 135, 64)",
  },
  {
    imgSrc: "https://framerusercontent.com/images/Y1hHthCTPz6YNLIhonp2E5s5WU.jpg",
    title: "Developing a Mobile Health Tracking App",
    description:
      "Leading Bitcoin Data and Stats site for live price action and key economic indicators.",
    caseStudyLink: "./work/developing-a-mobile-health-tracking-app",
    bgColor: "rgb(186, 138, 214)",
  },
  {
    imgSrc: "https://framerusercontent.com/images/UlzZi7Dd7txMrOquJLbf9wyEiig.jpg",
    title: "Optimizing a Corporate Intranet",
    description:
      "Innovative app using unused internet from devices with user-friendly simple design.",
    caseStudyLink: "./work/optimizing-a-corporate-intranet",
    bgColor: "rgb(15, 100, 153)",
  },
];

export function CardGrid() {
  return (
    <section
      id="case-study"
      className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid gap-12 lg:grid-cols-2 xl:grid-cols-4"
    >
      {cards.map(({ imgSrc, title, description, caseStudyLink, bgColor }, i) => (
        <motion.a
          key={i}
          href={caseStudyLink}
          className="group relative rounded-3xl shadow-lg shadow-black/50 backdrop-blur-md border border-white/10 transition-transform hover:scale-[1.03]"
          style={{
            backgroundColor: "rgba(20, 20, 20, 0.85)",
            WebkitBackdropFilter: "blur(20px)",
            backdropFilter: "blur(20px)",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
        >
          {/* Blurred glowing blob */}
          <div
            style={{ backgroundColor: bgColor, filter: 'blur(90px)' }}
            className="absolute -top-28 -right-24 w-64 h-64 rounded-full opacity-30 pointer-events-none"
          />
          <div className="relative rounded-3xl overflow-hidden cursor-pointer border border-white/10">
            <Image
              src={imgSrc}
              alt={title}
              width={400}
              height={400}
              className="w-full h-64 object-cover rounded-t-3xl"
              priority={i === 0}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
              <p className="text-white/70 text-sm line-clamp-3">{description}</p>
              <div className="mt-4 text-purple font-semibold">View case study &rarr;</div>
            </div>
          </div>
        </motion.a>
      ))}
    </section>
  );
}
