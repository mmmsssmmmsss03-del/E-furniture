import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { links } from '@/utils/links'

function HeroTitle() {
  return (
    <div >
      <h1 className='max-w-2xl mt-0 text-4xl font-bold tracking-tight lg:text-7xl'>We Are Changing The Way People Shop</h1>
      <p className='mt-10 leading-8 text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eum sit vel ipsum minus, labore ex velit sunt inventore, odio quas quos. Doloribus, explicabo autem nisi itaque modi odio nam. lo</p>
      <Button className='mt-10 bg-blue-500' size={'lg'} asChild>
        <Link href={links.PRODUCTS.href}>
          Our Products
        </Link>
      </Button>
    </div>
  )
}

export default HeroTitle