import { Button } from "@/components/ui";
import HomeClient from "./client";

export default function Home() {
  return (
    <main className='min-h-[80vh] flex flex-col place-center gap-2 p-2'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-loose lg:text-5xl mb-10'>Todolist</h1>
      <HomeClient />
    </main>
  );
}
