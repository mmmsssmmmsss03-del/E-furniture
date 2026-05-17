import React from 'react'
import { Button } from '../ui/button'

function AddtoCart({productId}:{productId:string}) {
  return (
    <Button className='mt-6 capitalize' size={'lg'}>
      Add To Cart
    </Button>
  )
}

export default AddtoCart