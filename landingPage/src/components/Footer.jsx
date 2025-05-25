
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-section">

      {/* Footer content goes here */}
      <div className="footer__row1">
        <div className="logo">
            <span> MirandaAI </span>
        </div>
        
        <div className="footer__nav">
            <nav>
                <ul>
                    <li><a href="#aboutus"> About Us </a></li>
                    <li><a href="#contactus"> Contact Us </a></li>
                    <li><a href="#ourwork"> Our Work </a></li>
                    <li><a href="#blogoposts"> Blog Posts </a></li>
                    <li><a href="#getstarted"> Get Started </a></li>
                </ul>
            </nav>
        </div>

        <div className="footer__icons">
            <ul>
                <li>
                    <a href="#"> <FontAwesomeIcon icon={faInstagram}/> </a>
                </li>
                <li>
                    <a href="#"> <FontAwesomeIcon icon={faDiscord}/> </a>
                </li>
                <li>
                    <a href="#"> <FontAwesomeIcon icon={faLinkedin}/> </a>
                </li>
                <li>
                    <a href="#"> <FontAwesomeIcon icon={faYoutube}/> </a>
                </li>
            </ul>
        </div>
      </div>
      <div className="footer__row2">
        <div className="footer__copyright">
            <p> © 2023 MirandaAI. All rights reserved. </p>
        </div>
        
        <div className="footer__terms">
            <p className='underline'> Terms of Service | Privacy Policy </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
