import './App.css';
import { Player } from 'video-react';

function App({ clip_fn }) {
  return (
    <div style={{margin: "5%", backgroundColor: "black"}}>
      <div style={{margin: "1rem", padding: "0.5rem", backgroundColor: "white"}}>
          <h3>{ clip_fn }</h3>
          <a href={"https://jason-paige.s3.amazonaws.com/" + clip_fn + ".mov"} download>DOWNLOAD</a>
          <Player
            playsInline
            preload="metadata"
            poster={"https://jason-paige.s3.amazonaws.com/" + clip_fn + ".jpg"}
            src={"https://jason-paige.s3.amazonaws.com/" + clip_fn + ".mov"}
          />
        </div>
    </div>
  );
}

export default App;