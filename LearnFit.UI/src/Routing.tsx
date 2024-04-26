import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import  Home from './pages/Home'
import Workout from './pages/Workout'
import  Layout from './components/Layout'
import Account from './pages/Account'

function Routing() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={Layout} >
        <Route path="/" Component={Home} />
        <Route path='/workout' Component={Workout} />
        <Route path='/account' Component={Account} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Routing
