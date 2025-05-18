// Images for banner
// import React from "react";
import image_1 from "../images/image_1.png";
import image_2 from "../images/image_2.png";
import image_3 from "../images/image_3.png";
import image_4 from "../images/image_4.png";

const Banner = () => {

  const imagesCol1 = [image_1, image_2, image_3];
  const imagesCol2 = [image_1, image_2, image_4];

  return (
    <div className="banner">
      {/* Head line for buttons and text */}
      <div className="headline">

        <div className="circle__headline"></div>

        <h1> Build Your Own AI-Powered <br /> Coding Assistant </h1>
        <p> Now with login, registration, and full documentation. </p>

        <div className="buttons__headline">
            <button type="button" className="buttons__get"> <a target="_blank" href="https://pay.kiwify.com.br/mT9GzZk"> Get Full Access for $50 </a> </button>
            <button type="button" className="buttons__discord"> Discord Community </button>
        </div>
      </div>

      {/* Image Placeholder */}
      <div className="image__placeholder">
       <div className="images_column">
        <div className="col_1 scroll-up">
          {[...imagesCol1, ...imagesCol1].map((img, idx) => (
              <img key={`up-${idx}`} src={img} alt="..." />
          ))}
        </div>
        <div className="col_2 scroll-down">
          {[...imagesCol2, ...imagesCol2].map((img, idx) => (
              <img key={`down-${idx}`} src={img} alt="..." />
          ))}
        </div>
      </div>

      </div>
    </div>
  )
}

export default Banner;
