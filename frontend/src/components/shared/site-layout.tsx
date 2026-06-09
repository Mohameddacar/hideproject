import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";

interface SiteLayoutProps {
  children: React.ReactNode;
  footerVariant?: "default" | "archive";
  showSearch?: boolean;
}

export function SiteLayout({
  children,
  footerVariant = "default",
  showSearch = true,
}: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a0a]">
      <Navbar showSearch={showSearch} />
      <main className="flex-1">{children}</main>
      <Footer variant={footerVariant} />
    </div>
  );
}
