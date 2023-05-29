import React from "react";
import './BottomBanner.css'

const BottomBanner = () => {
  return (
    <div>
      <div className="banner">
        <div className="banner-headlines">
          <h4 className="text-[40px] font-bold">
            Everything you need to grow your business is a click away
          </h4>
          <p className="subtitle">
            Get started absolutely for free and upgrade whenever you want. No
            credit card necessary.
          </p>
        </div>
        <div className="banner-btns">
          <a
            className="banner-btns__item"
            id="signFree"
            href="https://app.snov.io/register?lang=en&signup_source=landing&signup_page=snov.io&cta_type=button"
          >
            Sign up for free
          </a>
          <a
            className="banner-btns__item"
            id="requestDemo"
            href="https://calendly.com/d/2jk-ykz-nzm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Talk to sales
          </a>
        </div>
        <div className="banner-question">
          <p>Have a question? Ask in the live chat on the right!</p>
        </div>
        <svg
          className="half-circle half-circle-top"
          width={80}
          height={80}
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-3.49691e-06 80C44.1828 80 80 44.1828 80 0L0 -3.49691e-06L-3.49691e-06 80Z"
            fill="#33FFA9"
          />
        </svg>
        <svg
          className="half-circle half-circle-bottom"
          width={88}
          height={88}
          viewBox="0 0 88 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M88 -3.8466e-06C39.3989 -1.72218e-06 -2.12442e-06 39.3989 0 88L88 88L88 -3.8466e-06Z"
            fill="#FF33AD"
          />
        </svg>
      </div>
    </div>
  );
};

export default BottomBanner;
