import React, { Suspense } from 'react'
import HeroTitle from './HeroTitle'
import Herocarousel from './HeroCarousel'
import { LoadingHero } from '../global/LoadingContainer'

function Hero() {
  return (

    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center '>
      <HeroTitle/>
   

      <Suspense fallback={<LoadingHero/>}>
        <Herocarousel/> 
      </Suspense>     
    </section>
  


  
  )
}

export default Hero