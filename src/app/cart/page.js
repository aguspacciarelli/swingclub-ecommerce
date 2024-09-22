import Inner from '@/app/components/Inner'
import ProductsCheckout from '@/app/components/Cart/ProductsCheckout'
import FormCheckout from '@/app/components/Cart/FormCheckout'

const Cart = () => {
  return (
   <section className='h-screen'>
    <h1 className='text-3xl font-bold'>Cart</h1>
    <Inner>
      <div className='grid grid-cols-12'>
        <div className='col-span-12 lg:col-span-6'><FormCheckout/></div>
        <div className='col-span-12 lg:col-span-6'>
          <ProductsCheckout />
        </div>
      </div>
    </Inner>
   </section>
  )
}

export default Cart