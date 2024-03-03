'use client'
import { Button } from "@/components/ui"
import { cn } from "@/lib/utils";
import { TrashIcon, CheckIcon, Cross1Icon, StarIcon, StarFilledIcon } from "@radix-ui/react-icons"
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { removeTask, toggleStarred, toggleCompletion } from "@/lib/redux/slices/taskList";
import type { Task as TaskType } from "@/types/task";

export default function TaskItem({ task }: { task: TaskType }) {
  const dispatch = useAppDispatch();

  return (
    <li className='grid grid-cols-[2fr_100px_50px] gap-6 place-content-center place-items-center'>
      <span className={cn('place-self-start', task.complete && 'text-neutral-400 line-through', task.starred && 'text-orange-500 dark:text-yellow-400')}>{task.name}</span>
      <div>
        <Button
          variant='ghost'
          onClick={() => dispatch(toggleStarred(task))}
        >
          {task.starred ? <StarFilledIcon /> : <StarIcon />}
        </Button>
        <Button
          variant='ghost'
          onClick={() => dispatch(toggleCompletion(task))}
        >
          {task.complete ? <Cross1Icon /> : <CheckIcon />}
        </Button>
      </div>
      <Button
        variant='ghost'
        className={'group'}
        onClick={() => dispatch(removeTask(task))}
      >

        <TrashIcon className='group-hover:text-red-600 transition-colors ' />
      </Button>
    </li>
  )
}