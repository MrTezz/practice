import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
    <Navbar homeText="Base" aboutText="History"/>
    <Textform/>
    </>
  );
}

export default App;
