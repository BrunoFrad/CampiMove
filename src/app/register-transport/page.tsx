
'use client';

import { useState } from 'react';
import { DashboardHeader } from '@/components/dashboard/header';
import { Footer } from '@/components/landing/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

export default function RegisterTransportPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [transportType, setTransportType] = useState('');
  const [model, setModel] = useState('');
  const [licensePlate, setLicensePlate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static implementation
    console.log({ transportType, model, licensePlate });
    toast({
      title: 'Transport Registered',
      description: 'Your vehicle has been successfully registered.',
    });
    router.push('/dashboard/motorist');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <DashboardHeader />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Register a New Transport</CardTitle>
              <CardDescription>Add the details of your vehicle to start offering rides.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="transport-type">Transport Type</Label>
                    <Select value={transportType} onValueChange={setTransportType}>
                      <SelectTrigger id="transport-type">
                        <SelectValue placeholder="Select a type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="carpool">Carpool</SelectItem>
                        <SelectItem value="bike">Bike</SelectItem>
                        <SelectItem value="scooter">Scooter</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="model">Vehicle Model</Label>
                    <Input
                      id="model"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      placeholder="e.g., Toyota Corolla"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="license-plate">License Plate</Label>
                    <Input
                      id="license-plate"
                      value={licensePlate}
                      onChange={(e) => setLicensePlate(e.target.value)}
                      placeholder="e.g., ABC-1234"
                      required
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit">Register Transport</Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
