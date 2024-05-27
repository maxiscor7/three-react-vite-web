import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import ModeloPalmera from './components/modeloPalmera/ModeloPalmera'
import Home from './pages/Home'
import About from './pages/About'
function App() {

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <h1>Coming soon</h1>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
      </Routes>
      <ModeloPalmera/>
    </Router>
  )
}

export default App
