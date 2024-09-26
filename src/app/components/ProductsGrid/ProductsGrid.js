import Inner from "@/app/components/Inner";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import { getAllProducts, getAllProductsDB } from "@/app/actions";
import styles from "@/app/components/ProductsGrid/ProductsGrid.module.css";

export default function ProductsGrid() {
  // const response = await getAllProductsDB()
  // console.log(response.products)
  return (
    <section className={styles["section"]}>
      <div className={styles["div-textos"]}>
        <h2 className={styles["h2"]}>Productos seleccionados</h2>
        <p>
          Conocé y aprovechá las ofertas de nuestros productos seleccionados
          especialmente para vos
        </p>
      </div>
      <ProductCard />
    </section>
  );
}

{
  /* <Inner>
        <h2 className={styles["h2"]}>Nuestros productos</h2>
        <div className='grid grid-cols-12'>
          {response.products && response.products.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </Inner> */
}
