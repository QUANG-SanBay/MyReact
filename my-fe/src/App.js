import './App.css';
// import Counter from './components/Counter';
// import GreetingForm from './components/GreetingForm';
// import UserList from './components/UserList'
import Timer from './components/Timer'
import ParentCounter from './components/ParentCounter'

function App() {
  return (
    <div className="root">
      <Timer></Timer>
      <ParentCounter></ParentCounter>
    </div>
  );
}

export default App;
