import { useEffect } from 'react';
import './App.css';
import Aos from 'aos';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/UI/Hero';
import Skills from './components/UI/Skills';
import Portfolio from './components/UI/Portfolio';
import Contact from './components/UI/Contact';
import Education from './components/UI/Education';
function App() {
  useEffect(()=>{
    Aos.init();
  },[]);
  return <>
  <Header/>
 
<main>
<Hero/>
<Skills/>
<Education/>
<Portfolio/>
<Contact/>
</main>

  <Footer/>
  </>
}

export default App;
