import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Bus, Users, ShieldCheck, Search } from 'lucide-react';

const features = [
  {
    icon: <Bus className="h-10 w-10 text-primary" />,
    title: 'Nunca perca o próximo ônibus',
    description: 'Acompanhe o ônibus intercampus em tempo real e planeje suas viagens com precisão. Saiba exatamente quando sair, para nunca mais ter que se apressar ou esperar.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Encontre sua nova carona',
    description: 'Conecte-se com uma grande comunidade de parceiros que oferecem várias opções de transporte. De caronas a aluguel de bicicletas, encontre a viagem perfeita para suas necessidades.',
  },
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: 'Descubra novas rotas',
    description: 'Explore as rotas mais eficientes e cênicas para se locomover pelo campus. Nosso roteamento inteligente ajuda você a encontrar o melhor caminho para o seu destino.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Seguro e Protegido',
    description: 'Todos os serviços são integrados com sua identidade de estudante para segurança e fácil acesso. Viaje com tranquilidade sabendo que todos os parceiros são verificados.',
  }
];

export function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium">Principais Recursos</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Mobilidade nos Seus Termos
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Escolha entre uma variedade de opções de transporte projetadas para tornar sua vida no campus mais fácil e conectada.
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
