
type NavLinksProps = {
    href: string,
    name: string
}



export const NavLinks:NavLinksProps[] = [
    {href:'/',name:'Home'},
    {href:'/about',name:'About'},
    {href:'/products',name:'Products'},
    {href:'/favorites',name:'Favorites'},
    {href:'/reviews',name:'Reviews'},
    {href:'/cart',name:'Cart'},
    {href:'/orders',name:'Orders'},
]



export const links = {
    HOME: {href:'/',name:'Home'},
    CART: {href:'/cart',name:'Cart'},
    PRODUCTS: {href:'/products',name:'Products'},
} as const