import Image from "next/image";
import AddToCart from "@/app/components/AddToCart";

const ProductSingle = ({ product }) => {
  const { image, name, price, artist, description, _id } = product;
  return (
    <section>
      <Image src={image} alt={name} />
      <div className={style["contenedor-info"]}>
        <div>
          <h1>{name}</h1>
          <h4>{artist}</h4>
          <h2>${price}</h2>
        </div>
        <div>
          {description}
          <AddToCart price={price} name={name} image={image} id={_id}/>
        </div>
      </div>
    </section>
  );
};

export default ProductSingle;
