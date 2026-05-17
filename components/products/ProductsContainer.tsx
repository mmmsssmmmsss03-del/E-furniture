import { FetchAllProducts } from '@/utils/actions'
import React from 'react'
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import Link from 'next/link';
import { LuLayoutGrid, LuList } from 'react-icons/lu';
import { links } from '@/utils/links';
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';

async function ProductsContainer({layout,search}:{layout:string,search:string}) {

    const TotalProdcts = await FetchAllProducts({search});
    const ProductsLength = TotalProdcts.length
    const SearchTerm = search ? `&search=${search}` : ''
  return (
    <>
    {/* Header */}
    <section>
        <div className='flex justify-between items-center'>
            <h4>
                {ProductsLength} product{ProductsLength > 1 && 's'}
            </h4>

            <div className='flex gap-3'>
                <Button asChild size={'icon'} variant={layout === 'grid'? 'default' : 'outline'}>
                    <Link href={`${links.PRODUCTS.href}?layout=grid${SearchTerm}`}>

                    <LuLayoutGrid/>
                    </Link>
                </Button>
                <Button asChild size={'icon'} variant={layout  === 'list' ? 'default' : 'outline'}>
                    <Link href={`${links.PRODUCTS.href}?layout=list${SearchTerm}`}>
                    <LuList/>
                    </Link>
                </Button>

            </div>
        </div>
        <Separator className='mt-4'/>

    </section>
    
    {/* Products */}
    <section>
        {
            ProductsLength === 0 ? (
                <h5>Sorry , No Products Matched Your Search</h5>
            ) : layout === 'grid' ? (
                <ProductsGrid products={TotalProdcts}/>
            )  : (
                <ProductsList products={TotalProdcts}/>
            )
        }
    </section>
    
    
    </>
  )
}

export default ProductsContainer