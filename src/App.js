import './App.css';
import Counter from './Components/Counter';
import Image from './redux.webp';

function App() {
  return (
    <div className="App">
      <h1>Redux avec React</h1>
      <p>Pour installer et utiliser <b>redux</b>  dans react on dois installer deux librairies : redux et react-redux</p>
      <p> <b>Etape 1 :</b> npm install redux</p>
      <p> <b>Etape 2 :</b> npm install react-redux</p>
      <img style={{maxWidth:"80%"}} src={Image} alt="redux react" />

      <Counter></Counter>
     
    </div>
  );
}

export default App;
