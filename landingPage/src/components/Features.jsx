
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import {  faDiscord } from "@fortawesome/free-brands-svg-icons";

const Features = () => {
  return (
    <div className="features-section">

      <div className="features-section__text">
        <h4> Features </h4>
        <h1> Unlock the Power of Miranda Coding </h1>
        <p> Experience the ultimate coding assistant designed for efficiency and creativity. </p>
      </div>

      <div className="features-section__card">

        <div className="feature__card">
            <img src="https://placehold.co/600x400" alt="Image" />

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
            <img src="https://placehold.co/600x400" alt="Image" />

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
            <img src="https://placehold.co/600x400" alt="Image" />

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

        <div className="feature__card">
            <img src="https://placehold.co/600x400" alt="Image" />

            <div className='feature__card-title'>
                Team Gemini
            </div>
            
            <p> Get the best AI models trained by Google! From Gemini Flash to Gemini Pro! </p>

            <div className="hashtags">
                <span> #GeminiFlash1.5 </span>
                <span> #GeminiPro1.5 </span>
                <span> #GeminiPro2.5 </span>
                <span> #GeminiFlash2.5 </span>
            </div>
        </div>

        <div className="feature__card">
            <img src="https://placehold.co/600x400" alt="Image" />

            <div className='feature__card-title'>
                Team OpenAI
            </div>
            
            <p> Get the best AI models trained by OpenAI! From the earliest versions of ChatGPT to the current ones! </p>

            <div className="hashtags">
                <span> #GPT4.1 </span>
                <span> #GPT4.1Mini </span>
                <span> #GPT4.1Nano </span>
                <span> #GPTo3 </span>
                <span> #GPT3.5Turbo </span>
            </div>
        </div>

        <div className="feature__card">
            <img src="https://placehold.co/600x400" alt="Image" />

            <div className='feature__card-title'>
                Team Claude
            </div>
            
            <p> Get the best code generation models trained by Claude Antropic! OpenAI competitor. </p>

            <div className="hashtags">
                <span> #ClaudeOpus4 </span>
                <span> #ClaudeOpus3 </span>
                <span> #ClaudeSonnet4 </span>
                <span> #ClaudeSonnet3.7 </span>
                <span> #ClaudeHaiku3.5 </span>
            </div>
        </div>

      </div>

    </div>
  )
}

export default Features;
