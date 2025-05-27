// import image_about from "../images/about_images.jpg";
// import { useEffect, useState } from "react";
import image_1 from "../images/Flexibility.png";

const About = () => {
    // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // useEffect(() => {
    //     // Set the initial mouse position
    //     const handleMouseMove = (e) => {
    //       setMousePosition({ x: e.clientX, y: e.clientY });
    //     };

    //     // Add event listener for mouse movement
    //     window.addEventListener('mousemove', handleMouseMove);

    //     return () => {
    //         // Clean up the event listener on component unmount
    //         window.removeEventListener('mousemove', handleMouseMove);
    //     }
    // });
    
    return (
        <div className="about">
            {/* Image placeholder */}
            <div className="feature-image__about">
                <img src={image_1} alt="Image about project" />
            </div>

            {/* <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
                <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
                style={{
                    left: mousePosition.x - 192,
                    top: mousePosition.y - 192,
                }}
                ></div>

                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-pink-500/10 rounded-full blur-2xl animate-bounce"></div>
            </div> */}

            {/* About this project */}
            <div className="feature-text__about">
                <div className="context__box">
                    <h1> What Is This Miranda? </h1>
                    <h2> A Smarter Way to Create, Code, and Communicate. </h2>
                    <p> This is an AI-powered platform built on advanced language and multimodal models — think Gemini-style intelligence — designed to help you generate text, images, audio, and even code. It's fast, intuitive, and available directly in your browser. Whether you need answers, automation, or inspiration, it's here to elevate your workflow. </p>
                </div>

                <div className="context__box">
                    <h1> Who Is It For? </h1>
                    <h2> Made for Thinkers, Makers, and Everyday Users. </h2>
                    <p> From developers and students to content creators and businesses — if you use your brain, this tool is for you. Whether you're building apps, writing reports, solving problems, or brainstorming ideas, this platform becomes your silent (but smart) co-pilot. No technical background? No problem. Just type — it works for everyone. </p>
                </div>

                <div className="context__box">
                    <h1>  Why Does It Exist? </h1>
                    <h2> Because the Future Is Already Here — and It's Usable. </h2>
                    <p> AI isn't just for labs and tech giants anymore. This platform exists to make advanced AI accessible, useful, and practical for daily life. It's built to save time, boost creativity, and remove the barriers between you and your best work. In short: AI, without the noise. </p>
                </div>
            </div>
        </div>
    )
}

export default About;
