import logo from './logo.svg';
import './App.css';
import Card from './component/Card'
import Compteur from './component/Compteur';
import Horloge from './component/Horloge';

function App() {
  return (

    <div className="App">

      <Card></Card>

      <Compteur></Compteur>

      <Horloge></Horloge>

    </div>
    
  );
}

export default App;
