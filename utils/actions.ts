'use server'

import db from '@/utils/db'
import { redirect } from 'next/navigation'

export async function FetchAllProducts({search}:{search:string}){
    const Products =await db.product.findMany({

        where: {
            OR :[
                {
                    name: {contains:search, mode:'insensitive'}
                }
            ]
        },



        orderBy: {
            CreatedAt:'desc'   // ordered by time we add new product
        }
    })
    return Products
}

export async function FetchFeaturedProducts(){
    const Products = await db.product.findMany({
        where: {
            featued:true
        }
    })
    return Products
}

export async function FetchSingleProduct(productId: string) {

  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });


  if (!product) {
    redirect('/products');
  }

  return product;
}
