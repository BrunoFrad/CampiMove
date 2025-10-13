
import { DashboardHeader } from '@/components/dashboard/header';
import { Footer } from '@/components/landing/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bus, CalendarPlus } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <DashboardHeader />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">Welcome to your Dashboard</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Next Intercampus Bus</CardTitle>
              <Bus className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">12:45 PM</div>
              <p className="text-xs text-muted-foreground">Arriving at Main Campus Stop</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Reserve a Transport</CardTitle>
              <CalendarPlus className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Need a ride? Find carpools, bikes, and more.</p>
              <Button className="w-full" asChild>
                <Link href="/find-a-ride">
                  Find a Ride
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
