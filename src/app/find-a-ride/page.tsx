
'use client';

import { useState } from 'react';
import { DashboardHeader } from '@/components/dashboard/header';
import { Footer } from '@/components/landing/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Car, Bike, PersonStanding } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

const transportOptions = [
  {
    id: 'ride-1',
    motorist: 'John Doe',
    transportType: 'Carpool',
    rating: 4.5,
    price: 15,
    avatarId: 'motorist-1',
  },
  {
    id: 'ride-2',
    motorist: 'Jane Smith',
    transportType: 'Bike',
    rating: 5,
    price: 5,
    avatarId: 'motorist-2',
  },
  {
    id: 'ride-3',
    motorist: 'Sam Wilson',
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

export default function FindARidePage() {
  const images = Object.fromEntries(PlaceHolderImages.map(p => [p.id, p]));
  const [transportType, setTransportType] = useState('all');
  const [minRating, setMinRating] = useState(0);

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
          <h1 className="text-4xl font-bold">Find a Ride</h1>
          <p className="text-muted-foreground">Browse available transport options and find your perfect match.</p>
        </header>

        <div className="grid md:grid-cols-4 gap-8">
          <aside className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="transport-type" className="text-sm font-medium">Transport Type</label>
                  <Select value={transportType} onValueChange={setTransportType}>
                    <SelectTrigger id="transport-type">
                      <SelectValue placeholder="All types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="carpool">Carpool</SelectItem>
                      <SelectItem value="bike">Bike</SelectItem>
                      <SelectItem value="scooter">Scooter</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Minimum Rating: {minRating.toFixed(1)} <Star className="inline-block h-4 w-4 mb-1" /></label>
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
                              <span>{option.transportType}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                            <span className="font-bold">{option.rating.toFixed(1)}</span>
                          </div>
                          <Button size="sm" asChild>
                            <Link href="#">Book Now</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                   )
                })
              ) : (
                <Card>
                    <CardContent className="p-8 text-center">
                        <p className="text-muted-foreground">No rides match your criteria. Try adjusting the filters.</p>
                    </CardContent>
                </Card>
              )}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
