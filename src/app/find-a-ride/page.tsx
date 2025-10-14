
'use client';

import { useState } from 'react';
import { DashboardHeader } from '@/components/dashboard/header';
import { Footer } from '@/components/landing/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Car, Bike, PersonStanding, ShieldAlert } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';

const transportOptions = [
  {
    id: 'ride-1',
    motorist: 'João da Silva',
    transportType: 'Carpool',
    rating: 4.5,
    price: 15,
    avatarId: 'motorist-1',
  },
  {
    id: 'ride-2',
    motorist: 'Maria Souza',
    transportType: 'Bike',
    rating: 5,
    price: 5,
    avatarId: 'motorist-2',
  },
  {
    id: 'ride-3',
    motorist: 'Samuel Wilson',
    transportType: 'Scooter',
    rating: 4.0,
    price: 8,
    avatarId: 'motorist-3',
  },
    {
    id: 'ride-4',
    motorist: 'Emily Brown',
    transportType: 'Carpool',
    rating: 4.8,
    price: 12,
    avatarId: 'testimonial-1',
  },
];

const transportIcons: { [key: string]: React.ReactNode } = {
  Carpool: <Car className="h-5 w-5" />,
  Bike: <Bike className="h-5 w-5" />,
  Scooter: <PersonStanding className="h-5 w-5" />,
};

type TransportOption = typeof transportOptions[0];

export default function FindARidePage() {
  const images = Object.fromEntries(PlaceHolderImages.map(p => [p.id, p]));
  const [transportType, setTransportType] = useState('all');
  const [minRating, setMinRating] = useState(0);
  const [selectedMotorist, setSelectedMotorist] = useState<TransportOption | null>(null);
  const [reportReason, setReportReason] = useState('');
  const { toast } = useToast();

  const handleReportSubmit = () => {
    if (selectedMotorist && reportReason.trim()) {
      console.log(`Denunciando motorista ${selectedMotorist.motorist} por: ${reportReason}`);
      toast({
        title: 'Denúncia Enviada',
        description: `Sua denúncia sobre ${selectedMotorist.motorist} foi enviada para análise.`,
      });
      setReportReason('');
      setSelectedMotorist(null);
      // Close dialog by returning true if you control it via an `open` prop
      return true;
    } else {
       toast({
        title: 'Erro na Denúncia',
        description: 'Por favor, preencha o motivo da denúncia.',
        variant: 'destructive',
      });
      return false;
    }
  };

  const filteredTransport = transportOptions.filter((option) => {
    const typeMatch = transportType === 'all' || option.transportType.toLowerCase() === transportType;
    const ratingMatch = option.rating >= minRating;
    return typeMatch && ratingMatch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <DashboardHeader />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold">Encontrar Carona</h1>
          <p className="text-muted-foreground">Navegue pelas opções de transporte disponíveis e encontre a combinação perfeita.</p>
        </header>

        <Dialog onOpenChange={(isOpen) => !isOpen && setSelectedMotorist(null)}>
          <div className="grid md:grid-cols-4 gap-8">
            <aside className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Filtros</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="transport-type" className="text-sm font-medium">Tipo de Transporte</label>
                    <Select value={transportType} onValueChange={setTransportType}>
                      <SelectTrigger id="transport-type">
                        <SelectValue placeholder="Todos os tipos" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos</SelectItem>
                        <SelectItem value="carpool">Carona</SelectItem>
                        <SelectItem value="bike">Bicicleta</SelectItem>
                        <SelectItem value="scooter">Patinete</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Avaliação Mínima: {minRating.toFixed(1)} <Star className="inline-block h-4 w-4 mb-1" /></label>
                    <Slider
                      min={0}
                      max={5}
                      step={0.5}
                      value={[minRating]}
                      onValueChange={(value) => setMinRating(value[0])}
                    />
                  </div>
                </CardContent>
              </Card>
            </aside>

            <section className="md:col-span-3">
              <div className="grid gap-6">
                {filteredTransport.length > 0 ? (
                  filteredTransport.map((option) => {
                     const image = images[option.avatarId];
                     return (
                      <Card key={option.id} className="transition-shadow hover:shadow-md">
                        <CardContent className="p-4 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                             {image && (
                              <Avatar className="h-14 w-14">
                                  <AvatarImage src={image.imageUrl} alt={image.description} data-ai-hint={image.imageHint}/>
                                  <AvatarFallback>{option.motorist.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                              </Avatar>
                             )}
                            <div>
                              <h3 className="font-semibold text-lg">{option.motorist}</h3>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                {transportIcons[option.transportType]}
                                <span>{option.transportType === 'Carpool' ? 'Carona' : option.transportType === 'Bike' ? 'Bicicleta' : 'Patinete'}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex flex-col items-end gap-2">
                                <div className="flex items-center gap-1">
                                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                                    <span className="font-bold">{option.rating.toFixed(1)}</span>
                                </div>
                                <Button size="sm" asChild>
                                    <Link href="#">Reservar Agora</Link>
                                </Button>
                            </div>
                            <DialogTrigger asChild>
                                <Button variant="ghost" size="icon" onClick={() => setSelectedMotorist(option)} title="Denunciar motorista">
                                    <ShieldAlert className="h-5 w-5 text-destructive" />
                                </Button>
                            </DialogTrigger>
                          </div>
                        </CardContent>
                      </Card>
                     )
                  })
                ) : (
                  <Card>
                      <CardContent className="p-8 text-center">
                          <p className="text-muted-foreground">Nenhuma carona corresponde aos seus critérios. Tente ajustar os filtros.</p>
                      </CardContent>
                  </Card>
                )}
              </div>
            </section>
          </div>
           {selectedMotorist && (
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Denunciar {selectedMotorist.motorist}</DialogTitle>
                <DialogDescription>
                  Por favor, descreva o motivo da sua denúncia. Sua identidade será mantida em sigilo.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Label htmlFor="report-reason">Motivo</Label>
                <Textarea
                  id="report-reason"
                  placeholder="Ex: Direção perigosa, comportamento inadequado..."
                  value={reportReason}
                  onChange={(e) => setReportReason(e.target.value)}
                  rows={4}
                />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                    <Button variant="outline">Cancelar</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button variant="destructive" onClick={handleReportSubmit}>Enviar Denúncia</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          )}
        </Dialog>
      </main>
      <Footer />
    </div>
  );
}
