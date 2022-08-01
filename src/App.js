import Circuit from './Components/Background';
import NavBar from './Components/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/NavBar.js';



function App() {
  return (
    <div className="App">
      <NavBar/> 
      <Circuit/>
      <h1>Hello World - 1!</h1>
    </div>
  );
}

export default App;
