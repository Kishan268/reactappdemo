import logo from './logo.svg';

import { Player } from 'video-react';

function App() {
  return (
    <div className="App">

         <video  loop muted autoPlay  
          style={{height:'100%', width:'100%'}}
         >
          <source  src='https://evergrowcoin.com/wp-content/uploads/2022/04/coming-soon-lunasky.mp4' type="video/mp4" />
        </video>
    </div>
  );
}

export default App;
