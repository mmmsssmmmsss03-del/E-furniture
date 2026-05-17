import React from 'react'
import { Button } from '../ui/button'
import { VscCode } from 'react-icons/vsc'
import Link from 'next/link'
import { links } from '@/utils/links'

function Logo() {
  return (
    <Button size={'icon'}
    asChild>
      <Link href={links.HOME.href}>
        <VscCode/>
      </Link>
    </Button>
  )
}

export default Logo