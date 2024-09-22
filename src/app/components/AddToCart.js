"use client";
import { useAppContext } from "@/app/contexts/AppContext";

const AddToCart = ({ name, price, id, image }) => {
  const { handleAddToCart } = useAppContext();

  return (
    <>
      <button onClick={() => handleAddToCart(name, price, image, id, 1)}>
        Agregar al carrito
      </button>
    </>
  );
};

export default AddToCart;
