import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Nav from './components/Nav'
import About from './components/About'
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
    <Nav />
    <About />
    <Projects />
    <Contact />
    <Footer />
    </>
  );
}









function Footer () {

  return (

<div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ">
    <div className="col-md-4 d-flex align-items-center">
      <span className="mb-3 mb-md-0 text-muted">Tommy Newnum</span>
      <img className="sasquatch" src= {process.env.PUBLIC_URL + "/images/sasquatch.png"} alt="" />
    </div>
    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="m-4">
        <a href="https://github.com/tnewnum" target="blank">
        <FontAwesomeIcon icon={faGithub} style={{ color: "#000000", height: "150%"}} />
        </a>
      </li>
      <li className="m-4">
        <a href="https://www.linkedin.com/in/tnewnum/" target="blank">
        <FontAwesomeIcon icon={faLinkedin} style={{ color: "#000000", height: "150%"}} />
        </a>
      </li>
    </ul>
  </footer>
</div>


  )

}