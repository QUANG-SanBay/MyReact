import './App.css';
// import Counter from './components/Counter';
// import GreetingForm from './components/GreetingForm';
// import UserList from './components/UserList'
import Timer from './components/Timer'
import TooltipButton from './components/TooltipButton'

function App() {
  return (
    <div className="root">
      <Timer></Timer>
      <TooltipButton></TooltipButton>
    </div>
  );
}

export default App;
