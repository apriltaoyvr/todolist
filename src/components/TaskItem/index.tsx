'use client';
// UI
import { cn } from '@/lib/utils';
import {
  TrashIcon,
  CheckIcon,
  Cross1Icon,
  StarIcon,
  StarFilledIcon,
} from '@radix-ui/react-icons';
import { Button } from '@/components/ui';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { TaskItemButton } from './button';
// Hooks
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
// Reducers
import {
  removeTask,
  toggleStarred,
  toggleCompletion,
} from '@/lib/redux/slices/taskList';
// Types
import type { Task as TaskType } from '@/types/task';

export default function TaskItem({ task }: { task: TaskType }) {
  const dispatch = useAppDispatch();

  return (
    <li className='grid grid-cols-[2fr_100px_50px] place-content-center place-items-center gap-6'>
      <span
        className={cn(
          'place-self-start',
          task.complete && 'text-neutral-400 line-through',
          task.starred && 'text-orange-600 dark:text-yellow-400',
        )}
      >
        {task.name}
      </span>
      <div>
        <TaskItemButton text='Star task' handleClick={() => dispatch(toggleStarred(task))}>
          {task.starred ? <StarFilledIcon /> : <StarIcon />}
        </TaskItemButton>
        <TaskItemButton text='Mark task as complete' handleClick={() => dispatch(toggleCompletion(task))}>
          {task.complete ? <Cross1Icon /> : <CheckIcon />}
        </TaskItemButton>
      </div>
      <TaskItemButton
        text='Delete task'
        handleClick={() => dispatch(removeTask(task))}
      >
        <TrashIcon className='transition-colors group-hover:text-red-600' />
      </TaskItemButton>
    </li>
  );
}
