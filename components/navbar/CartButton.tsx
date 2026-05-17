import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { links } from '@/utils/links'
import { LuShoppingCart } from 'react-icons/lu'

function CartButton() {
  const CartItems = 9
  return (
    <Button 
    variant={'outline'}
    asChild
    >
      <Link href={links.CART.href} 
      className='relative'>
        <LuShoppingCart/>
        <span className=' absolute w-5 h-5 bg-blue-400 flex justify-center items-center rounded-full  -top-2 -right-2 text-white text-xs '>{CartItems}</span>
      </Link>
    </Button>
  )
}

export default CartButton