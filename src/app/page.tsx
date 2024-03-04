import { Separator } from '@/components/ui';
import HomeClient from './client';

export default function Home() {
  return (
    <main className='place-center flex min-h-[80vh] flex-col gap-2 p-2'>
      <h1 className='tracking-loose scroll-m-20 text-4xl font-extrabold lg:text-5xl'>
        Todo List ✅
      </h1>
      <Separator className='my-4 max-w-sm' orientation='horizontal' />
      <HomeClient />
    </main>
  );
}
