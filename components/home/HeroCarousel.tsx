import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import db from '@/utils/db'

async function HeroCarousel() {
  const hero =await db.hero.findMany();

  return (
    <div className='lg:block hidden'>
      <Carousel>
        <CarouselContent>
          {hero.map((item)=>(

            <CarouselItem key={item.id}>
            <div className='border-2 border-gray-500 p-2 rounded-lg'>
            <Image
            src={item.image}
            alt='hero_image'
            width={400}
            height={400}
            priority
            className='object-cover w-full h-120  rounded-sm'
            />              
            </div>


            <div></div>

          </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>      
    </div>
    
  )
}

export default HeroCarousel