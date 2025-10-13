'use client';

import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useRouter } from 'next/navigation';
import { Bell } from 'lucide-react';

const notifications = [
    {
        title: "Sua carona foi confirmada!",
        description: "João da Silva irá te buscar às 14:00.",
    },
    {
        title: "Lembrete: Ônibus Intercampus",
        description: "O próximo ônibus sai em 15 minutos.",
    },
    {
        title: "Nova carona disponível",
        description: "Uma nova opção de carona corresponde à sua rota.",
    },
];

export function DashboardHeader() {
    const router = useRouter();
    const image = PlaceHolderImages.find(p => p.id === 'testimonial-1');

    const handleLogout = () => {
        // Esta é uma implementação estática. A lógica de autenticação precisa ser adicionada.
        router.push('/');
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
                <nav className="flex items-center justify-between w-full">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <Logo />
                    </Link>
                    <div className="flex items-center gap-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="relative h-10 w-10 rounded-full">
                                    <Bell className="h-5 w-5" />
                                    <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-primary" />
                                    <span className="sr-only">Alternar notificações</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-80" align="end">
                                <DropdownMenuLabel>Notificações</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {notifications.length > 0 ? (
                                    notifications.map((notification, index) => (
                                        <DropdownMenuItem key={index} className="flex flex-col items-start gap-1">
                                            <p className="font-semibold">{notification.title}</p>
                                            <p className="text-xs text-muted-foreground">{notification.description}</p>
                                        </DropdownMenuItem>
                                    ))
                                ) : (
                                    <DropdownMenuItem>Nenhuma nova notificação</DropdownMenuItem>
                                )}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                                    <Avatar className="h-10 w-10">
                                        {image && <AvatarImage src={image.imageUrl} alt={image.description} data-ai-hint={image.imageHint} />}
                                        <AvatarFallback>U</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end" forceMount>
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium leading-none">Usuário</p>
                                        <p className="text-xs leading-none text-muted-foreground">
                                            usuario@exemplo.com
                                        </p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link href="/edit-profile">Editar Perfil</Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={handleLogout}>
                                    Sair
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </nav>
            </div>
        </header>
    );
}
