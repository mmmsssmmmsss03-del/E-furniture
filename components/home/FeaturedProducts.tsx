import React from 'react'
import ProductsGrid from '../products/ProductsGrid'
import SectionTitle from '../global/SectionTitle'
import { FetchFeaturedProducts } from '@/utils/actions'
import EmptyList from '../global/EmptyList'

async function FeaturedProducts() {
  const featued_p = await FetchFeaturedProducts()
  
  
  if(featued_p.length === 0) return <EmptyList text='No Products Add'/>
  
  return (
    <section className='mt-24'>
      <SectionTitle text='Featured Products'/>
      <ProductsGrid products={featued_p}/>
    </section>
  )
}

export default FeaturedProducts