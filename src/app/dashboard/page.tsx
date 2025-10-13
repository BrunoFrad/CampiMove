
'use client';

import { useState } from 'react';
import { DashboardHeader } from '@/components/dashboard/header';
import { Footer } from '@/components/landing/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bus, CalendarPlus, Star } from 'lucide-react';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { useToast } from '@/hooks/use-toast';


const initialRecentTravels = [
  {
    id: 'travel-1',
    destination: 'Campus II',
    driver: 'John Doe',
    date: '2024-07-25',
    rated: false,
  },
  {
    id: 'travel-2',
    destination: 'Downtown Library',
    driver: 'Jane Smith',
    date: '2024-07-24',
    rated: true,
    rating: 5,
  },
  {
    id: 'travel-3',
    destination: 'Main Campus',
    driver: 'Sam Wilson',
    date: '2024-07-22',
    rated: false,
  },
];

type Travel = typeof initialRecentTravels[0];

export default function DashboardPage() {
  const [recentTravels, setRecentTravels] = useState(initialRecentTravels);
  const [selectedTravel, setSelectedTravel] = useState<Travel | null>(null);
  const [rating, setRating] = useState(0);
  const [isRatingDialogOpen, setIsRatingDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleRateClick = (travel: Travel) => {
    setSelectedTravel(travel);
    setRating(0); // Reset rating
    setIsRatingDialogOpen(true);
  };

  const handleRatingSubmit = () => {
    if (selectedTravel && rating > 0) {
      console.log(`Submitting rating ${rating} for travel ${selectedTravel.id}`);
      // This is a static implementation.
      // Update the travel item to show it has been rated.
      setRecentTravels(travels =>
        travels.map(t =>
          t.id === selectedTravel.id ? { ...t, rated: true, rating: rating } : t
        )
      );
      toast({
        title: 'Thank you for your feedback!',
        description: `You rated your trip with ${selectedTravel.driver} ${rating} stars.`,
      });
      setIsRatingDialogOpen(false);
      setSelectedTravel(null);
    } else {
       toast({
        title: 'Invalid rating',
        description: 'Please select a star rating before submitting.',
        variant: 'destructive',
      });
    }
  };


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <DashboardHeader />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">Welcome to your Dashboard</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

           <Dialog open={isRatingDialogOpen} onOpenChange={setIsRatingDialogOpen}>
            <Card className="hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1 lg:row-start-2">
                <CardHeader>
                    <CardTitle>Recent Travels</CardTitle>
                    <CardDescription>View and rate your past trips.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {recentTravels.map((travel) => (
                    <div key={travel.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-accent">
                        <div>
                        <p className="font-semibold">{travel.destination}</p>
                        <p className="text-sm text-muted-foreground">with {travel.driver} on {travel.date}</p>
                        </div>
                        {travel.rated ? (
                          <div className="flex items-center gap-1 text-yellow-500">
                             {[...Array(travel.rating || 0)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-current" />
                             ))}
                          </div>
                        ) : (
                           <DialogTrigger asChild>
                            <Button variant="outline" size="sm" onClick={() => handleRateClick(travel)}>Rate Trip</Button>
                           </DialogTrigger>
                        )}
                    </div>
                    ))}
                </CardContent>
            </Card>
            {selectedTravel && (
               <DialogContent>
                <DialogHeader>
                  <DialogTitle>Rate your trip to {selectedTravel.destination}</DialogTitle>
                  <DialogDescription>
                    How was your experience with {selectedTravel.driver} on {selectedTravel.date}?
                  </DialogDescription>
                </DialogHeader>
                <div className="flex justify-center items-center gap-2 py-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} onClick={() => setRating(star)}>
                      <Star
                        className={`h-8 w-8 cursor-pointer transition-colors ${
                          star <= rating
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300 hover:text-yellow-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button onClick={handleRatingSubmit}>Submit Rating</Button>
                </DialogFooter>
              </DialogContent>
            )}
           </Dialog>
        </div>
      </main>
      <Footer />
    </div>
  );
}
