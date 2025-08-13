
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Auth from './pages/Auth'
import Allbook from './pages/Allbook'
import Viewbook from './pages/Viewbook'
import Addbook from './pages/Addbook'
import Header from './components/Header'

function App() {
  

  return (
    <>

    <Header/>

    <Routes>

      <Route path='/' element={<Landing/>} />
  
      <Route path='/login' element={<Auth/>} />
  
      <Route path='/register' element={<Auth register/>} />
  
      <Route path='/all-books' element={<Allbook/>} />
  
      <Route path='/view-book/:id' element={<Viewbook/>} />
  
      <Route path='/add-book' element={<Addbook/>} />

    </Routes>


      
    </>
  )
}

export default App
