'use client';

import { DashboardHeader } from '@/components/dashboard/header';
import { Footer } from '@/components/landing/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useState } from 'react';
import { Camera } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function EditProfilePage() {
  const { toast } = useToast();
  const image = PlaceHolderImages.find(p => p.id === 'testimonial-1');
  const [name, setName] = useState('Usuário');
  const [email, setEmail] = useState('usuario@exemplo.com');

  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    // Esta é uma implementação estática. A lógica de atualização de perfil precisa ser adicionada.
    console.log('Salvando alterações:', { name, email });
    toast({
      title: 'Perfil Atualizado',
      description: 'Suas alterações foram salvas com sucesso.',
    });
  };

  const handleAvatarChange = () => {
    // Esta é uma implementação estática. A lógica de upload de arquivo precisa ser adicionada.
    toast({
      title: 'Recurso não disponível',
      description: 'O upload de avatar ainda não foi implementado.',
      variant: 'destructive'
    });
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <DashboardHeader />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Editar Perfil</CardTitle>
              <CardDescription>Atualize as informações da sua conta.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveChanges}>
                <div className="grid gap-6">
                  <div className="flex items-center gap-4">
                     <div className="relative">
                        <Avatar className="h-20 w-20">
                          {image && <AvatarImage src={image.imageUrl} alt={image.description} data-ai-hint={image.imageHint} />}
                          <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute bottom-0 right-0 rounded-full h-8 w-8 bg-background/50 hover:bg-background"
                          onClick={handleAvatarChange}
                        >
                          <Camera className="h-4 w-4" />
                          <span className="sr-only">Alterar avatar</span>
                        </Button>
                      </div>
                    <div className="grid gap-1.5">
                      <h3 className="text-lg font-semibold">{name}</h3>
                      <p className="text-sm text-muted-foreground">{email}</p>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit">Salvar Alterações</Button>
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
