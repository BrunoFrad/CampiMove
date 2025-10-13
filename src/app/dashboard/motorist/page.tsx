
import { DashboardHeader } from '@/components/dashboard/header';
import { Footer } from '@/components/landing/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bus, CarIcon } from 'lucide-react';
import Link from 'next/link';

export default function MotoristDashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <DashboardHeader />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">Bem-vindo, Motorista</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Rotas Ativas</CardTitle>
              <Bus className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Você tem 2 rotas ativas hoje</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Cadastrar um Novo Transporte</CardTitle>
              <CarIcon className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Adicione um novo veículo à sua frota para começar a oferecer caronas.</p>
              <Button className="w-full" asChild>
                <Link href="/register-transport">
                  Cadastrar Transporte
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
