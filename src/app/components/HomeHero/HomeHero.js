import Image from 'next/image';
import styles from '@/app/components/HomeHero/HomeHero.module.css'

const HomeHero = () => {
  return (
   <section className={styles["hero"]}>
     <div className={styles["hero-text"]}>
       <h1>
         DONDE LA <br />
         MÚSICA <br />
         NUNCA <br />
         MUERE
       </h1>
       <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
         minim veniam, quis nostrud exercitation ullamco laboris nisi ut
         aliquip ex ea commodo consequat.
       </p>
       <button>Boton con algo</button>
     </div>
     <div className={["hero-image"]}>
     {/* <Image src='/imgs/color-stripes.png'
       alt='Color Stripes'
       width={1000}
       height={1000}
       className={styles["color-stripes"]}/> */}
       <Image src='/imgs/img-hero.svg'
       alt='Trumpet Player'
       width={1000}
       height={1000}
       className={styles["img"]}/>
     </div>
   </section>
  );
};

export default HomeHero;
