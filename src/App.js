import ReactPlayer from 'react-player'
import './App.css'
function App() {
  return (
    <div className="App">
      
         <video
          src={'https://evergrowcoin.com/wp-content/uploads/2022/04/coming-soon-lunasky.mp4'}
          className='video' 
          loop 
          muted 
          autoPlay 
          playsInline
          preload="none"
          tabIndex="0"
          style={{height:'100%', width:'100%'}}
         >
        
        </video>
        {/* <ReactPlayer
            url="https://evergrowcoin.com/wp-content/uploads/2022/04/coming-soon-lunasky.mp4"
            width="100%"
            height="100%"
            playing
            loop
            playsinline
            muted
            config={{
              file: {
                attributes: {
                  preload: "auto",
                },
              },
            }}
          /> */}

    </div>
  );
}

export default App;
