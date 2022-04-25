import logo from './logo.svg';
import lunasky from './coomingsoonlunasky.mp4'
// import './App.css';
// import "video-react/dist/video-react.css";

import { Player } from 'video-react';

function App() {
  return (
    <div className="App">
        {/* <Player
          playsInline
          poster="/assets/poster.png"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        /> */}
         <video  loop muted autoPlay  
          style={{height:'100%', width:'100%'}}
         >
          <source  src={lunasky} type="video/mp4"/>
        </video>
    </div>
  );
}

export default App;
