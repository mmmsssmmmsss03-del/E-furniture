import { Product } from '@prisma/client'
import React from 'react'
import {
  Card,
  CardContent,

} from "@/components/ui/card"
import Link from 'next/link'
import Image from 'next/image'
import { links } from '@/utils/links'
import { FormatCurrency } from '@/utils/format'
import FavoriteToggleButton from './FavoriteToggleButton'
import { Helicopter } from 'lucide-react'

function ProductsGrid({products}:{products:Product[]}) {

 

  return (
    <section className='pt-12 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>


    {products.map((product)=>{

  const ProductId = product.id;
  const DollarAmount = FormatCurrency(product.price)
  const ProductName = product.name

return (
      <div className='group relative ' key={product.id}>
        <Link href={`${links.PRODUCTS.href}/${ProductId}`}>
          <Card className='  transform group-hover:shadow-xl transition-shadow duration-500 '>
            <CardContent>
              <div className='relative h-64 md:h-48 overflow-hidden'>
                <Image 
                src={product.image}
                alt='Card_img'
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
                className='object-cover rounded-md'
                />
              </div>


                <div className='mt-5 text-center'>
                  <h2 className='text-lg capitalize'>{ProductName}</h2>
                  <p className='mt-2 text-muted-foreground'>{DollarAmount}</p>
                </div>

            </CardContent>
          </Card>
        </Link>

        <div className='absolute top-7 right-7'>
          <FavoriteToggleButton ProductId={ProductId}/>
        </div>
      </div>
)
    })}



    </section>

  )
}

export default ProductsGrid