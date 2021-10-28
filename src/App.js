import Clip from './Clip'
import './App.css';

function App() {
  document.body.style.backgroundImage = "url('bg.jpg')";
  return (
    <div className="App" style={{textAlign: "center"}}>
      <h1>paige__synth</h1>
      <h2>Mathematical art inspired by and created for the world of Pok&eacute;mon by <a href="https://www.instagram.com/color__synth/">color__synth</a></h2>
      <Clip clip_fn="ThePaige_aHeartSoTrue"/>
      <Clip clip_fn="AlwaysBeenADream1"/>
      <Clip clip_fn="ThePaige_aHeartSoTrue2"/>
      <Clip clip_fn="ThePaige_aHeartSoTrue3"/>
      <Clip clip_fn="ThePaige_aHeartSoTrue4"/>
      <Clip clip_fn="AlwaysBeenADream2"/>
      <Clip clip_fn="ThePaige_aHeartSoTrue5"/>
      <Clip clip_fn="ThePaige_aHeartSoTrue6"/>
      <h3>Last updated 10/27/2021</h3>
    </div>
  );
}

export default App;
