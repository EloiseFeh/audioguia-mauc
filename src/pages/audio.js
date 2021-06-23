import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import 'react-h5-audio-player/lib/styles.less';
import { Link, useLocation } from 'react-router-dom';

export default function Player() {
  const { state } = useLocation();

  return (
    <div className="App">
      <header className="App-header">
        <h1>{ state.item.nome }</h1>
        <AudioPlayer
    src={ process.env.PUBLIC_URL + '/audios/' + `${state.item.key}` + '.mp3' }
    onPlay={e => console.log("onPlay")}
  />
        <Link
          className="App-link"
          to="/"
        >
          Voltar
        </Link>
        <a
          className="App-link"
          href="https://mauc.ufc.br/pt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site do Mauc
        </a>
      </header>
    </div>
  );
}

