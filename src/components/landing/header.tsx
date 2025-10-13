import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <nav className="flex items-center justify-between w-full">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
          </Link>
          <div className="flex items-center gap-2">
             <Button variant="ghost" asChild>
                <Link href="/login">Entrar</Link>
            </Button>
            <Button asChild>
                <Link href="/register">Experimente agora</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
