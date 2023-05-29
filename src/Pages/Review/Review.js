import React from "react";
import './Review.css'

const Review = () => {
  return (
    <div>
      <div className="one-review container-1280">
        <div className="one-review__inner">
          <div className="one-review__picture">
            <picture>
              <source
                data-srcset="https://cdn-landing.snov.io/images/pages/index/Luiz-Octavio-Maule.webp"
                srcSet="https://cdn-landing.snov.io/images/pages/index/Luiz-Octavio-Maule.webp"
                type="image/webp"
              />
              <img
                className=" lazyloaded"
                data-src="https://cdn-landing.snov.io/images/pages/index/Luiz-Octavio-Maule.png"
                src="https://cdn-landing.snov.io/images/pages/index/Luiz-Octavio-Maule.png"
                alt="Luiz Octavio Maule Reis, <span>CEO of Populus Sales</span>"
                width={403}
                height={293}
              />
            </picture>
          </div>
          <div className="one-review__text">
            <div className="one-review__text-description">
              <h2>
                “Snov.io is the most complete platform for prospecting and cold
                outreach. It speeds up the process and turns possible future
                revenue into actual present.”
              </h2>
            </div>
            <div className="one-review__text-author">
              <p>
                Luiz Octavio Maule Reis, <span>CEO of Populus Sales</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
