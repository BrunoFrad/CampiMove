import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Cta() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden flex flex-col items-center text-center space-y-6 bg-accent/30 p-8 md:p-16 rounded-2xl">
           <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
           <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-accent-foreground">
            Ready to Move Smarter?
          </h2>
          <p className="max-w-[600px] text-accent-foreground/80 md:text-xl">
            Download the CampiMove app today and join the campus mobility revolution.
          </p>
          <Button size="lg" asChild className="shadow-lg shadow-primary/20 z-10">
            <Link href="#">
              Get Started for Free <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
