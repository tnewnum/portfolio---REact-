import logo from './logo.svg';
import './App.css';

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export function Nav() {
  return (
<nav
  className="navbar navbar-expand-md bg-dark-subtle shadow-lg"
  id="myHeader"
>
  <div className="container-xxl">
    <a href="#" className="navbar-brand">
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
          <a href="#" className="nav-link">
            <i
              className="fa-solid fa-house fa-lg"
              style={{ color: "#000000" }}
            />
          </a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link">
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">
            Contact Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="./assets/docs/resume.pdf"
            target="blank"
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
