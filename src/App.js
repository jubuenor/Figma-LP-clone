import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main';
import Navbar1 from './components/navbar';
import Features from './components/features';
import ContactUs from './components/contactus';

function App() {
  return (
    <>
    <div className='main-bg'>
      <Navbar1></Navbar1>
      <Main></Main>
    </div>
    <Features></Features>
    <ContactUs></ContactUs>
    </>
    
  );
}

export default App;
