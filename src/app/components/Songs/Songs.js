"use client";

import React, { useState } from "react";
import styles from "@/app/components/Songs/Matriz.module.css";
import SelectedSong from "@/app/components/SelectedSong/SelectedSong";
import Grid from "../Grid";

export default function Songs({ songs }) {
  const [selectedSong, setSelectedSong] = useState(null);

  const handleClick = (title, artist, album, f,t,c,e) => {
    setSelectedSong({title, artist, album, f,t,c,e})
  };

  return (
    <div className={styles["container"]}>
      {songs && songs.map((song, index) => (
            // <div key={song._id} className={styles["puntos"]} onClick={() => handleClick(song.title, song.artist, song.album, song.f, song.t, song.c, song.e)}></div>
            <Grid key={song._id} songs={songs}/>
          ))}
      <div>
        <h2 className={styles["titulo"]}>Canción para vos</h2>
        {selectedSong ? (
          <SelectedSong selectedSong={selectedSong}/>
        ) : (
          <p className={styles["vacio"]}>
            Clickeá un punto y descubrí una canción para vos
          </p>
        )}
      </div>
    </div>
  );
}
