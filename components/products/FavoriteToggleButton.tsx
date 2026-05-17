import React from 'react'
import { Button } from '../ui/button'
import { FaHeart } from 'react-icons/fa'

function FavoriteToggleButton({ProductId}:{ProductId:string}) {
  return (
    <Button size={'icon'} variant={'outline'} className='p-2 cursor-pointer' >
        <FaHeart/>
    </Button>
  )
}

export default FavoriteToggleButton