import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faJava, faJs, faHtml5, faCss3, faReact } from "@fortawesome/free-brands-svg-icons";

import modal_1 from "../images/modal_1.png";
import modal_2 from "../images/modal_2.png";
import modal_3 from "../images/modal_3.png";

const Modals = () => {
  return (
    <div className="modals-section">
      <h1> Empower Your Development Journey <br /> with Our AI-Powered Coding Assistant </h1>

      {/* Modalities that the Assistant uses */}
      <div className="modals-section__box">

        {/* Generate Code */}
        <div className="modal-box">
            <img src={modal_1} alt="Image" />

            <div className='box-title'>
                Generate Code
                <div className='ml-4'>
                    <ul className='flex gap-4'>
                        <li> <FontAwesomeIcon icon={faJava}/> </li>
                        <li> <FontAwesomeIcon icon={faJs}/> </li>
                        <li> <FontAwesomeIcon icon={faHtml5}/> </li>
                        <li> <FontAwesomeIcon icon={faCss3}/> </li>
                        <li> <FontAwesomeIcon icon={faReact}/> </li>
                    </ul>
                </div>
            </div>

            <p> Transform your ideas into code and bring your imagination to life. With the advanced power of Miranda, your creativity becomes the engine that builds the future—one line of code at a time. </p>

            <div className="hashtags">
                <span> #Programming </span>
                <span> #DeveloperTools </span>
                <span> #MirandaAI </span>
            </div>
        </div>

        {/* Generate text */}
        <div className="modal-box">
            <img src={modal_2} alt="Image" />

            <div className='box-title'>
                Generate Content
            </div>
            
            <p> Give structure to your thoughts and let your words flow with precision. With Miranda, you can generate articles, scripts, lists, summaries, and more—turning raw ideas into clear, compelling content in seconds. </p>

            <div className="hashtags">
                <span> #ContentCreation </span>
                <span> #Productivity </span>
                <span> #MirandaAI </span>
            </div>
        </div>

        {/* Generate tables */}
        <div className="modal-box">
            <img src={modal_3} alt="Image" />

            <div className='box-title'>
                Create a Codebook.
            </div>

            <p> With Miranda, you can create a Colab-like code notebook, which we call a CodeBook, for more organization in your workflow. </p>

            <div className="hashtags">
                <span> #CodeBook </span>
                <span> #Organization </span>
                <span> #MirandaAI </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Modals;
