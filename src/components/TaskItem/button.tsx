'use client'
import { Button } from '@/components/ui';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { type MouseEventHandler } from 'react';

type Props = {
  text: string;
  children: React.ReactNode
  handleClick: MouseEventHandler<HTMLButtonElement>
}

export const TaskItemButton = ({ text, handleClick, children }: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild suppressHydrationWarning>
          <Button
            variant='ghost'
            className={'group'}
            aria-label={text}
            onClick={handleClick}
          >
            {/* Icon is passed as children */}
            {children}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}