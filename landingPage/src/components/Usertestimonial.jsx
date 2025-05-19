
import image_1 from "../images/image_1.png";

const Usertestimonial = () => {
  return (
    <div className="users-testimonial__section">
      <div className="users-testimonial__container">
        <figure className="max-w-screen-md mx-auto text-center">
            <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
            </svg>

            <blockquote>
                <p className="text-2xl italic font-medium text-gray-900 dark:text-white"> "As a Co-Founder, I've seen the growth of this platform firsthand — and I can proudly say: we've created something truly revolutionary. Gemini models have turned ideas into products, content into experiences, and data into solutions. If you're creative, curious, or entrepreneurial, welcome to the future. We built it with you in mind." </p>
            </blockquote>

            <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                {/* <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"> */}
                <img src={image_1} className="w-6 h-6 rounded-full" alt="Image user" />
                <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                    <cite className="pe-3 font-medium text-gray-900 dark:text-white"> Miranda AI </cite>
                    <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400"> Co-Founder </cite>
                </div>
            </figcaption>
        </figure>
      </div>
    </div>
  )
}

export default Usertestimonial;
