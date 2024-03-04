'use client';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import {
  TrashIcon,
  CheckIcon,
  Cross1Icon,
  StarIcon,
  StarFilledIcon,
} from '@radix-ui/react-icons';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import {
  removeTask,
  toggleStarred,
  toggleCompletion,
} from '@/lib/redux/slices/taskList';
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
        <Button
          aria-label='Star task'
          variant='ghost'
          onClick={() => dispatch(toggleStarred(task))}
        >
          {task.starred ? <StarFilledIcon /> : <StarIcon />}
        </Button>
        <Button
          aria-label='Mark task as complete'
          variant='ghost'
          onClick={() => dispatch(toggleCompletion(task))}
        >
          {task.complete ? <Cross1Icon /> : <CheckIcon />}
        </Button>
      </div>
      <Button
        aria-label='Delete task'
        variant='ghost'
        className={'group'}
        onClick={() => dispatch(removeTask(task))}
      >
        <TrashIcon className='transition-colors group-hover:text-red-600 ' />
      </Button>
    </li>
  );
}
