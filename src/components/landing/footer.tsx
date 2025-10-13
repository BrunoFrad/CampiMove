import Link from 'next/link';
import { Logo } from '@/components/logo';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex-1 text-center sm:text-left">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <p className="text-sm text-muted-foreground order-last sm:order-none">
          &copy; {currentYear} CampiMove. All rights reserved.
        </p>
        <div className="flex gap-4 flex-1 justify-center sm:justify-end">
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Terms
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
