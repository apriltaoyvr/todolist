import { Input, Button } from "@/components/ui"
import { PlusIcon } from "@radix-ui/react-icons"
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { editName } from "@/lib/redux/slices/task";
import { addTask } from "@/lib/redux/slices/taskList";
import type { RootState } from '@/lib/redux/store'
import type { Task } from "@/types/task";

export default function TaskAdder({ tasks }: { tasks: Task[] }) {
  const dispatch = useAppDispatch()
  const task = useAppSelector((state: RootState) => state.task)

  return (
    <>
      <Input className='max-w-[50vw]' placeholder='Add task' onChange={(e) => dispatch(editName(e.target.value))} />
      <Button variant='outline' onClick={() => dispatch(addTask(task))} disabled={!task.name}>
        <PlusIcon />
      </Button>
    </>
  )
}