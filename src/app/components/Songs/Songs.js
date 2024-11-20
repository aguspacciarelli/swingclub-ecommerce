"use client";

import React, { useState, useEffect } from "react";
import styles from "@/app/components/Songs/Matriz.module.css";
import SelectedSong from "@/app/components/SelectedSong/SelectedSong";

export default function Songs({ songs }) {
  const [selectedSong, setSelectedSong] = useState(null);
 const [contadorX, setContadorX] = useState(1)
  const [contadorY, setContadorY] = useState(1)

  useEffect(() => {
    if (contadorX === 8 && contadorY === 8) {
      console.log("Contadores finalizados")
      return
    }

    if (contadorX >= 8) {
      setContadorX(1)
      setContadorY((prevY) => prevY + 1)
    } else {
      setContadorX((prevX) => prevX + 1)
    }
  }, [contadorX, contadorY])

  return (
    <div className={styles["container"]}>

      <div>
        <h2 className={styles["titulo"]}>Canción para vos</h2>
        {selectedSong ? (
          <SelectedSong selectedSong={selectedSong} />
        ) : (
          <p className={styles["vacio"]}>
            Clickeá un punto y descubrí una canción para vos
          </p>
        )}
      </div>
    </div>
  );
}