import { links } from '@/utils/links'
import Link from 'next/link'
import React from 'react'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import FavoriteToggleButton from './FavoriteToggleButton'
import { Product } from '@prisma/client'
import { FormatCurrency } from '@/utils/format'

function ProductsList({products}:{products:Product[]}) {
  return (
    <section className='mt-12 grid gap-y-8 '>
      {/* Card */}
      {products.map((product)=>{
        const {name,image,description,price} = product
        const ProductId = product.id
        const PriceFormat = FormatCurrency(price)

        return (
          <div className='relative group ' key={product.id}>
              <Link href={`${links.PRODUCTS.href}/${ProductId}`}>
                <Card className='transform group-hover:shadow-xl transition-shadow duration-500'>
                  <CardContent className='p-8 grid gap-y-8 md:grid-cols-3'>
                          <div className='relative h-64 md:h-48 md:w-48'>
                            <Image 
                            src={image} 
                            alt='img'
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            priority
                            className='object-cover rounded-lg'
                            />
                          </div>

                          <div>
                            <h2 className='text-2xl'>{name}</h2>
                            <p className='mt-4 max-w-sm text-muted-foreground'>{description}</p>
                          </div>
                          
                          <div className='flex justify-between md:flex-col text-2xl text-center font-semibold capitalize text-blue-200'>
                            {PriceFormat}

                          <div>
                              <FavoriteToggleButton ProductId={ProductId}/>
                          </div>
                          </div>
                  </CardContent>
                </Card>
              </Link>
          </div>
        )
      })}
    </section>
  )
}

export default ProductsList