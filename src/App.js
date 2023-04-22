import { useRef  } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  return (
    <>
    <Nav />
    <About />
    <Projects />    
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
            <FontAwesomeIcon icon={faHouse}/>
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

function Projects () {
  return (
    <section id="projects" className="bg-dark-subtle mt-5 shadow-lg">
  <div className="container-lg">
    <div className="text-center">
      <h2>Projects</h2>
      <p className="lead text-muted">Links to Demos and Repos Below</p>
    </div>
  </div>
  <div className="row my-5 align-items-center justify-content-center">
    <div className="col-8 col-md-6 col-lg-4 col-xl-3 m-2">
      <div className="card border-0">
        <img
          src={process.env.PUBLIC_URL + "/images/readme.png"}
          className="card-img-top"
          alt="screenshot"
        />
        <div className="card-body text-center py-4">
          <h4 className="card-title">README.md Generator</h4>
          <p className="card-text mx-5 text-muted d-none d-sm-block">
            Utilizes the Inquirer and fs packages to present the user with
            questions, gather their responses, and produce a README file that
            reflects the user's inputs.
          </p>
        </div>
        <div className="card-body text-center">
          <a
            href="https://drive.google.com/file/d/1bFkPrdq80WCl04qtnyjH7ii_-VVB51Ug/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link m-2"
          >
            Demostration
          </a>
          <a
            href="https://github.com/tnewnum/readMeGenerator"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link ms-0"
          >
            gitHub Repo
          </a>
        </div>
      </div>
    </div>
    <div className="col-8 col-md-6 col-lg-4 col-xl-3 m-2">
      <div className="card border-0">
        <img
         src={process.env.PUBLIC_URL + "/images/employee-tracker.png"}
          className="card-img-top"
          alt="screenshot"
        />
        <div className="card-body text-center py-4">
          <h4 className="card-title">Employee Tracker</h4>
          <p className="card-text mx-5 text-muted d-none d-sm-block">
            Command-line application using Node.js &amp; Inquirer package to ask
            the user questions and the MySQL2 package to connect to a MySQL
            database.
          </p>
        </div>
        <div className="card-body text-center">
          <a
            href="https://drive.google.com/file/d/1s-tZ-ErXS_DowUx5ONR-UVDFiEgcfpJT/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link m-2"
          >
            Demostration
          </a>
          <a
            href="https://github.com/tnewnum/sql-employeeTracker"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link ms-0"
          >
            gitHub Repo
          </a>
        </div>
      </div>
    </div>
    <div className="col-8 col-md-6 col-lg-4 col-xl-3 m-2">
      <div className="card border-0">
        <img
          src={process.env.PUBLIC_URL + "/images/entertianmentWishlist.png"}
          className="card-img-top test"
          alt="screenshot"
        />
        <div className="card-body text-center py-4">
          <h4 className="card-title">Entertainment Wishlist</h4>
          <h6 className="card-subtitle mb-2 text-muted">Group Project</h6>
          <p className="card-text mx-5 text-muted d-none d-sm-block">
            JavaScript code that fetches data from two different APIs and
            displays them on the webpage useing Tailwinds CSS Framework.
          </p>
        </div>
        <div className="card-body text-center">
          <a
            href="https://drive.google.com/file/d/1cfyp-k1b6Vm6cJttD2dgkbQKQE7zzl4x/view?usp=share_link"
            className="card-link m-2"
            rel="noopener noreferrer"
            target="_blank"
          >
            Demostration
          </a>
          <a
            href="https://github.com/tnewnum/Wishlist"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link ms-0 m-2"
          >
            gitHub Repo
          </a>
          <a
            href="https://tnewnum.github.io/Wishlist/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link ms-0"
          >
            Deployed Application
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

  )

}