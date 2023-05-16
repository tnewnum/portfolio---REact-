import { useRef } from "react";

export default function Projects() {
  const projectsRef = useRef(null);
  return (
    <section id="projects" ref={projectsRef} className="bg-dark-subtle mt-5 ">
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
                questions, gather their responses, and produce a README file
                that reflects the user's inputs.
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
                Command-line application using Node.js &amp; Inquirer package to
                ask the user questions and the MySQL2 package to connect to a
                MySQL database.
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
              src={process.env.PUBLIC_URL + "/images/caddyShack.png"}
              className="card-img-top test"
              alt="screenshot"
            />
            <div className="card-body text-center py-4">
              <h4 className="card-title">Caddy Shack</h4>
              <h6 className="card-subtitle mb-2 text-muted">Group Project</h6>
              <p className="card-text mx-5 text-muted d-none d-sm-block">
                A MERN Full Stack Web Application
              </p>
            </div>
            <div className="card-body text-center">
            
              <a
                href="https://github.com/tnewnum/caddy_shack"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link ms-0 m-2"
              >
                gitHub Repo
              </a>
              <a
                href="https://dry-anchorage-61029.herokuapp.com/"
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
  );
}
