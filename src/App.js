import { useState, useRef } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPerson, faAt} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Nav from './components/Nav'
import About from './components/About'


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



function Projects () {
  const projectsRef = useRef(null);
  return (
    <section id="projects" ref={projectsRef} className="bg-dark-subtle mt-5 shadow-lg">
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
  const contactRef = useRef(null);
  const proficienciesRef = useRef (null);


  // declare state variables for email and name inputs
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // handle email input changes
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // handle name input changes
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  
  
    // handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!email || !name || !message) {
        alert("Please fill in all the fields."); // show error message
        return;
      }

      try {
        // make POST request using fetch API
        const response = await fetch(
          "https://formsubmit.co/9a370d0d7b7478b6c787eb7394bc934e ",
          {
            method: "POST",
            body: new FormData(e.target),
          }
        );
        if (response.ok) {
          alert("Thank you for your message!"); // show success message
          window.location.reload(); // reload the page
        } else {
          alert("Oops! Something went wrong."); // show error message
        }
      } catch (error) {
        console.error(error);
        alert("Oops! Something went wrong  - Please email me at thomas.newnum@gmail.com"); // show error message
      }
    };

  return (
    <section id="contact" ref={contactRef} className="row mt-5 p-0 ">
  <div className="col-lg-5 m-5">
    <div>
      <div className="text-center">
        <h2>
          <FontAwesomeIcon icon={faAt} style={{ color: "#000000" }} /> 
          Me
        </h2>
      </div>
        <form
            onSubmit={handleSubmit} // use onSubmit handler to handle form submission
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
        <div className="m-4 input-group">
          <span className="input-group-text">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#000000" }} />  
          </span>
          <input
            type="email"
            name="email"
            className="form-control me-5"
            id="email"
            placeholder="name@example.com"
            value={email} // bind email state variable to input value
            onChange={handleEmailChange} // use onChange handler to handle email input changes
            required=""
          />
        </div>
        <div className="m-4 input-group">
          <span className="input-group-text">
            <FontAwesomeIcon icon={faPerson} style={{ color: "#000000" }} />
          </span>
          <input
            type="name"
            className="form-control me-5"
            id="name"
            placeholder="Name"
            value={name} // bind name state variable to input value
            onChange={handleNameChange} // use onChange handler to handle name input changes
            required=""
          />
        </div>
        <div className="form-floating m-4">
          <textarea
            name="query"
            id="query"
            className="form-control"
            style={{ height: 140 }}
            value={message}
            onChange={handleMessageChange}
            required=""
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
        <h2 id="proficiencies" ref={proficienciesRef}>Proficiencies</h2>
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
          src= {process.env.PUBLIC_URL + "/images/nodejs2.png"}
          alt="nodejs"
        />
        <img
          className="logos"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/JQuery-Logo.svg/2560px-JQuery-Logo.svg.png"
          alt="jQuery"
        />
        <img
          className="logos"
          src= {process.env.PUBLIC_URL + "/images/bootstrap-logo.png"}
          alt="bootstrap"
        />
        <img 
          className="logos"
          src= {process.env.PUBLIC_URL + "/images/vsCode.png"}
          alt="vsCode"
        />
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