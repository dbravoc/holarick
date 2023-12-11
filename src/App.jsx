import Logo from './components/Logo';
import Nav from './components/Nav';
import Rrss from './components/Rrss';
import './App.css';


const App = () => {
  return (
    <>
    <div className='principal'>

      <div className='Header'>
        <Logo />
        <Nav />
      </div>
      
      <div className='Footer'>
        <Rrss />
      </div>
    
    </div>
    </>
  );
};


export default App;
