
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
        <h1 className="text-3xl font-bold mb-8">Welcome, Motorist</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Active Routes</CardTitle>
              <Bus className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">You have 2 active routes today</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Register a New Transport</CardTitle>
              <CarIcon className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Add a new vehicle to your fleet to start offering rides.</p>
              <Button className="w-full" asChild>
                <Link href="/register-transport">
                  Register Transport
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
