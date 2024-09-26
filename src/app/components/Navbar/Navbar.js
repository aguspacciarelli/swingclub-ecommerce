"use client";
import { useAppContext } from "@/app/contexts/AppContext";
import Link from "next/link";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import style from "@/app/components/Navbar/Navbar.module.css";

export default function Navbar() {
  const { cartLength } = useAppContext();
  return (
    <div className={style["div"]}>
      <Link href={`/`}>
        <Image src={`/logo.svg`} width={70} height={70} alt='Logo' />
      </Link>
      <nav>
        <ul className='flex justify-center items-center gap-5'>
          <li className={style["li"]}>
            <Link href={`/checkout`}>Productos</Link>
          </li>
          <li className={style["li"]}>
            <Link href={`/checkout`}>Géneros</Link>
          </li>
          <li className={style["li"]}>
            <Link href={`/checkout`}>Años</Link>
          </li>
          <li className={style["li"]}>
            <Link href={`/checkout`}>Formatos</Link>
          </li>
          <li className={style["li"]}>
            <Link href={`/checkout`}>Accesorios</Link>
          </li>
          <li className={style["li"]}>
            <Link href={`/checkout`}>Artículos</Link>
          </li>
        </ul>
      </nav>

      <Link href={`/checkout`}>
        <div className='relative'>
          <Image
            src={`/swingclub-carrito.svg`}
            width={30}
            height={30}
            alt='Cart'
          />
          {cartLength > 0 && (
            <span className=' absolute top-5 left-5 flex items-center justify-center bg-black text-white rounded-full w-2 h-4 p-4 text-sm'>
              {" "}
              {cartLength}
            </span>
          )}
        </div>
        {/* <Image
          src={`/swingclub-usuario.svg`}
          width={30}
          height={30}
          alt='User'
        /> */}
      </Link>
    </div>
  );
}
