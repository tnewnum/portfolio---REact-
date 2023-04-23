import { useState } from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav'
import About from './components/About'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [page, setPage] = useState('about') 

  
  function pickPage() { 
    switch (page) {
      case 'about': return <About />
      case 'projects': return <Projects />
      case 'contact': return <Contact />
      default: return <h1>404</h1>
    }
  }
          
    function handlePage(e, page) {
      e.preventDefault()
      setPage(page)
    }

  return (
    <>
    <Nav handlePage={handlePage} />
      <div>
        {pickPage()}



        
      </div>
    <Footer />
    </>
  );
};