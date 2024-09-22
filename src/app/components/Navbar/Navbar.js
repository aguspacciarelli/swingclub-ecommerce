'use client';
import { useAppContext } from '@/app/contexts/AppContext';
import Link from 'next/link';
import Image from 'next/image';
import { FaCartShopping } from 'react-icons/fa6';
import style from '@/app/components/Navbar/Navbar.module.css'

export default function Navbar() {
  const { cartLength } = useAppContext();
  return (
    <div className={style["div"]}>
      <Link href={`/`}>
        <Image src={`/imgs/logo.png`} width={100} height={100} alt='Logo' />
      </Link>
      <nav>
        <ul className='flex justify-center items-center gap-5'>
          <li className={style["li"]}>
            <Link href={`/`}>Géneros</Link>
          </li>
          <li className={style["li"]}>
            <Link href={`/cart`}>Años</Link>
          </li>
          <li className={style["li"]}>
            <Link href={`/cart`}>Formatos</Link>
          </li>
          <li className={style["li"]}>
            <Link href={`/cart`}>Destacados</Link>
          </li>
          <li className={style["li"]}>
            <Link href={`/cart`}>Accesorios</Link>
          </li>
        </ul>
      </nav>

      <Link href={`/cart`}>
        <div className='relative'>
          <FaCartShopping size={30} />
          {cartLength > 0 && (
            <span className=' absolute top-5 left-5 flex items-center justify-center bg-black text-white rounded-full w-2 h-4 p-4 text-sm'>
              {' '}
              {cartLength}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
}
