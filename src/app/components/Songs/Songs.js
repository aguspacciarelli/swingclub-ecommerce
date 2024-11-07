"use client";

import React, { useState } from "react";

export default function Songs({songs}) {
  const [selectedSong, setSelectedSong] = useState(null);

  const handleClick = (index) => {
    setSelectedSong(songs[index]);
  };

  const getQuadrant = (index) => {
    const row = Math.floor(index / 8);
    const col = index % 8;
    if (row < 4) {
      return col < 4 ? 0 : 1;
    } else {
      return col < 4 ? 2 : 3;
    }
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      textAlign: 'center',
    },
    grid: {
      position: 'relative',
      width: '400px',
      height: '400px',
      margin: '0 auto',
    },
    button: {
      position: 'absolute',
      width: '35px',
      height: '35px',
      backgroundColor: 'black',
      border: '1px solid white',
      padding: 0,
      cursor: 'pointer',
    },
    axisLabel: {
      position: 'absolute',
      fontSize: '14px',
    },
    selectedSong: {
      marginTop: '20px',
      textAlign: 'center',
    },
    songTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    songInfo: {
      fontSize: '16px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Descubrí nueva música</h1>
      <div style={styles.grid}>
        {songs.map((song, index) => {
          const x = (index % 8) - 3.5;
          const y = 3.5 - Math.floor(index / 8);
          return (
            <button
              key={index}
              style={{
                ...styles.button,
                left: `${(x + 4) * 11.11}%`,
                top: `${(4 - y) * 11.11}%`,
                border:'1px solid white',
                // marginLeft: x === -1 || -4 < y < 4 ? '1em' : '0'
              }}
              onClick={() => handleClick(index)}
            />
          );
        })}
        <div style={{...styles.axisLabel, top: '-30px', left: '50%', transform: 'translateX(-50%)'}}>
          Feliz
        </div>
        <div style={{...styles.axisLabel, bottom: '-30px', left: '50%', transform: 'translateX(-50%)'}}>
          Triste
        </div>
        <div style={{...styles.axisLabel, left: '-50px', top: '50%', transform: 'translateY(-50%)'}}>
          Calmo
        </div>
        <div style={{...styles.axisLabel, right: '-50px', top: '50%', transform: 'translateY(-50%)'}}>
          Efusivo
        </div>
      </div>
      <div style={styles.selectedSong}>
        <h2 style={styles.songTitle}>Canción para vos</h2>
        <p style={styles.songInfo}>
          {selectedSong
            ? `${selectedSong.title} by ${selectedSong.artist} (${selectedSong.album})`
            : "Clickeá un punto y te recomendamos una canción"}
        </p>
      </div>
    </div>
  );
}