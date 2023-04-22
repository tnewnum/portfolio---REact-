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
    <Contact />    
    </>
  );
}

function scrollIntoView(ref) {
  if (ref.current) {
 ref.current.scrollIntoView({ behavior: "smooth" });
}
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

function Contact () {

  return (
    <section id="contact" className="row mt-5 p-0 ">
  <div className="col-lg-5 m-5">
    <div>
      <div className="text-center">
        <h2>
          <i className="fa-solid fa-at m-3" style={{ color: "#000000" }} />
          Me
        </h2>
      </div>
      <form
        action="https://formsubmit.co/9a370d0d7b7478b6c787eb7394bc934e "
        method="POST"
        className="border border-2 rounded"
      >
        <input
          type="hidden"
          name="_subject"
          defaultValue="new email from portfolio"
        />
        <input type="hidden" name="_captcha" defaultValue="false" />
        <input
          type="hidden"
          name="_autoresponse"
          defaultValue="Hello - Thank you for your email. I will reach out as soon as possiable. In the meantime, be sure to check out my gitHub profile @ https://github.com/tnewnum - Have a bless day - Tommy "
        />
        <input
          type="hidden"
          name="_next"
          defaultValue="https://tnewnum.github.io/newestPortfolio/thanks.html"
        />
        <div className="m-4 input-group">
          <span className="input-group-text">
            <i className="fa-solid fa-envelope" style={{ color: "#000000" }} />
          </span>
          <input
            type="email"
            name="email"
            className="form-control me-5"
            id="email"
            placeholder="name@example.com"
            required=""
          />
        </div>
        <div className="m-4 input-group">
          <span className="input-group-text">
            <i className="fa-solid fa-person" style={{ color: "#000000" }} />
          </span>
          <input
            type="name"
            className="form-control me-5"
            id="name"
            placeholder="Name"
            required=""
          />
        </div>
        <div className="form-floating m-4">
          <textarea
            name="query"
            id="query"
            className="form-control"
            style={{ height: 140 }}
            defaultValue={""}
          />
          <label htmlFor="query">Your Message:</label>
        </div>
        <div className="m-4 text-center">
          <button id="submit-btn" type="submit" className="btn btn-secondary">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  <div className="col-lg-5 m-5">
    <div>
      <div className="text-center">
        <h2 id="proficiencies">Proficiencies</h2>
      </div>
      <div className="row-reverse text-center mt-4">
        <img
          className="logos"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
          alt="html"
        />
        <img
          className="css"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
          alt="CSS"
        />
        <img
          className="js"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1200px-Javascript_badge.svg.png"
          alt="javaScript"
        />
        <img
          className="logos"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhGY3y62pQo2wpjm4i_6cIapSOvVIFShRrnH1a2pukw&s"
          alt="msSQL"
        />
        <img
          className="logos"
          src="https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png"
          alt="mongodb"
        />
        <img
          className="logos"
          src="https://buttercms.com/static/images/tech_banners/ExpressJS.png"
          alt=" ExpressJS"
        />
        <img
          className="logos"
          src="https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/reactlogo_4.png?itok=LXFHZrKJ"
          alt="react"
        />
        <img
          className="logos"
          src="https://cdn.freebiesupply.com/logos/thumbs/2x/nodejs-1-logo.png"
          alt="nodejs-1-logo"
        />
        <img
          className="logos"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/JQuery-Logo.svg/2560px-JQuery-Logo.svg.png"
          alt="jQuery"
        />
        <img
          className="logos"
          src="./assets/images/bootstrap-logo.png"
          alt="bootstrap"
        />
        <img className="logos" src="./assets/images/vsCode.png" alt="vsCode" />
        <img
          className="logos"
          src="https://faisalweb.com/wp-content/uploads/2017/07/git.jpg"
          alt="gitBash"
        />
        <img
          className="logos"
          src="https://seekvectorlogo.net/wp-content/uploads/2018/12/heroku-vector-logo.png"
          alt=""
        />
      </div>
    </div>
  </div>
</section>

    

  )

}