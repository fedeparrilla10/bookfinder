import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="links">
        <a href="https://github.com/fedeparrilla10/bookfinder" target="_blank">
          <FontAwesomeIcon className="fa-icon" icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/federicoiparrilla/"
          target="_blank"
        >
          <FontAwesomeIcon className="fa-icon" icon={faLinkedin} />
        </a>
      </div>
      <h4>Project developed by Fede Parrilla</h4>
    </footer>
  );
};

export default Footer;
