import { useState } from "react";
import { ChevronDown, ChevronUp } from 'lucide-react';

// frequently asked questions
const Faq = () => {
  
  // State for open FAQ
  const [openIndex, setOpenIndex] = useState(null);

  const faq = [
    {
      question: "What is included in the Micro SaaS package?",
      answer: "You get the complete source code (React frontend, Node.js backend), Gemini AI integration, table export to Excel, text/list generators, and full documentation in English and Portuguese."
    },
    {
      question: "Do I need coding skills to use it?",
      answer: "Not really. The UI is simple and intuitive. But if you want to customize the code or deploy in your own infrastructure, basic web dev knowledge helps."
    },
    {
      question: "Can I sell the SaaS under my own brand?",
      answer: "Absolutely. The code is fully white-label and can be customized with your brand, domain, and pricing model. You own your deployment entirely."
    },
    {
      question: "Is it ready for production?",
      answer: "Yes! It’s a plug-and-play solution. Just configure your environment variables, connect your payment system (if needed), and you’re live."
    },
    {
      question: "Does it support AI fine-tuning or prompt engineering?",
      answer: "The current version uses prompt templates with Gemini. You can easily expand to support prompt customization or even integrate your own LLM model."
    },
    {
      question: "What are the deployment requirements?",
      answer: "Any server that supports Node.js and a frontend static host (like Vercel, Netlify, or your VPS). Docker configs can also be added for easy setup."
    },
    {
      question: "How do I get support or report bugs?",
      answer: "Support is provided via email and documentation. Optionally, we offer paid setup or customization services through our partners."
    },
    {
      question: "Can I connect it to my own database?",
      answer: "Yes, the backend is flexible. You can use MongoDB, PostgreSQL or any DB with Node.js support. The project is designed to be database-agnostic."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex == index ? null : index)
  }

  return (
    <div className="faq-section">
      <div className="faq-section__title">
        <h1> Frequently Asked Questions </h1>
        <h2> Find answers to common questions about our services </h2>
      </div>

      <div className="faq-section__container w-full max-w-3xl mx-auto p-6 rounded-xl">
        <div className="faq__box space-y-4">
          {faq.map((faq, index) => (
            <div 
              key={index}
              className={`rounded-lg overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'bg-[#38383b]' : 'bg-[#2b2b2e]'
              }`}
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left focus:outline-none cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-[#ebbf93]"> {faq.question} </span>
                <span className="text-[#e7cdb2] ml-4">
                  {openIndex === index ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-64 p-5 pt-0' : 'max-h-0'
                }`}
              >
                <p className="text-[#e7cdb2]"> {faq.answer} </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center p-4 bg-[#38383b] rounded-lg">
          <p className="text-gray-200 some_text"> Still have questions? </p>
          <button className="mt-2 px-8 py-4 bg-[#ebbf93] text-black font-medium rounded-lg cursor-pointer hover:bg-[#d6a86f] transition duration-300">
            Send Message
          </button>
        </div>
      </div>
    </div>
  )
}

export default Faq;