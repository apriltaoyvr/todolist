'use client'
// UI
import { Input, Button } from '@/components/ui';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { PlusIcon } from '@radix-ui/react-icons';
// Hooks
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
// Reducers
import { editName } from '@/lib/redux/slices/task';
import { addTask } from '@/lib/redux/slices/taskList';
// Types
import type { RootState } from '@/lib/redux/store';
import type { Task } from '@/types/task';

// NOTE: The reducers from task and taskList serve different purposes
// task is used to edit the task name
// taskList is used to add the task to the list
// We compartmentalize the logic for future-proofing
export default function TaskAdder({ tasks }: { tasks: Task[] }) {
  const dispatch = useAppDispatch();
  const task = useAppSelector((state: RootState) => state.task);

  return (
    <>
      <Input
        className='max-w-[50vw]'
        placeholder='Add task'
        aria-label='Enter task name'
        onChange={(e) => dispatch(editName(e.target.value))}
        onKeyDown={(e) => e.key === 'Enter' && dispatch(addTask(task))}
      />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button
              id='submit'
              aria-label='Submit task'
              variant='outline'
              onClick={() => dispatch(addTask(task))}
              disabled={!task.name}
            >
              <PlusIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to todo list</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
