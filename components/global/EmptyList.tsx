import { cn } from '@/lib/utils'
import React from 'react'

type EmptyListProps = {
    text: string,
    className?: string
}


function EmptyList({text,className}:EmptyListProps) {
  return (
    <h2 className={cn('text-xl',className)}>{text}</h2>
  )
}

export default EmptyList