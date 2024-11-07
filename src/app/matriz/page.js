import React from 'react'
import styles from '@/app/components/Songs/Matriz.module.css'
import Songs from '@/app/components/Songs/Songs'
import { getAllSongsDB } from "@/app/actions";


export default async function EmotionSongGrid() {
  const response = await getAllSongsDB()
  console.log('Respuesta', response)
  return (
    <div className={styles["matriz-general"]}>
      <Songs songs={response.songs}/>
    </div>
  )
}