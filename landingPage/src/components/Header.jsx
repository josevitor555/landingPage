// Import font awesom
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
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
            <li> <a href="#"> Features </a> </li>
            <li> <a href="#"> Pricing </a> </li>
            <li> <a href="#"> Insights </a> </li>
            <li> <a href="#"> Suport </a> </li>
        </ul>
      </nav>

      {/* Buttons */}
      <div className="buttons__header">
        <button type='button'> Register Now </button>
        <button type='button' className='no__background'> Login </button>
      </div>
    </div>
  )
}

export default Header;
