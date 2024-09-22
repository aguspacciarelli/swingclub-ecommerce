"use client";
import { useAppContext } from "@/app/contexts/AppContext";
import Image from "next/image";

const ProductsCheckout = () => {
  const { cart, cartTotal } = useAppContext();
  return (
    <div>
      <div>
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
      <p>Total: ${cartTotal()}</p>
    </div>
  );
};

export default ProductsCheckout;
