import { useEffect } from "react";

function App(){

  const channel = new BroadcastChannel('message');

  useEffect(() => {
    channel.onmessage = (event) => {
      const div = document.createElement('div');
      div.textContent = "Message: " + event.data;
      document.body.appendChild(div);
    }
  }, [])

  const sendmessage = () => {
    channel.postMessage("Example Message From Channel: " + channel.name);
  }

  return(
    <button onClick={sendmessage}>Send Example Message</button>
  )
}

export default App;