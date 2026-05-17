


export const FormatCurrency = (amount:number)=>{
    const value = amount
    return new Intl.NumberFormat('en-US',{
        style: 'currency', 
        currency:'USD'
    }).format(value)
}