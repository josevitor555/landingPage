// Import font awesom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen,  faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const Header = () => {

  // Hook for background transparent
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY > 30) {
        header.classList.add("change__background");
      } else {
        header.classList.remove("change__background");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="header">
      
      {/* First col - logo */}
      <div className="logo">
        <FontAwesomeIcon icon={faPen} className='pen mr-4 text-black'/>
        <span className='text__logo'>  Build Your AI Assistant </span>
      </div>

      {/* Navigation links */}
      <nav>
        <ul>
            <li> <a href="#"> Home </a> </li>
            <li> <a href="#"> About </a> </li>
            <li> <a href="#"> Miranda Cases </a> </li>
            <li> <a href="#"> Features </a> </li>
            <li> <a href="#"> FAQ </a> </li>
            <li> <a href="#"> Pricing </a> </li>
        </ul>
      </nav>

      {/* Buttons */}
      <div className="buttons__header">
        <button type='button'> Register Now </button>
        <button type='button' className='with__background'>
          <FontAwesomeIcon icon={faBars}/>
        </button>
      </div>
    </div>
  )
}

export default Header;
