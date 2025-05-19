import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faJava, faJs, faHtml5, faCss3, faReact } from "@fortawesome/free-brands-svg-icons";

const Modals = () => {
  return (
    <div className="modals-section">
      <h1> Empower Your Development Journey <br /> with Our AI-Powered Coding Assistant </h1>

      {/* Modalities that the Assistant uses */}
      <div className="modals-section__box">

        {/* Generate Code */}
        <div className="modal-box">
            <img src="https://fakeimg.pl/600x400" alt="Image" />

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
            <img src="https://fakeimg.pl/600x400" alt="Image" />

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
            <img src="https://fakeimg.pl/600x400" alt="Image" />

            <div className='box-title'>
                Organize your data. Export your results.
            </div>

            <p> With Miranda, generate structured tables with ease and export them in Excel format—perfect for reports, planning, inventory, or anything else that needs order and clarity </p>

            <div className="hashtags">
                <span> #DataOrganization </span>
                <span> #ExcelExport </span>
                <span> #MirandaAI </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Modals
