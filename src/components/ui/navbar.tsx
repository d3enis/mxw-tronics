"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

const nav = [
  { href: "#", label: "Početna" },
  { href: "#usluge", label: "Usluge" },
  { href: "#galerija", label: "Galerija" },
  { href: "#recenzije", label: "Recenzije" },
  { href: "#kontakt", label: "Kontakt" },
  { href: "#lokacija", label: "Lokacija" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-4">
          <div />

          <div className="flex items-center gap-8">
            <Link href="/" className="select-none whitespace-nowrap">
              <span className="text-2xl font-extrabold tracking-tight">
                <span className="text-[#3B82F6]">MXW</span>
                <span className="text-white"> Tronics</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-200">
              {nav.map((i) => (
                <a key={i.label} href={i.href} className="hover:text-white">
                  {i.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex justify-end">
            <a
              href="tel:+385917963313"
              className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-4 py-2 font-medium text-white shadow-md hover:opacity-90"
            >
              <Phone size={16} /> 091 796 3313
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
