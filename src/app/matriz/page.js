import React from 'react'
import styles from '@/app/components/Songs/Matriz.module.css'
import Songs from '@/app/components/Songs/Songs'
import { getAllSongsDB } from "@/app/actions";


export default async function EmotionSongGrid() {
  const response = await getAllSongsDB()
  console.log('Respuesta', response)
  return (
    <div className={styles["matriz-general"]}>
      <h1 className={styles["titulo"]}>Descubrí nueva música</h1>
      <p className={styles["descripcion"]}>Conectá con tus emociones y descubrí nueva música, artistas y productos. Contanos cómo te sentís y nosotros te recomendamos algo.</p>
      <Songs songs={response.songs}/>
    </div>
  )
}