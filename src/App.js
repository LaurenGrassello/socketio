import React, {useState, useEffect} from 'react'
import io from 'socket.io-client'
import './App.css';

function App() {
  const [socket] = useState(()=> io(':8000'))

  useEffect(()=>{
    console.log('test')
    socket.on('Hello!', data => console.log(data))
    return() => socket.disconnect(true)
  }, [])

  return (
    <div className="App">
      <h3>Socket Test</h3>
    </div>
  );
}

export default App;
