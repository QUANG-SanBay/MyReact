import './App.css';
import {Link, Route, Routes} from 'react-router-dom'
import Contact from './pages/Contact'
import New from './pages/New'
import Home from './pages/Home'
function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/New'>New</Link>
          </li>
          <li>
            <Link to='/Contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/New' element={<New/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
    </>
  )
}

export default App;
