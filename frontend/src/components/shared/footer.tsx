import Link from "next/link";
import { AtSign, Globe, Mail, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FOOTER_EXPLORE_LINKS, FOOTER_LEGAL_LINKS } from "@/lib/constants";

interface FooterProps {
  variant?: "default" | "archive";
}

export function Footer({ variant = "default" }: FooterProps) {
  if (variant === "archive") {
    return (
      <footer className="border-t border-white/5 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="text-lg font-bold text-white">
                HiddoAI
              </Link>
              <p className="text-sm leading-relaxed text-zinc-400">
                Preserving the heartbeat of a nation through AI-powered
                archiving and cultural futurism.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex size-9 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:text-white"
                >
                  <Globe className="size-4" />
                </a>
                <a
                  href="#"
                  className="flex size-9 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:text-white"
                >
                  <AtSign className="size-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-white">Explore</h4>
              <ul className="space-y-2">
                {FOOTER_EXPLORE_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-white">Legal</h4>
              <ul className="space-y-2">
                {FOOTER_LEGAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-white">
                Newsletter
              </h4>
              <p className="mb-4 text-sm text-zinc-400">
                Stay updated on new archive discoveries.
              </p>
              <div className="flex gap-2">
                <Input
                  placeholder="Email address"
                  className="border-white/10 bg-zinc-900 text-white placeholder:text-zinc-500"
                />
                <Button className="shrink-0 bg-[#c7d2fe] text-zinc-900 hover:bg-[#a5b4fc]">
                  Join
                </Button>
              </div>
            </div>
          </div>

          <p className="mt-12 text-center text-xs text-zinc-500">
            © 2024 HiddoAI. Preserving Somali Heritage through Cultural
            Futurism.
          </p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="text-lg font-bold text-white">
              HiddoAI
            </Link>
            <p className="text-sm text-zinc-500">© 2024 HiddoAI</p>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
              Preserving Somali heritage through cultural futurism and
              artificial intelligence.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-wider text-zinc-500 uppercase">
              Connect
            </h4>
            <ul className="space-y-2">
              {FOOTER_EXPLORE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-wider text-zinc-500 uppercase">
              Legal
            </h4>
            <ul className="space-y-2">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex justify-end gap-3">
          <a
            href="#"
            className="flex size-8 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition-colors hover:text-white"
          >
            <Globe className="size-3.5" />
          </a>
          <a
            href="#"
            className="flex size-8 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition-colors hover:text-white"
          >
            <Star className="size-3.5" />
          </a>
          <a
            href="#"
            className="flex size-8 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition-colors hover:text-white"
          >
            <Mail className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
