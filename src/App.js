import logo from './logo.svg';
import lunasky from './coomingsoonlunasky.mp4'

import { Player } from 'video-react';

function App() {
  return (
    <div className="App">

         <video  loop muted autoPlay  
          style={{height:'100%', width:'100%'}}
         >
          <source  src='https://dashboard.hithere.co.nz/lunasky.mp4' type="video/mp4" />
        </video>
    </div>
  );
}

export default App;
