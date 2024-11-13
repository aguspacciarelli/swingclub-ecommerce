"use client";

import React, { useState } from "react";
import styles from "@/app/components/Songs/Matriz.module.css";

export default function Songs({ songs }) {
  const [selectedSong, setSelectedSong] = useState(null);

  const handleClick = (f,t,c,e) => {
    setSelectedSong({f,t,c,e})
  };

  return (
    <div className={styles["container"]}>
      {songs && songs.map((song, index) => (
            <div key={song._id} className={styles["puntos"]} onClick={() => handleClick(song.f, song.t, song.c, song.e)}></div>
          ))}
      <div>
        <h2 className={styles["titulo"]}>Canción para vos</h2>
        {selectedSong ? (
          <div className={styles["cancion"]}>
            <p>Feliz: {selectedSong.f}</p>
            <p>Triste: {selectedSong.t}</p>
            <p>Calmo: {selectedSong.c}</p>
            <p>Efusivo: {selectedSong.e}</p>
          </div>
        ) : (
          <p className={styles["vacio"]}>
            Clickeá un punto y descubrí una canción para vos
          </p>
        )}
      </div>
    </div>
  );
}
