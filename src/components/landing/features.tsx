import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Bike, Car, Bus, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Bike className="h-10 w-10 text-primary" />,
    title: 'Shared E-Bikes',
    description: 'Grab an e-bike from dozens of stations across campus. Perfect for short trips between classes.',
    price: '$1 / 15 min'
  },
  {
    icon: <Car className="h-10 w-10 text-primary" />,
    title: 'Ride Sharing',
    description: 'Carpool with fellow students. Save money, reduce traffic, and make new friends.',
    price: 'From $2 / ride'
  },
  {
    icon: <Bus className="h-10 w-10 text-primary" />,
    title: 'Campus Shuttle Tracker',
    description: 'Real-time tracking for all campus shuttles. Never miss your ride again.',
    price: 'Free for students'
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Safe & Secure',
    description: 'All services are integrated with your student ID for safety and easy access.',
    price: 'Included'
  }
];

export function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium">Top Features</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Mobility on Your Terms
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Choose from a variety of transportation options designed to make your campus life easier and more connected.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="items-center text-center p-6">
                {feature.icon}
                <CardTitle className="mt-4 text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col text-center p-6 pt-0">
                <CardDescription className="flex-grow">{feature.description}</CardDescription>
                <div className="mt-6">
                  <span className="text-2xl font-bold text-primary">{feature.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
