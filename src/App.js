import ReactPlayer from 'react-player'

function App() {
  return (
    <div className="App">
         <video 
          playsinline 
          loop 
          muted 
          autoPlay 
          preload={false}
          tabindex={0}
          style={{height:'100%', width:'100%'}}
         >
          <source  src='https://evergrowcoin.com/wp-content/uploads/2022/04/coming-soon-lunasky.mp4' type="video/mp4" />
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
