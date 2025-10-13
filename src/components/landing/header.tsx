import Link from 'next/link';
import { Logo } from '@/components/logo';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <nav className="flex items-center justify-between w-full">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
          </Link>
        </nav>
      </div>
    </header>
  );
}
