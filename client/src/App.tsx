import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import GlobalStyle from "./GlobalStyle";
import './App.css';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Navigation/>
      <Home/>
    </div>
  );
}

export default App;
