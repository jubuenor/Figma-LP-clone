import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main';
import Navbar1 from './components/navbar';
import Features from './components/features';

function App() {
  return (
    <>
    <div className='prueba'>
      
      <Navbar1></Navbar1>
      <Main></Main>

    </div>
    <Features></Features>
    </>
    
  );
}

export default App;
