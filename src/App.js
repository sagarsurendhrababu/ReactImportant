import './App.css';
import { useContext } from 'react';
import { Context } from './Provider/Provider';

function App() {
  //const value = useContext(Context);
  const [state, dispatch] = useContext(Context);
  console.log(state.value1 +" "+ state.value2);
  return (
      <div className="App">
        <h1>{state.value1}</h1>
        <button onClick={()=>{dispatch("up")}}>UP</button>
        <button onClick={()=>{dispatch("down")}}>DOWN</button>
        <h1>{state.value2}</h1>
        <button onClick={()=>{dispatch("up1")}}>UP</button>
        <button onClick={()=>{dispatch("down1")}}>DOWN</button>        
      </div>
  );
}

export default App;
