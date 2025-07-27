import './App.css';
import Video from './components/Video'
import { useRef, useEffect } from 'react';

function App() {
  const videoRef = useRef()
  useEffect(()=>{
    console.log(videoRef.current)
  })
  const handlePlay = ()=>{
    videoRef.current.play()
  }
  const handlePause = ()=>{
    videoRef.current.pause()
  }
  return (
    <>
      <Video ref={videoRef}></Video>
      <button onClick={handlePlay}>play</button>
      <button onClick={handlePause}>pause</button>
    </>
      
  )
}

export default App;
