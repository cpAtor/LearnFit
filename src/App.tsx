import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Route, Routes } from 'react-router'
import { Home } from './pages/Home'
import {Workout} from './pages/Workout'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home} />
      <Route path='/workout' Component={Workout} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
