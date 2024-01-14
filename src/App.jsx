import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About';
import Contact from './pages/contact/Contact'
import NotFound from './pages/not_found/NotFound'
import Trainers from './pages/trainers/Trainers';
import Plans from './pages/plans/Plans'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='plans' element={<Plans/>}/>
        <Route path='trainers' element={<Trainers/>}/>
        <Route path='*' element={<NotFound/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>     
  );
}

export default App
