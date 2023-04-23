import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse} from '@fortawesome/free-solid-svg-icons';


function scrollIntoView(ref) {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }



export default function Nav({page, handlePage}) {
    const projectsRef = useRef(null);
    const proficienciesRef = useRef(null);
  
    
    
    return (
  <nav
    className="navbar navbar-expand-md bg-dark-subtle shadow-lg"
    id="myHeader"
  >
    <div className="container-xxl">
      <a href="/" className="navbar-brand">
        <span className="fw-bold text-secondary">Tommy Newnum - Developer</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#main-nav"
        aria-controls="main-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-end align-center"
        id="main-nav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link">
              <FontAwesomeIcon icon={faHouse}/>
            </a>
          </li>
          <li className={page === 'about' ? 'nav-item' : ''}>
            <a href='#about' onClick={e => handlePage(e, 'about')} className='nav-link'>
              About
            </a>
           </li>
           <li className={page === 'contact' ? 'nav-item' : ''}>
            <a href="#contact" onClick={e => handlePage(e, 'contact')} className="nav-link">
              Contact Me
            </a>
          </li>
          <li className="nav-item">
            <a
              href={process.env.PUBLIC_URL + "/docs/resume.pdf"}
              target="blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a href="#proficiencies" onClick={() => scrollIntoView(proficienciesRef)} className="nav-link">
              Proficiencies
            </a>
          </li>
          <li className="nav-item d-md-none">
            <a href="#projects"onClick={() => scrollIntoView(projectsRef)} className="nav-link">
              Projects
            </a>
          </li>
          <li className="nav-item ms-2 d-none d-md-inline">
            <a href="#projects" onClick={() => scrollIntoView(projectsRef)}className="btn btn-secondary">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      );
  }