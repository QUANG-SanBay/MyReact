import './App.css';
import Button from './components/Button';
function App() {
  return (
    <>
      <Button>click me!!</Button>
      <Button primary={true}>primary btn</Button>
      <Button danger={true}>danger btn</Button>
    </>
  )
}

export default App;
