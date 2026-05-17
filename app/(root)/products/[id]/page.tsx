import FavoriteToggleButton from '@/components/products/FavoriteToggleButton';
import AddtoCart from '@/components/single-product/AddtoCart';
import BreadCrumbs from '@/components/single-product/BreadCrumbs';
import ProductRating from '@/components/single-product/ProductRating';
import { FetchSingleProduct } from '@/utils/actions'
import { FormatCurrency } from '@/utils/format';
import Image from 'next/image';
import React from 'react'

type Params ={
  id: string;
};

async function ProductId({params}:{params:Params}) {
  const {id} =await params  
  const product = await FetchSingleProduct(id);
  const DollarAmount = FormatCurrency(product.price)



  return (
    <section>
      <BreadCrumbs name={product.name}/>
      
      <section className='grid lg:grid-cols-2 lg:gap-x-12 gap-y-6 mt-6'>

        {/* image */}
        <div className="relative h-full">
          <Image
          src={product.image}
          alt={product.name}
          fill
          priority
          className='object-cover w-full rounded-md'
          />
        </div>

        {/* product info */}
        <div>
          <div className='flex gap-x-8 items-center mb-2'>
            <h2 className='capitalize text-3xl font-bold'>{product.name}</h2>
            <FavoriteToggleButton ProductId={product.id}/>
          </div>
          <ProductRating productId={product.id} />
          <h4 className='text-md p-2 mt-4 rounded-lg bg-muted inline-block'>{DollarAmount}</h4>
          <p className='mt-6 text-md leading-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum placeat repudiandae voluptatem. Necessitatibus obcaecati iste nemo laboriosam molestias voluptatibus tempora, eveniet tempore beatae consequatur aliquam, placeat temporibus! Perferendis, earum doloremque?</p>
          <AddtoCart productId={product.id}/>
        </div>
      </section>


    </section>
  )
}

export default ProductId
