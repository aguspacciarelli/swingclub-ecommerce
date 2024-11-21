"use client";

import React, { useState, useEffect, useCallback } from "react";
import styles from "@/app/components/Songs/Matriz.module.css";
import SelectedSong from "@/app/components/SelectedSong/SelectedSong";

export default function Songs({ songs }) {
  const [selectedSong, setSelectedSong] = useState(null);
  const [contadorX, setContadorX] = useState(1);
  const [contadorY, setContadorY] = useState(1);
  const [isFinished, setIsFinished] = useState(false);
  const [songsGrid, setSongsGrid] = useState(
    Array(8)
      .fill(null)
      .map(() => Array(8).fill(null))
  );

  //Contadores de 1 a 8
  const updateCounters = useCallback(() => { 
    if (contadorX === 8 && contadorY === 8) {
      setIsFinished(true);
      console.log("Contadores finalizados");
      return;
    }
  
    //Condicion para frenar el contador
    if (contadorX >= 8) {
      setContadorX(1);
      setContadorY((prevY) => prevY + 1);
    } else {
      setContadorX((prevX) => prevX + 1);
    }
  }, [contadorX, contadorY]);


  const counterMap = useCallback( //Evita recreaciones innecesarias, memoriza una funcion que se recrea solo cuando la dependencia songs cambia
    (x, y) => {
      setSongsGrid((prevGrid) => {
        const newGrid = prevGrid.map((row) => [...row]); //Crea una copia de cada fila para que no se modifique el estado anterior
        const songIndex = (y - 1) * 8 + (x - 1);

        const songFiltered = songs.filter(
          (song) => song.x === x && song.y === y
        );

        if (songIndex < songs.length) {
          newGrid[y - 1][x - 1] = songFiltered; //Actualiza la posicion correspondiente en la nueva matriz con la cancion filtrada
        }
        return newGrid;
      });
    },
    [songs]
  );

  useEffect(() => {
    if (!isFinished) {
      const timer = setTimeout(() => {
        updateCounters();
        counterMap(contadorX, contadorY);
      }, 10);

      return () => clearTimeout(timer);
    }
  }, [contadorX, contadorY, isFinished, updateCounters, counterMap]);

  return (
    <div className={styles["container"]}>
      <div>
        <h2 className={styles["titulo"]}>Canción para vos</h2>
        <section className={styles["matriz"]}>
          {isFinished &&
            songsGrid.map((row, rowIndex) => (
              <div key={`row-${rowIndex}`} className={styles["row"]}>
                {row.map((song, colIndex) => (
                  <div
                    key={`col-${rowIndex}-${colIndex}`}
                    className={styles["puntos"]}
                    onClick={() => setSelectedSong(song?.[0] || null)}
                  >
                    {song && song.length > 0 ? "" : "•"}
                  </div>
                ))}
              </div>
            ))}
        </section>
        {selectedSong ? (
          <SelectedSong selectedSong={selectedSong} />
        ) : (
          <div>
            <p className={styles["vacio"]}>
              Clickeá un punto y descubrí una canción para vos
            </p>
          </div>
        )}
      </div>
    </div>
  );
}