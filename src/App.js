import './App.css'
function App() {
  return (
    <div className="App">
      <video 
        className='video' 
        style={{height:'100%', width:'100%'}}
        autoPlay 
        loop 
        playsInline 
        controls
        src='https://evergrowcoin.com/wp-content/uploads/2022/04/Lunasky.mp4'
        id="bg-video">
            <source src="https://evergrowcoin.com/wp-content/uploads/2022/04/Lunasky.mp4" type="video/mp4"/>
      </video>
    </div>
  );
}

export default App;
