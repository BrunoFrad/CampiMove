import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            Revolucione Seu Trajeto no Campus
          </h1>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            O CampiMove oferece aos estudantes do CEFET uma maneira mais inteligente, rápida e sustentável de navegar pelo campus. Diga adeus a longas caminhadas e olá à mobilidade contínua.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button size="lg" asChild className="shadow-lg shadow-primary/20">
              <Link href="/register">
                Experimente agora <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#features">
                Saiba Mais
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
