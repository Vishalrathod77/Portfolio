import React, { useState, useEffect } from 'react';
import './App.css';  // Custom styles
import Projects from './components/Projects'; // Projects component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import profilePic from './wp5568706.jpg';  // Adjust the path if necessary


function App() {
  const [darkMode, setDarkMode] = useState(false);  // State for dark mode
  const [activeSection, setActiveSection] = useState(''); // State to track active section

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);  // Toggle the dark mode
  };

  // Scroll observer to highlight active section
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      threshold: 0.5,  // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set active section based on visibility
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">My Portfolio</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto"> {/* Align to the right */}
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <button onClick={toggleDarkMode} className="btn btn-secondary ml-2">
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} /> {/* Sun for light mode, Moon for dark mode */}
          </button>
        </div>
      </nav>

      {/* Hero Section with Photo and Name */}
      <header className="hero">
        <div className="container text-center">
          <img src={profilePic} alt="Your Name" className="profile-photo" />
          <h1 className="mt-3">Your Name</h1> {/* Your Name */}
          <p className="lead">Full-stack Web Developer</p> {/* Your Title */}
          <a href="#projects" className="btn btn-primary mt-4 btn-lg">View My Work</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="about py-5">
        <div className="container">
          <h2 className="text-center mb-4">About Me</h2>
          <p className="lead text-center">I'm a full-stack web developer with a passion for building responsive and user-friendly websites. I have experience with front-end technologies like HTML, CSS, JavaScript, and React, as well as back-end development using Node.js and Express.</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">My Projects</h2>
          <Projects /> {/* Render project cards */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact py-5">
        <div className="container">
          <h2 className="text-center mb-4">Contact Me</h2>
          <form className="text-center">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control w-50 mx-auto" id="name" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control w-50 mx-auto" id="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control w-50 mx-auto" id="message" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-3">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-3">
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
