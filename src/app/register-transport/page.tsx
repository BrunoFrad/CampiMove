
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
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementação estática
    console.log({ transportType, model, phoneNumber });
    toast({
      title: 'Transporte Cadastrado',
      description: 'Seu veículo foi cadastrado com sucesso.',
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
              <CardTitle>Cadastrar um Novo Transporte</CardTitle>
              <CardDescription>Adicione os detalhes do seu veículo para começar a oferecer caronas.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="transport-type">Tipo de Transporte</Label>
                    <Select value={transportType} onValueChange={setTransportType}>
                      <SelectTrigger id="transport-type">
                        <SelectValue placeholder="Selecione um tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="carpool">Carona</SelectItem>
                        <SelectItem value="bike">Bicicleta</SelectItem>
                        <SelectItem value="scooter">Patinete</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="model">Modelo do Veículo</Label>
                    <Input
                      id="model"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      placeholder="ex: Toyota Corolla"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone-number">Telefone de Contato</Label>
                    <Input
                      id="phone-number"
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="ex: (XX) XXXXX-XXXX"
                      required
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit">Cadastrar Transporte</Button>
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
