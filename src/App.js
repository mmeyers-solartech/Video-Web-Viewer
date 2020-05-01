import React from 'react';
import './App.css';

import JsmpegPlayer from './components/JsmpegPlayer';

const videoOptions = {
  poster: 'https://cycjimmy.github.io/staticFiles/images/screenshot/big_buck_bunny_640x360.jpg'
};

const videoOverlayOptions = {autoplay: true};

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <JsmpegPlayer
          wrapperClassName="video-wrapper"
          videoUrl="ws://127.0.0.1:9999"
          options={videoOptions}
          overlayOptions={videoOverlayOptions}
        />
      </header>
    </div>
  );
}

export default App;
