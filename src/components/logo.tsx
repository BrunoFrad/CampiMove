import { MoveRight } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="CampiMove logo">
      <div className="bg-primary p-2 rounded-lg flex items-center justify-center">
        <MoveRight className="text-primary-foreground h-5 w-5" />
      </div>
      <span className="text-xl font-bold font-headline">CampiMove</span>
    </div>
  );
}
