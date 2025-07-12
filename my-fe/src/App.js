import './App.css';
// import Counter from './components/Counter';
// import GreetingForm from './components/GreetingForm';
// import UserList from './components/UserList'
import Timer from './components/Timer'
import FilterableUserList from './components/FilterableUserList'

function App() {
  return (
    <div className="root">
      <Timer></Timer>
    <FilterableUserList></FilterableUserList>
    </div>
  );
}

export default App;
