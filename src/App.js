import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';


function App() {
  return (
    <div className="container">
      <header>
       <Header />
       <Home />
      </header>
    </div>
  );
}

export default App;
