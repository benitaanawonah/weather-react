import './App.css';
import Weather from './weather';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
          React Debugging
        </h1>
        <br />
        <a href="https://www.youtube.com/watch?v=ra1Jl3O_u6Q" target="_blank" rel="noreferrer">BCS</a>
        <Weather city="Benin" />
      </header>
      
    </div>
  );
}

export default App;
