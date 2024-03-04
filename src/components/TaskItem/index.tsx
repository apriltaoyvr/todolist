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
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button
                aria-label='Star task'
                variant='ghost'
                onClick={() => dispatch(toggleStarred(task))}
              >
                {task.starred ? <StarFilledIcon /> : <StarIcon />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Star task</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button
                aria-label='Mark task as complete'
                variant='ghost'
                onClick={() => dispatch(toggleCompletion(task))}
              >
                {task.complete ? <Cross1Icon /> : <CheckIcon />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Mark as complete</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Button
        aria-label='Delete task'
        variant='ghost'
        className={'group'}
        onClick={() => dispatch(removeTask(task))}
      >
        <TrashIcon className='transition-colors group-hover:text-red-600' />
      </Button>
    </li>
  );
}
