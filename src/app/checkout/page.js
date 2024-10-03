import ProductsCheckout from "@/app/components/Cart/ProductsCheckout";
import FormCheckout from "@/app/components/Cart/FormCheckout";
import styles from "@/app/checkout/checkout.module.css";

const Cart = () => {
  return (
    <section className={styles["checkout-section"]}>
      <h1>Checkout</h1>
      <div className={styles["inner"]}>
        <div className='grid grid-cols-12'>
          <div className='col-span-12 lg:col-span-7'>
            <FormCheckout />
          </div>
          <div className='col-span-12 lg:col-span-4'>
            <ProductsCheckout />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
