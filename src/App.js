import Clip from './Clip'
import './App.css';

function App() {
  document.body.style.backgroundImage = "url('bg.jpg')";
  return (
    <div className="App" style={{textAlign: "center"}}>
      <h1>paige__synth</h1>
      <Clip clip_fn="ThePaige_aHeartSoTrue"/>
      <Clip clip_fn="AlwaysBeenADream1"/>
      <Clip clip_fn="ThePaige_aHeartSoTrue2"/>
      <Clip clip_fn="ThePaige_aHeartSoTrue3"/>
      <Clip clip_fn="ThePaige_aHeartSoTrue4"/>
      <Clip clip_fn="AlwaysBeenADream2"/>
      <Clip clip_fn="ThePaige_aHeartSoTrue5"/>
      <Clip clip_fn="ThePaige_aHeartSoTrue6"/>
    </div>
  );
}

export default App;
