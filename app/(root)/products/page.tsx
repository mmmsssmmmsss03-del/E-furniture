import ProductsContainer from '@/components/products/ProductsContainer'



type SearchParamsProps = {
  searchParams:{
    layout?:string,
    search?:string
  }
}

async function ProductsPage({searchParams}:SearchParamsProps) {

  const  {layout = 'grid'} = await searchParams;
  const {search = ''} = await searchParams;



  return (
    <ProductsContainer layout={layout} search={search}/>
  )
}

export default ProductsPage