import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/5 bg-[#121212] px-6 py-16 text-center sm:px-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Join the Diaspora Digital Community
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-zinc-400">
            Stay updated on our latest archiving projects and AI releases.
            Connect with Somalis worldwide preserving our shared heritage.
          </p>
          <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <Input
              placeholder="Enter your email"
              type="email"
              className="h-11 flex-1 border-white/10 bg-zinc-900 text-white placeholder:text-zinc-500"
            />
            <Button className="h-11 bg-[#c7d2fe] px-8 text-zinc-900 hover:bg-[#a5b4fc]">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
