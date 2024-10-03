import React from 'react'
import styles from '@/app/components/Footer/Footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
        <div className={styles["icons"]}>
            <Image src='/logo-blanco.svg' alt='Logo' width={100} height={100}/>
            <ul className={styles["redes"]}>
              <li><Image src='/instagram.png' alt='Instagram' width={30} height={30}/></li>
              <li><Image src='/twitter.png' alt='Twitter' width={30} height={30}/></li>
              <li><Image src='/facebook.png' alt='Facebook' width={15} height={15}/></li>
            </ul>
        </div>
        <div className={styles["list"]}>
            <ul>
              <li>Contacto</li>
              <li>Soporte técnico</li>
              <li>Política de envíos y devoluciones</li>
              <li>Newsletter</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer