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
    <div className="container" style={{ marginTop: '15vh' }}>
      <div className="audioContainer">
          <img src={state.item.image} className="coverContainer"></img>

        <h1>{state.item.nome}</h1>
        <AudioPlayer
          className="audioPlayer"
          src={
            state.item.audio_description_pt
          }
          onPlay={(e) => console.log("onPlay")}
        />
      </div>

      <div className="audioInfo">
        <h3>{state.item.name}</h3>
        <h3>{state.item.author}</h3>
      </div>

    </div>
  );
}
