'use client'


import React, { useState } from 'react'
import { Input } from '../ui/input'
import { useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import { links } from '@/utils/links'


function NavSearch() {

  const searchParams = useSearchParams() 
  const [search,setSearch] = useState(searchParams.get('search')?.toString() ||'')     //if you write in link, value will be change in input
  const {replace} = useRouter()
  const HandleSearch = useDebouncedCallback((value:string)=>{
      const params = new URLSearchParams(searchParams)
      if(value) {
        params.set('search',value)
      }
      else{
        params.delete('search')
      }

      replace(`${links.PRODUCTS.href}?${params}`)
  },300)
  return (
    <Input 
    type='search'
    placeholder='search...'
    className='max-w-xs dark:bg-muted'
    value={search}
    onChange={(e)=>{
      setSearch(e.target.value)
      HandleSearch(e.target.value)
    }}
    />
  )
}

export default NavSearch