import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/components/ProductCard/ProductCard.module.css'

const ProductCard = ({ item }) => {
  return (
    <section className={styles["section"]}>
      
 <Image
        src={`/imgs/${item.image}`}
        alt={item.name}
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: '100%', height: 'auto' }}
      />
      <h3 className={styles["h3"]}>{item.name}</h3>
      <p className={styles["p"]}>{item.artist}</p>
      <Link href={`/product/${item._id}`} className={styles["button"]}>Ver detalles</Link>
    </section>
  );
};

export default ProductCard;
// <div className={styles["div"]}>
//         <Image
//         src={`/imgs/ella-fitzgerald-vinyl.webp`}
//         alt='Great Women of Song: Ella Fitzgerald LP'
//         width={200}
//         height={200}
//       />
//       <h3 className={styles["h3"]}>Great Women of Song: Ella Fitzgerald LP</h3>
//       <p className={styles["p"]}>Ella Fitzgerald</p>
//       <Link href='/' className={styles["button"]}>Ver detalles</Link>
//       </div>
//       <div className={styles["div"]}>
//         <Image
//         src={`/imgs/miles-davis-vinyl.webp`}
//         alt='Birth Of The Cool (Back To Black Vinyl Reissue Series) LP'
//         width={200}
//         height={200}
//       />
//       <h3 className={styles["h3"]}>Birth Of The Cool (Back To Black Vinyl Reissue Series) LP</h3>
//       <p className={styles["p"]}>Miles Davis</p>
//       <Link href='/' className={styles["button"]}>Ver detalles</Link>
//       </div>
//       <div className={styles["div"]}>
//         <Image
//         src={`/imgs/etta-james-vinyl.webp`}
//         alt='At last!'
//         width={200}
//         height={200}
//       />
//       <h3 className={styles["h3"]}>At last!</h3>
//       <p className={styles["p"]}>Etta James</p>
//       <Link href='/' className={styles["button"]}>Ver detalles</Link>
//       </div>
//       <div className={styles["div"]}>
//         <Image
//         src={`/imgs/nina-simone-vinyl.webp`}
//         alt='I Put A Spell On You'
//         width={200}
//         height={200}
//       />
//       <h3 className={styles["h3"]}>I Put A Spell On You</h3>
//       <p className={styles["p"]}>Nina Simone</p>
//       <Link href='/' className={styles["button"]}>Ver detalles</Link>
//       </div>
//       <div className={styles["div"]}>
//         <Image
//         src={`/imgs/aretha-franklin-vinyl.webp`}
//         alt="Aretha's Gold"
//         width={200}
//         height={200}
//       />
//       <h3 className={styles["h3"]}>{`Aretha's Gold`}</h3>
//       <p className={styles["p"]}>Aretha Franklin</p>
//       <Link href='/' className={styles["button"]}>Ver detalles</Link>
//       </div>
//       <div className={styles["div"]}>
//         <Image
//         src={`/imgs/brenda-lee-vinyl.webp`}
//         alt="Rockin' Around The Christmas Tree"
//         width={200}
//         height={200}
//       />
//       <h3 className={styles["h3"]}>{`Rockin' Around The Christmas Tree`}</h3>
//       <p className={styles["p"]}>Brenda Lee</p>
//       <Link href='/' className={styles["button"]}>Ver detalles</Link>
//       </div>
//       <div className={styles["div"]}>
//         <Image
//         src={`/imgs/louis-armstrong-vinyl.webp`}
//         alt='Louis in London: Vinyl LP'
//         width={200}
//         height={200}
//       />
//       <h3 className={styles["h3"]}>Louis in London: Vinyl LP</h3>
//       <p className={styles["p"]}>Louis Armstrong</p>
//       <Link href='/' className={styles["button"]}>Ver detalles</Link>
//       </div>
//       <div className={styles["div"]}>
//         <Image
//         src={`/imgs/dusty-springfield-vinyl.webp`}
//         alt='Dusty In Memphis'
//         width={200}
//         height={200}
//       />
//       <h3 className={styles["h3"]}>Dusty In Memphis</h3>
//       <p className={styles["p"]}>Dusty Springfield</p>
//       <Link href='/' className={styles["button"]}>Ver detalles</Link>
//       </div>