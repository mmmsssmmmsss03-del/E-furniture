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
import { LuAlignLeft } from 'react-icons/lu'
import { NavLinks } from '@/utils/links'
import Link from 'next/link'


function DropDownMenu() {
  return (
     <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">
      <LuAlignLeft className='w-6 h-6'/>
    </Button>
  </DropdownMenuTrigger>

  <DropdownMenuContent className='w-40' sideOffset={10} align='start'>
    {NavLinks.map((link)=>(
        <DropdownMenuItem key={link.name}>
          <Link href={link.href}>
            {link.name}
          </Link>
        </DropdownMenuItem>
    ))}
  </DropdownMenuContent>
</DropdownMenu>
  )
}

export default DropDownMenu