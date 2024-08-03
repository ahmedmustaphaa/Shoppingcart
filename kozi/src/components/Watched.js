const CURRENCY_FORMATER=new Intl.NumberFormat(undefined,{
  currency:'USD',
  style:'currency'
})
export const NumberFormater=(Number)=>{
    return CURRENCY_FORMATER.format(Number)
}