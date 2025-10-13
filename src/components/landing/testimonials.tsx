import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    quote: "CampiMove has completely changed how I get around campus. The e-bikes are a lifesaver for getting to my 8 AM class on time!",
    name: "Ana Silva",
    title: "Computer Science Student",
    imageId: "testimonial-1"
  },
  {
    quote: "I use the ride-sharing feature every day. It's cheaper than driving alone and I've met some great people from other courses.",
    name: "Bruno Costa",
    title: "Engineering Student",
    imageId: "testimonial-2"
  },
  {
    quote: "The shuttle tracker is incredibly accurate. No more guessing when the bus will arrive. A must-have app for every CEFET student.",
    name: "Carla Dias",
    title: "Design Student",
    imageId: "testimonial-3"
  }
];

export function Testimonials() {
  const images = Object.fromEntries(PlaceHolderImages.map(p => [p.id, p]));

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Loved by Students
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            See what fellow CEFET students are saying about CampiMove.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => {
            const image = images[testimonial.imageId];
            return (
              <Card key={index} className="border-0 shadow-none bg-transparent">
                <CardContent className="p-0 flex flex-col h-full text-left">
                  <blockquote className="flex-grow mb-4 border-l-4 border-primary pl-4 italic text-muted-foreground">
                    {testimonial.quote}
                  </blockquote>
                  <div className="flex items-center gap-4 mt-auto">
                    {image && (
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={image.imageUrl} alt={image.description} data-ai-hint={image.imageHint} />
                        <AvatarFallback>{testimonial.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                      </Avatar>
                    )}
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
