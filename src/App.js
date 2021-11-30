import logo from './logo.svg';
import './App.css';
import Card from './component/Card'
import Compteur from './component/Compteur';
import Horloge from './component/Horloge';
import { BrowserRouteur, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About'

function App() {
  return (

    <div className="App">

      <BrowserRouteur>

        <Card></Card>
        <Compteur></Compteur>
        <Horloge></Horloge>

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />

        </Routes>

      </BrowserRouteur>

    </div>

  );
}

export default App;