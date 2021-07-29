import "../styles/audio.css";
import "../styles/global.css";
import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "react-h5-audio-player/lib/styles.less";
import { Link, useLocation } from "react-router-dom";

export default function Player() {
  const { state } = useLocation();

  return (
    <div className="container">
      <div className="audioContainer">
        <div className="coverContainer"></div>

        <h1>{state.item.nome}</h1>
        <AudioPlayer
          className="audioPlayer"
          src={
            process.env.PUBLIC_URL + "/audios/" + `${state.item.key}` + ".mp3"
          }
          onPlay={(e) => console.log("onPlay")}
        />
      </div>
      
      <div className="audioInfo">
          <h3>Nome da Obra</h3>
          <h3>Nome do autor</h3>
          <p>O idioma da descrição deve mudar de acordo com a linguagem escolhida</p>
      </div>

    </div>
  );
}
