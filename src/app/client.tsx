'use client';
import { useAppSelector } from '@/lib/redux/hooks';
import { ScrollArea } from '@/components/ui/scroll-area';
import TaskItem from '@/components/TaskItem';
import TaskAdder from '@/components/TaskAdder';
import type { RootState, AppDispatch } from '@/lib/redux/store';

// All client-side components go here
export default function HomeClient() {
  const tasks = useAppSelector((state: RootState) => state.taskList.tasks);

  return (
    <>
      <section className='place-center mb-4 flex flex-row gap-2'>
        <TaskAdder tasks={tasks} />
      </section>
      <ul className='tasklist scrollbar-styles'>
        {tasks.map((task) => (
          <TaskItem key={task.name} task={task} />
        ))}
      </ul>
    </>
  );
}
