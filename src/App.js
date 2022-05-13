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
        
        <Weather city="Lagos" />
      </header>
      
    </div>
  );
}

export default App;
