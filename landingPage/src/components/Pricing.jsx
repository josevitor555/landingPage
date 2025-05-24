import React from 'react'

const Pricing = () => {
  return (
    <div className='pricing-section'>
      <div className="pricing-section__text">
        <h1> Choice your Pricing Plan </h1>
        <p>
          We offer flexible pricing plans to suit your needs. Whether you're an individual, a small team, or a large organization, we have a plan that fits your requirements. <br />
          Choose the plan that works best for you and start enjoying the benefits of our service today!
        </p>

        <div className="pricing-section__container">
          <div className="pricing__box">
            <div className="pricing__box-title">
              <div>
                <h2 className='flex text-start'> Features Includes </h2>
              </div>
              <div>
                <h2> Free Plan </h2>
                <p> $0 / month with Include Gemini </p>
              </div>
            </div>
            <ul>
              <li>
                <div>
                 <span className='feature-title'> Models Includes </span>
                </div>
                <div>
                  {/* <svg className="w-6 h-6 me-2 text-[#FFF2D7] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg> */}
                  Basic Gemini
                </div>
              </li>
              <li>
                <div>
                  <span className='feature-title'> Monthly Limit </span>
                </div>
                <div>
                  {/* <svg className="w-6 h-6 me-2 text-[#FFF2D7] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg> */}
                  500 requests
                </div>
              </li>
              <li>
                <div>
                  <span className='feature-title'> Excel Export </span>
                </div>
                <div>
                  {/* <svg className="w-6 h-6 me-2 text-[#FFF2D7] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg> */}
                  Included
                </div>
              </li>
              <li>
                <div>
                  <span className="feature-title"> Text/Code Generation </span>
                </div>
                <div>
                  {/* <svg className="w-6 h-6 me-2 text-[#FFF2D7] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg> */}
                  Included
                </div>
              </li>
              <li>
                <div>
                  <span className="feature-title"> API Access </span>
                </div>
                <div>
                  {/* <svg className="w-6 h-6 me-2 text-[#FFF2D7] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg> */}
                  App-only
                </div>
              </li>
              <li>
                <div>
                  <span className="feature-title"> Suport </span>
                </div>
                <div>
                  {/* <svg className="w-6 h-6 me-2 text-[#FFF2D7] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg> */}
                  Basic email support
                </div>
              </li>
              <li>
                <div>
                  <span className="feature-title"> Prompt Customization </span>
                </div>
                <div>
                  {/* <svg className="w-6 h-6 me-2 text-[#FFF2D7] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg> */}
                  Pre-configured only
                </div>
              </li>
              <li>
                <div>
                  <div className="feature-title"> Model Switching </div>
                </div>
                <div>
                  {/* <svg className="w-6 h-6 me-2 text-[#FFF2D7] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg> */}
                  Gemini only
                </div>
              </li>
            </ul>
            <button className='pricing__box-button'> Get Started </button>
          </div>

          <div className="pricing__box">
            <div className="pricing__box-title">
              <div>
                <h2 className='flex text-start'> Features Includes </h2>
              </div>
              <div>
                <h2> Pro Plan </h2>
                <p> $50 / month with Gemini, GPT, Grok and Claude </p>
              </div>
            </div>
            <ul>
              <li>
                <div>
                  <div className="feature-title"> Included Models </div>
                </div>
                <div>
                  {/* <svg className="w-6 h-6 me-2 text-[#FFF2D7] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg> */}
                  Advanced Gemini, ChatGPT, Grok and Claude
                </div>
              </li>
              <li>
                <div>
                  <div className="feature-title"> Monthly Limit </div>
                </div>
                <div>
                  {/* <svg className="w-6 h-6 me-2 text-[#FFF2D7] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg> */}
                  Unlimited or high-tier limit
                </div>
              </li>
              <li>
                <div>
                  <div className="feature-title"> Excel Export </div>
                </div>
                <div>
                  {/* <svg className="w-6 h-6 me-2 text-[#FFF2D7] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg> */}
                  Included
                </div>
              </li>
              <li>
                <div>
                  <div className="feature-title"> Text/Code Generation </div>
                </div>
                <div>
                  {/* <svg className="w-6 h-6 me-2 text-[#FFF2D7] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg> */}
                  Included
                </div>
              </li>
              <li>
                <div>
                  <div className="feature-title"> API Access </div>
                </div>
                <div>
                  {/* <svg className="w-6 h-6 me-2 text-[#FFF2D7] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg> */}
                  Private API access for integrations
                </div>
              </li>
              <li>
                <div>
                  <div className="feature-title"> Suport </div>
                </div>
                <div>
                  {/* <svg className="w-6 h-6 me-2 text-[#FFF2D7] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg> */}
                  Priority support + personalized consulting
                </div>
              </li>
              <li>
                <div>
                  <div className="feature-title"> Prompt Customization </div>
                </div>
                <div>
                  {/* <svg className="w-6 h-6 me-2 text-[#FFF2D7] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg> */}
                  Full customization of prompts and workflows
                </div>
              </li>
              <li>
                <div>
                  <div className="feature-title"> Model Switching </div>
                </div>
                <div>
                  {/* <svg className="w-6 h-6 me-2 text-[#FFF2D7] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg> */}
                  Multi-model switching between Gemini, GPT, Grok and Claude
                </div>
              </li>
            </ul>
            <button className='pricing__box-button'> Upgrade Now </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing;
