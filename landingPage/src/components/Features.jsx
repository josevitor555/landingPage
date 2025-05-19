
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import {  faDiscord } from "@fortawesome/free-brands-svg-icons";

const Features = ()  =>{
  return (
    <div className="features-section">

      <div className="features-section__text">
        <h4> Features </h4>
        <h1> Unlock the Power of Miranda Coding </h1>
        <p> Experience the ultimate coding assistant designed for efficiency and creativity. <br /> With our comprehensive tools, you can streamline your development process and enhance your coding skills. </p>
      </div>

      <div className="features-section__card">

        <div className="feature__card">
            <img src="https://fakeimg.pl/600x400" alt="Image" />

            <div className='feature__card-title'>
                Complete Source Code
                <FontAwesomeIcon icon={faTerminal} className='ml-4'/>
            </div>
            
            <p> Well-organized, component-based, fully commented for easy understanding. </p>

            <div className="hashtags">
                <span> #SourceCode </span>
                <span> #Productivity </span>
                <span> #MirandaAI </span>
            </div>
        </div>
        
        <div className="feature__card second_child">
            <img src="https://fakeimg.pl/600x400" alt="Image" />

            <div className='feature__card-title'>
                Professional Documentation
            </div>
            
            <p> Detailed guide explaining every module and customization options. </p>

            <div className="hashtags">
                <span> #Documentation </span>
                <span> #Productivity </span>
                <span> #MirandaAI </span>
            </div>
        </div>
        
        <div className="feature__card">
            <img src="https://fakeimg.pl/600x400" alt="Image" />

            <div className='feature__card-title'>
                Access to the VIP Discord Group
                <FontAwesomeIcon icon={faDiscord} className='ml-2'/>
            </div>
            
            <p> Get early access to new features and exclusive content. </p>

            <div className="hashtags">
                <span> #DiscordVIP </span>
                <span> #Productivity </span>
                <span> #MirandaAI </span>
            </div>
        </div>

      </div>

    </div>
  )
}

export default Features;
