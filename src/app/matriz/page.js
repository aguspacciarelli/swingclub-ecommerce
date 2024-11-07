'use client'

import React, { useState } from 'react'
import styles from '@/app/components/Songs/Matriz.module.css'
// import { useAppContext } from "@/app/contexts/AppContext";

const songs = [
  "Calm Melody", "Quiet Whisper", "Joyful Tune", "Excited Rhythm",
  "Sad Ballad", "Melancholy Chord", "Happy Song", "Cheerful Beat",
]

export default function EmotionSongGrid() {
  // const { handleClick } = useAppContext();
  const [selectedSong, setSelectedSong] = useState(null) // Ninguna canción está seleccionada

  const handleClick = (x, y) => {
    const index = (Math.abs(x) + Math.abs(y)) % songs.length
    setSelectedSong(songs[index])
  } // Se llama a esta función cuando una punto de la cuadrante es clickeado


  const gridPoints = Array.from({ length: 9 }, (_, i) => 4 - i) 
  //Array.from = crea un array a partir de cualquier objeto con propiedad length. Tambien convierte cualquier objeto iterable en un array
  //El primer argumento es un objeto con propiedad length que crea un array con 9 elementos
  //El segundo argumento es una funcion. El _ es un parametro que no vamos a usar
  //El cuerpo de la funcion calcula el valor para cada elemento en el nuevo array de 4 a -4

  return (
    <div className={styles["matriz-general"]}>
      <h1 style={{ marginBottom: '20px' }}>Matriz Emociones</h1>
      <div style={{ position: 'relative', width: '50%', paddingBottom: '40%', border: '1px solid black', left: '250px' }}>
        {gridPoints.map(y => (
          gridPoints.map(x => (
            <button
              key={`${x}-${y}`}
              style={{
                position: 'absolute',
                left: `${(x + 4) * 11.11}%`,
                top: `${(4 - y) * 11.11}%`,
                width: '30px',
                height: '30px',
                backgroundColor: x === 0 || y === 0 ? 'black' : 'gray',
                borderColor: x === 0 || y === 0 ? 'black' : 'white',
              }}
              onClick={() => handleClick(x, y)}
            />
          ))
        ))}
        <div style={{ position: 'absolute', top: '-60px', left: '47%', transform: 'translateX(-50%)' }}>Feliz</div>
        <div style={{ position: 'absolute', bottom: '-40px', left: '47%', transform: 'translateX(-50%)' }}>Triste</div>
        <div style={{ position: 'absolute', left: '-102px', top: '47%', transform: 'translateY(-50%)' }}>Calmo</div>
        <div style={{ position: 'absolute', right: '-60px', top: '47%', transform: 'translateY(-50%)' }}>Efusivo</div>
      </div>
      <p style={{ marginTop: '20px' }}>
        {selectedSong ? `Selected Song: ${selectedSong}` : 'Click on a point to select a song'}
      </p>
    </div>
  )
}