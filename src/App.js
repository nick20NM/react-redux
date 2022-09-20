import './App.css';
import Navbar from './components/Navbar';
import Balance from './components/Balance';

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Balance/>
      </div>
    </>
  );
}

export default App;
