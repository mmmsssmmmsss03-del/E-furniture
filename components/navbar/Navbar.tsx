import React, { Suspense } from 'react'
import Container from '../global/Container'
import Logo from './logo'
import NavSearch from './NavSearch'
import CartButton from './CartButton'
import DarkMode from './DarkMode'
import DropDownMenu from './DropDownMenu'


function Navbar() {
  return (
    <nav className='border-b'>
        <Container className='flex flex-wrap flex-col gap-4 sm:flex-row sm:justify-between sm:items-center py-8'>
            <Logo/>
            <Suspense>
              <NavSearch/>
            </Suspense>
           

            <div className='flex gap-4 items-center'>
                <CartButton/>
                <DarkMode/>
                <DropDownMenu/>
            </div>
        </Container>
    </nav>
  )
}

export default Navbar