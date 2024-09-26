"use client";
import { useAppContext } from "@/app/contexts/AppContext";
import Image from "next/image";
import styles from "@/app/components/Cart/Cart.module.css";

const ProductsCheckout = () => {
  const { cart, cartTotal } = useAppContext();
  return (
    <div className={styles["cart"]}>
      <h2>Tu pedido</h2>
      <div className={styles["product-div"]}>
        <div className={styles["product"]}>
        <Image
          src={`/imgs/ella-fitzgerald-vinyl.webp`}
          alt='Great Women of Song: Ella Fitzgerald LP'
          width={100}
          height={100}
        />
        <h3 className={styles["product-name"]}>
          1 x Great Women of Song: Ella Fitzgerald LP
        </h3>
        </div>
        <div className={styles["details"]}>
          <p className={styles["price"]}>$24.98</p>
          <Image
            src={`/delete.svg`}
            alt='Delete Icon'
            width={15}
            height={15}
          />
        </div>
      </div>
      <div className={styles["product-div"]}>
        <div className={styles["product"]}>
        <Image
          src={`/imgs/etta-james-vinyl.webp`}
          alt='At last!'
          width={100}
          height={100}
        />
        <h3 className={styles["product-name"]}>
          2 x At last!
        </h3>
        </div>
        <div className={styles["details"]}>
          <p className={styles["price"]}>$52.44</p>
          <Image
            src={`/delete.svg`}
            alt='Delete Icon'
            width={15}
            height={15}
          />
        </div>
      </div>
      <div className={styles["total-div"]}>
        <h3>Total: </h3>
        <p>$77.42</p>
      </div>
    </div>
  );
};

export default ProductsCheckout;

{
  /* <div>
        {cart.map((product) => (
          <div key={product.id}>
            <div>
              {" "}
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
              />
              <h3>{`${product.quantity} x ${product.name}`}</h3>
            </div>
            <p>${product.price * product.quantity}</p>
          </div>
        ))}
      </div>
      <p>Total: ${cartTotal()}</p> */
}
