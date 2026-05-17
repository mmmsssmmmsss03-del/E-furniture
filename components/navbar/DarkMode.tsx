'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"


function DarkMode() {
  const {setTheme} = useTheme()
  return (
    <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">
      <Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90'/>
      <Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 -rotate-90 transition-all dark:scale-100 dark:rotate-0"'/>
    </Button>
  </DropdownMenuTrigger>

  <DropdownMenuContent align='start'>
      <DropdownMenuItem onClick={()=>setTheme('light')}>Light</DropdownMenuItem>
      <DropdownMenuItem onClick={()=>setTheme('dark')}>Dark</DropdownMenuItem>
      <DropdownMenuItem onClick={()=>setTheme('system')}>System</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
  )
}

export default DarkMode