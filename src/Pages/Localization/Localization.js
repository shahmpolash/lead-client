import React from "react";
import "./Localization.css";

const Localization = () => {
  return (
    <div>
      <div className="localization-info container-1280">
        <div className="localization-info__inner">
          <div className="localization-info__left">
            <div className="localization-info__left-title">
              <h3 className="h3 text-[40px] font-bold">Be more productive, in your own language</h3>
            </div>
            <div className="localization-info__left-description">
              <p>
                Snov.io is localized into 5 languages for your convenience. Grow
                your business with tools in English, Chinese, Portuguese,
                Spanish, and Ukrainian, with more languages coming soon.
              </p>
            </div>
          </div>
          <div className="localization-info__right">
            <picture>
              <source
                data-srcset="https://cdn-landing.snov.io/images/pages/index/localization-image.webp"
                srcSet="https://cdn-landing.snov.io/images/pages/index/localization-image.webp"
                type="image/webp"
              />
              <img
                className=" lazyloaded"
                data-src="https://cdn-landing.snov.io/images/pages/index/localization-image.png"
                src="https://cdn-landing.snov.io/images/pages/index/localization-image.png"
                alt="Be more productive, in your own language"
                width={403}
                height={520}
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Localization;
