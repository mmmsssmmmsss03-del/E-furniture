import React from 'react'
import { FaStar } from 'react-icons/fa'

function ProductRating({productId}:{productId:string}) {
    const Rating = 3.4;
    const Reviews = 54;
    const ReviewsText = `(${Reviews}) Reviews`
  return (
    <span className='flex items-center gap-1 mt-1 mb-4 text-md '>
        <FaStar className='w-3 h-3'/>
        {Rating} {ReviewsText}
    </span>
  )
}

export default ProductRating