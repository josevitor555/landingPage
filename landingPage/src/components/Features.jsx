
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import {  faDiscord } from "@fortawesome/free-brands-svg-icons";

import doc from "../images/documentation.png";
import source_code from "../images/source_code.png";
import discord_group from "../images/discord_group.png";
import feature_gemini from "../images/feature_gemini.png";
import feature_openai from "../images/feature_openai.png";
import feature_anthropic from "../images/feature_anthropic.png";

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
            <img src={source_code} alt="Image" />

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
            <img src={doc} alt="Image" />

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
            <img src={discord_group} alt="Image" />

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
            {/* <img src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F80d741ca-acf2-4619-961f-60b2f788d592_600x338.gif" alt="Image" /> */}
            <img src={feature_gemini} alt="Feature Gemini" />
            <div className='feature__card-title'>
                Team Gemini
            </div>
            
            <p> Unlock the power of Google’s cutting-edge AI! From Gemini Flash for lightning-fast responses to Gemini Pro for deep, thoughtful insights, experience models crafted by one of the world’s top tech pioneers. </p>

            <div className="hashtags">
                <span> #GeminiFlash1.5 </span>
                <span> #GeminiPro1.5 </span>
                <span> #GeminiPro2.5 </span>
                <span> #GeminiFlash2.5 </span>
                <span> #Google </span>
            </div>
        </div>

        <div className="feature__card">
            {/* <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e50214173218977.648c4882a75d6.gif" alt="Image" /> */}
            <img src={feature_openai} alt="Feature Open AI" />

            <div className='feature__card-title'>
                Team ChatGPT
            </div>
            
            <p> Step into the future with the iconic creators of ChatGPT! From the humble beginnings of GPT-1 to today’s mind-blowing GPT-4, OpenAI has consistently pushed the boundaries of artificial intelligence. </p>

            <div className="hashtags">
                <span> #GPT4.1 </span>
                <span> #GPT4.1Mini </span>
                <span> #GPT4.1Nano </span>
                <span> #GPTo3 </span>
                <span> #GPT3.5Turbo </span>
                <span> #OpenAI </span>
            </div>
        </div>

        <div className="feature__card">
            {/* <img src="https://analyticsindiamag.com/wp-content/uploads/2024/03/What-Makes-Anthropics-Claude-3-Special-1-1.gif" alt="Image" /> */}
            <img src={feature_anthropic} alt="Feature Anthropic" />

            <div className='feature__card-title'>
                Team Claude
            </div>
            
            <p> Power up with Claude, the innovative AI crafted by Anthropic — a formidable competitor to OpenAI. Known for its thoughtful, safety-focused approach and advanced code generation capabilities. </p>

            <div className="hashtags">
                <span> #ClaudeOpus4 </span>
                <span> #ClaudeOpus3 </span>
                <span> #ClaudeSonnet4 </span>
                <span> #ClaudeSonnet3.7 </span>
                <span> #ClaudeHaiku3.5 </span>
                <span> #Anthropic </span>
            </div>
        </div>

      </div>

    </div>
  )
}

export default Features;
