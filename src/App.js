import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef  } from 'react';

export default function App() {
  return (
    <>
    <Nav />
    <About />    
    </>
  );
}

function About() {
  const aboutRef = useRef(null);
    return (
      <div id="about" ref={aboutRef}>
      <section>
      <div className="container-lg ">
        <div className="row justify-content-center align-items-center">
          <div className="col-md text-center text-md-start">
            <h1>
              <div className="display-2">Tommy</div>
            </h1>
            <p className=" first lead my4 text-muted ms-2">
              <span className="fun">F</span>ull <span className="fun">S</span>tack{" "}
              <span className="fun">W</span>eb <span className="fun">D</span>
              eveloper - With a Certificate from <span className="fun">M</span>
              ichigan <span className="fun">S</span>tate{" "}
              <span className="fun">U</span>niversity.
            </p>
            <p className="lead my4 text-muted ms-2">
              When I'm not coding, you can find me backpacking, camping, hiking, and
              traveling. I love exploring new places and pushing myself to new
              limits in the great outdoors.
            </p>
            <p className="lead my4 text-muted ms-2">
              Thank you for checking out my Portfolio. If you're interested in
              working together, have any questions, or just want to connect - Let's
              bring our ideas to life and make an impact.
            </p>
            <a
              href="mailto:thomas.newnum@gmail.com"
              className="btn btn-secondary btn-lrg text-center ms-2m"
            >
              Contact Me
            </a>
          </div>
          <div className="col-md-5 text-center m-4">
            <img
              className="img-flud img rounded-circle border border-3 border-secondary shadow-lg m-1"
              src={process.env.PUBLIC_URL + "/images/headshot.jpg"}
              alt="headshot"
            />
          </div>
        </div>
      </div>
    </section>
    </div>
  )
};

function scrollIntoView(ref) {
     if (ref.current) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
}

function Nav() {
  const aboutRef = useRef(null);
  
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
            <i
              className="fa-solid fa-house fa-lg"
              style={{ color: "#000000" }}
            />
          </a>
        </li>
        <li className="nav-item">
          <a href='#about' onClick={() => scrollIntoView(aboutRef)} className='nav-link'>
            About
          </a>
         </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">
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
          <a href="#proficiencies" className="nav-link">
            Proficiencies
          </a>
        </li>
        <li className="nav-item d-md-none">
          <a href="#projects" className="nav-link">
            Projects
          </a>
        </li>
        <li className="nav-item ms-2 d-none d-md-inline">
          <a href="#projects" className="btn btn-secondary">
            Projects
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}
