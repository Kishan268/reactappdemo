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
        id="bg-video">
            <source src="https://dashboard.hithere.co.nz/lunaskymp.mp4" type="video/mp4"/>
            <source src="https://dashboard.hithere.co.nz/lunaskyWeb.webm" type="video/webm"/>
      </video>
    </div>
  );
}

export default App;
