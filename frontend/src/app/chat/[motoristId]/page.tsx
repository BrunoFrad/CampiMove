
'use client';

import { useState } from 'react';
import { DashboardHeader } from '@/components/dashboard/header';
import { Footer } from '@/components/landing/footer';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowLeft, Send } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { transportOptions } from '@/app/find-a-ride/page'; // This is not ideal, should come from a service.

type Message = {
  sender: 'user' | 'motorist';
  text: string;
  timestamp: string;
};

const initialMessages: Message[] = [
    { sender: 'motorist', text: 'Olá! Vi que você quer reservar uma carona. Para onde você vai?', timestamp: '10:30 AM' },
    { sender: 'user', text: 'Olá! Preciso ir para o Campus II.', timestamp: '10:31 AM' },
    { sender: 'motorist', text: 'Perfeito, estarei lá em 10 minutos para te buscar.', timestamp: '10:32 AM' },
];


export default function ChatPage() {
  const router = useRouter();
  const params = useParams();
  const motoristId = params.motoristId as string;

  const images = Object.fromEntries(PlaceHolderImages.map(p => [p.id, p]));
  const motorist = transportOptions.find(m => m.id === motoristId);
  const image = motorist ? images[motorist.avatarId] : null;


  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const userMessage: Message = {
        sender: 'user',
        text: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, userMessage]);
      setNewMessage('');
    }
  };

  if (!motorist) {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <DashboardHeader />
            <main className="flex-grow container mx-auto px-4 md:px-6 py-8 flex items-center justify-center">
                <Card className="w-full max-w-md text-center p-8">
                    <CardTitle>Motorista não encontrado</CardTitle>
                    <CardContent>
                        <p className="text-muted-foreground mt-4">O motorista que você está procurando não foi encontrado.</p>
                        <Button onClick={() => router.back()} className="mt-6">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
                        </Button>
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <DashboardHeader />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-8">
        <div className="max-w-3xl mx-auto">
          <Card className="flex flex-col h-[70vh]">
            <CardHeader className="flex flex-row items-center gap-4 border-b">
                <Button variant="ghost" size="icon" onClick={() => router.back()}>
                    <ArrowLeft />
                </Button>
                {image && (
                    <Avatar>
                        <AvatarImage src={image.imageUrl} alt={image.description} data-ai-hint={image.imageHint} />
                        <AvatarFallback>{motorist.motorist.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                )}
                <CardTitle className="text-lg">{motorist.motorist}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow overflow-y-auto p-6 space-y-4">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`flex items-end gap-2 ${
                            msg.sender === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                    >
                        {msg.sender === 'motorist' && image && (
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={image.imageUrl} />
                                <AvatarFallback>{motorist.motorist.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                            </Avatar>
                        )}
                        <div
                            className={`max-w-xs lg:max-w-md rounded-lg px-4 py-2 ${
                            msg.sender === 'user'
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted'
                            }`}
                        >
                            <p>{msg.text}</p>
                            <p className="text-xs opacity-75 mt-1 text-right">{msg.timestamp}</p>
                        </div>
                    </div>
                ))}
            </CardContent>
            <CardFooter className="p-4 border-t">
              <form onSubmit={handleSendMessage} className="flex w-full items-center gap-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-grow"
                />
                <Button type="submit" size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
