import {add, mult, sub, div} from './Calc';
import './App.css';

function App() {
  return (
    <>
      <ul>
        <li>{add(40,4)}</li>
        <li>{mult(40,4)}</li>
        <li>{sub(40,4)}</li>
        <li>{div(40,4)}</li>
      </ul>
    </>
  );
}

export default App;
