"use client";

import React, { useState } from "react";
import styles from "@/app/components/Songs/Matriz.module.css";

export default function Songs({ songs }) {
  const [selectedSong, setSelectedSong] = useState(null); //No hay canción seleccionada

  const handleClick = (index) => {
    setSelectedSong(songs[index]);
  }; //Cambia el estado del useState cuando se clickea sobre un button y la info segun el index de ese button se guarda en selectedSong

  const getQuadrant = (index) => {
    const row = Math.floor(index / 8); //Calcula en qué fila está el elemento, divide el index / 8, lo redondea para abajo y eso indica en qué fila está (empezando desde el valor 0)
    const col = index % 8; // Lo mismo con las columnas.
    if (row < 4) { //Verfiica la posición en la cuadrícula para determinar el cuadrante
      return col < 4 ? 0 : 1;
    } else {
      return col < 4 ? 2 : 3;
    }
  };

  const style = {
    button: {
      position: "absolute",
      width: "35px",
      height: "35px",
      backgroundColor: "black",
      border: "1px solid white",
      padding: 0,
      cursor: "pointer",
    },
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["ejes"]}>
        {songs.map((song, index) => {
          const x = (index % 8) - 3.5; //El resto de index / 8, lo que da un numero entre 0 y 7. Cuando restamos 3.5 se centra la cuadrícula para que x este entre -3.5 y 3.5 y que las posiciones x se distribuyan uniformemente entre esos nums.
          const y = 3.5 - Math.floor(index / 8); // Divide index / 8 y redondea haacia abajo (0-7). El 3.5 es para invertir las posiciones para que la cuadrícula esté ordenada de arriba hacia abajo y se centre en el origen (0,0). Esto posiciona y entre -3.5 y 3.5
          return (
            <button
              key={index}
              style={{
                ...style.button,
                left: `${(x + 4) * 11.11}%`, //Desplaza x para que este entre 0 y 8 y los distribuye los botones a lo largo de la cuadrícula horizontalmente
                top: `${(4 - y) * 11.11}%` //Igual pero verticalmente
              }}
              onClick={() => handleClick(index)}
            />
          );
        })}
        <div className={styles["feliz"]}>Feliz</div>
        <div className={styles["triste"]}>Triste</div>
        <div className={styles["calmo"]}>Calmo</div>
        <div className={styles["efusivo"]}>Efusivo</div>
      </div>
      <div>
        <h2 className={styles["titulo"]}>Canción para vos</h2>
        {selectedSong ? (
          <div className={styles["cancion"]}>
            <h4>{selectedSong.title}</h4>
            <p className={styles["artista"]}>Artista: {selectedSong.artist}</p>
            <p className={styles["album"]}>Álbum: {selectedSong.album}</p>
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
