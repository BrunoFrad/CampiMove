import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    quote: "O CampiMove mudou completamente como eu me locomovo no campus. As bicicletas elétricas são uma salvação para chegar a tempo na minha aula das 8h!",
    name: "Ana Silva",
    title: "Estudante de Ciência da Computação",
    imageId: "testimonial-1"
  },
  {
    quote: "Eu uso o recurso de caronas todos os dias. É mais barato do que dirigir sozinho e conheci pessoas ótimas de outros cursos.",
    name: "Bruno Costa",
    title: "Estudante de Engenharia",
    imageId: "testimonial-2"
  },
  {
    quote: "O rastreador de ônibus é incrivelmente preciso. Chega de adivinhar quando o ônibus vai chegar. Um aplicativo essencial para todo estudante do CEFET.",
    name: "Carla Dias",
    title: "Estudante de Design",
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
            Adorado pelos Alunos
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Veja o que outros estudantes do CEFET estão dizendo sobre o CampiMove.
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
