import React from 'react';
import JsmpegPlayer from './JsmpegPlayer';
import '../App.css';

const videoOptions = {
  poster: 'https://cycjimmy.github.io/staticFiles/images/screenshot/big_buck_bunny_640x360.jpg'
};

const videoOverlayOptions = {autoplay: true};

const player = () => {
    return (
      <div>
        <header>
          <JsmpegPlayer
            wrapperClassName="video-wrapper"
            videoUrl="ws://10.0.0.218:9999"
            options={videoOptions}
            overlayOptions={videoOverlayOptions}
          />
        </header>
      </div>
    );
}

export default player;
