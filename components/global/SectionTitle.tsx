import React from 'react'
import { Separator } from '../ui/separator'

function SectionTitle({text}:{text:string}) {
  return (
    <>
    <h2 className='text-3xl font-medium mb-5 capitalize tracking-wider'>{text}</h2>
    <Separator/>

    </>
  )
}

export default SectionTitle