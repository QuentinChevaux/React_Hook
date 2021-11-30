import logo from './logo.svg';
import './App.css';
import Card from './component/Card'
import Compteur from './component/Compteur';
import Horloge from './component/Horloge';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About'

function App() {
  return (

    <div className="App">

      <BrowserRouter>

        <Card></Card>
        <Compteur></Compteur>
        <Horloge></Horloge>

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />

        </Routes>

      </BrowserRouter>

    </div>

  );
}

export default App;