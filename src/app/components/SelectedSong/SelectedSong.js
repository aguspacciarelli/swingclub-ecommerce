import React from 'react'
import styles from '@/app/components/SelectedSong/SelectedSong.module.css'

const SelectedSong = ({selectedSong}) => {
  return (
    <div className={styles["cancion"]}>
            <p>Título: {selectedSong.title}</p>
            <p>Artista: {selectedSong.artist}</p>
            <p>Álbum: {selectedSong.album}</p>
            <p>Feliz: {selectedSong.f}</p>
            <p>Triste: {selectedSong.t}</p>
            <p>Calmo: {selectedSong.c}</p>
            <p>Efusivo: {selectedSong.e}</p>
    </div>
  )
}

export default SelectedSong