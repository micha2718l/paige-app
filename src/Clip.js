import './App.css';
import { Player } from 'video-react';

function App({ clip_fn }) {
  return (
    <div style={{width: "75%", paddingLeft: "12.5%"}}>
        <h2>{ clip_fn }</h2>
        <Player
          playsInline
          poster={"https://jason-paige.s3.amazonaws.com/" + clip_fn + ".jpg"}
          src={"https://jason-paige.s3.amazonaws.com/" + clip_fn + ".mov"}
        />
    </div>
  );
}

export default App;