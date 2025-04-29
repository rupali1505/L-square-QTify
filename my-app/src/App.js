// import logo from './logo.svg';
import { StyledEngineProvider } from '@mui/material/styles';import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

function App() {
  return (
   <>
   <StyledEngineProvider injectFirst>
   <Navbar/>
   <Hero/>
   </StyledEngineProvider>
   </>
      
    
  );
}

export default App;
