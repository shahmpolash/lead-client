import React from "react";
import './HeroBanner.css'

const HeroBanner = () => {
  return (
    <div>
      <div className="hero-big main-block">
        <div className="hero-big__inner">
          <div className="hero-big__top">
            <h1>More leads. More sales. More revenue.</h1>
            <p className="hero-big__top-subtitle">
              Scale your business and engage leads better with the sales toolbox
              and CRM platform that deliver growth.
            </p>
          </div>
          <div className="hero-big__middle">
            <a
              className="hero-big__middle-btn"
              id="freeAccount"
              href="https://app.snov.io/register?lang=en&signup_source=landing&signup_page=snov.io&cta_type=button"
            >
              Get free account
            </a>
            <span className="hero-big__middle-btn" id="watchDemo">
              <svg
                width={11}
                height={12}
                viewBox="0 0 11 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.2518 4.88569L1.89567 0.322494C1.54885 0.11161 1.19939 0 0.908929 0C0.347374 0 0 0.40001 0 1.06957V10.932C0 11.6008 0.346936 12 0.907178 12C1.19808 12 1.54195 11.8883 1.88954 11.6768L10.2492 7.11372C10.7324 6.81979 11 6.42425 11 5.99947C11.0001 5.57498 10.7356 5.17953 10.2518 4.88569Z"
                  fill="#7357EB"
                />
              </svg>
              Watch demo <span>(2min)</span>
            </span>
          </div>
          <div className="hero-big__bottom">
            <div className="hero-big__bottom-info">
              <div className="hero-big__bottom-info-item">
                <p>
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 5C0 4.33696 0.263392 3.70107 0.732233 3.23223C1.20107 2.76339 1.83696 2.5 2.5 2.5H17.5C18.163 2.5 18.7989 2.76339 19.2678 3.23223C19.7366 3.70107 20 4.33696 20 5V15C20 15.663 19.7366 16.2989 19.2678 16.7678C18.7989 17.2366 18.163 17.5 17.5 17.5H2.5C1.83696 17.5 1.20107 17.2366 0.732233 16.7678C0.263392 16.2989 0 15.663 0 15V5ZM2.5 3.75C2.16848 3.75 1.85054 3.8817 1.61612 4.11612C1.3817 4.35054 1.25 4.66848 1.25 5V6.25H18.75V5C18.75 4.66848 18.6183 4.35054 18.3839 4.11612C18.1495 3.8817 17.8315 3.75 17.5 3.75H2.5ZM18.75 8.75H1.25V15C1.25 15.3315 1.3817 15.6495 1.61612 15.8839C1.85054 16.1183 2.16848 16.25 2.5 16.25H17.5C17.8315 16.25 18.1495 16.1183 18.3839 15.8839C18.6183 15.6495 18.75 15.3315 18.75 15V8.75Z"
                      fill="white"
                    />
                    <path
                      d="M2.5 12.5C2.5 12.1685 2.6317 11.8505 2.86612 11.6161C3.10054 11.3817 3.41848 11.25 3.75 11.25H5C5.33152 11.25 5.64946 11.3817 5.88388 11.6161C6.1183 11.8505 6.25 12.1685 6.25 12.5V13.75C6.25 14.0815 6.1183 14.3995 5.88388 14.6339C5.64946 14.8683 5.33152 15 5 15H3.75C3.41848 15 3.10054 14.8683 2.86612 14.6339C2.6317 14.3995 2.5 14.0815 2.5 13.75V12.5Z"
                      fill="white"
                    />
                  </svg>
                  No card required
                </p>
              </div>
              <div className="hero-big__bottom-info-item">
                <p>
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_5666_8813)">
                      <path
                        d="M10 5C10.1658 5 10.3247 5.06585 10.4419 5.18306C10.5592 5.30027 10.625 5.45924 10.625 5.625V7.5C10.625 7.66576 10.5592 7.82473 10.4419 7.94194C10.3247 8.05915 10.1658 8.125 10 8.125C9.83424 8.125 9.67527 8.05915 9.55806 7.94194C9.44085 7.82473 9.375 7.66576 9.375 7.5V5.625C9.375 5.45924 9.44085 5.30027 9.55806 5.18306C9.67527 5.06585 9.83424 5 10 5ZM4.665 7.165C4.7822 7.04783 4.94115 6.98201 5.10687 6.98201C5.2726 6.98201 5.43155 7.04783 5.54875 7.165L6.6925 8.3075C6.75061 8.36561 6.79671 8.4346 6.82815 8.51052C6.8596 8.58644 6.87579 8.66782 6.87579 8.75C6.87579 8.83218 6.8596 8.91356 6.82815 8.98948C6.79671 9.0654 6.75061 9.13439 6.6925 9.1925C6.63439 9.25061 6.5654 9.29671 6.48948 9.32815C6.41356 9.3596 6.33218 9.37579 6.25 9.37579C6.16782 9.37579 6.08644 9.3596 6.01052 9.32815C5.9346 9.29671 5.86561 9.25061 5.8075 9.1925L4.665 8.04875C4.54783 7.93155 4.48201 7.7726 4.48201 7.60687C4.48201 7.44115 4.54783 7.2822 4.665 7.165ZM2.5 12.5C2.5 12.3342 2.56585 12.1753 2.68306 12.0581C2.80027 11.9408 2.95924 11.875 3.125 11.875H5.1075C5.27326 11.875 5.43223 11.9408 5.54944 12.0581C5.66665 12.1753 5.7325 12.3342 5.7325 12.5C5.7325 12.6658 5.66665 12.8247 5.54944 12.9419C5.43223 13.0592 5.27326 13.125 5.1075 13.125H3.125C2.95924 13.125 2.80027 13.0592 2.68306 12.9419C2.56585 12.8247 2.5 12.6658 2.5 12.5ZM14.375 12.5C14.375 12.3342 14.4408 12.1753 14.5581 12.0581C14.6753 11.9408 14.8342 11.875 15 11.875H16.875C17.0408 11.875 17.1997 11.9408 17.3169 12.0581C17.4342 12.1753 17.5 12.3342 17.5 12.5C17.5 12.6658 17.4342 12.8247 17.3169 12.9419C17.1997 13.0592 17.0408 13.125 16.875 13.125H15C14.8342 13.125 14.6753 13.0592 14.5581 12.9419C14.4408 12.8247 14.375 12.6658 14.375 12.5ZM15.3175 7.1925C15.2309 7.10636 15.1151 7.05596 14.993 7.05133C14.871 7.04669 14.7516 7.08817 14.6588 7.1675L9.43375 11.6375C9.31201 11.7401 9.21316 11.8671 9.14358 12.0102C9.07401 12.1534 9.03526 12.3096 9.02984 12.4687C9.02442 12.6278 9.05246 12.7863 9.11214 12.9338C9.17182 13.0814 9.26181 13.2148 9.37629 13.3254C9.49077 13.436 9.62719 13.5214 9.77674 13.576C9.92628 13.6305 10.0856 13.6531 10.2444 13.6422C10.4032 13.6314 10.558 13.5873 10.6987 13.5128C10.8394 13.4384 10.9629 13.3352 11.0612 13.21L15.3538 7.83875C15.4284 7.74527 15.466 7.62754 15.4593 7.50807C15.4526 7.38861 15.4021 7.27581 15.3175 7.19125V7.1925Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.63479e-06 12.4998C0.00131335 11.0446 0.320223 9.60713 0.934472 8.28787C1.54872 6.96861 2.44351 5.79931 3.55636 4.8616C4.66922 3.92389 5.97333 3.24037 7.37765 2.85875C8.78197 2.47713 10.2527 2.40662 11.6871 2.65212C13.1214 2.89763 14.485 3.45325 15.6824 4.28018C16.8799 5.10712 17.8825 6.18545 18.6201 7.43989C19.3578 8.69433 19.8127 10.0947 19.9533 11.5431C20.0938 12.9915 19.9165 14.4532 19.4338 15.8261C18.8813 17.3923 17.1275 17.8286 15.7688 17.3886C14.1363 16.8598 11.8438 16.2498 10 16.2498C8.15751 16.2498 5.86251 16.8598 4.23126 17.3886C2.87251 17.8286 1.11876 17.3923 0.566257 15.8261C0.190184 14.7575 -0.00129928 13.6327 6.63479e-06 12.4998ZM10 3.74981C8.60047 3.74945 7.22127 4.0848 5.97815 4.72773C4.73502 5.37065 3.66426 6.30238 2.85571 7.44473C2.04717 8.58708 1.52444 9.9067 1.33139 11.2929C1.13834 12.679 1.28061 14.0913 1.74626 15.4111C2.00001 16.1298 2.90001 16.5061 3.84626 16.1986C5.49626 15.6661 7.94751 14.9998 10 14.9998C12.0525 14.9998 14.505 15.6648 16.1538 16.1998C17.1 16.5061 18 16.1298 18.2538 15.4111C18.7194 14.0913 18.8617 12.679 18.6686 11.2929C18.4756 9.9067 17.9528 8.58708 17.1443 7.44473C16.3358 6.30238 15.265 5.37065 14.0219 4.72773C12.7787 4.0848 11.3995 3.74945 10 3.74981Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5666_8813">
                        <rect width={20} height={20} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Quick set-up
                </p>
              </div>
              <div className="hero-big__bottom-info-item">
                <p>
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_5666_8821)">
                      <path
                        d="M10 1.25C8.3424 1.25 6.75269 1.90848 5.58058 3.08058C4.40848 4.25269 3.75 5.8424 3.75 7.5V8.75H5C5.33152 8.75 5.64946 8.8817 5.88388 9.11612C6.1183 9.35054 6.25 9.66848 6.25 10V13.75C6.25 14.0815 6.1183 14.3995 5.88388 14.6339C5.64946 14.8683 5.33152 15 5 15H3.75C3.41848 15 3.10054 14.8683 2.86612 14.6339C2.6317 14.3995 2.5 14.0815 2.5 13.75V7.5C2.5 6.51509 2.69399 5.53982 3.0709 4.62987C3.44781 3.71993 4.00026 2.89314 4.6967 2.1967C5.39314 1.50026 6.21993 0.947814 7.12987 0.570904C8.03982 0.193993 9.01509 0 10 0C10.9849 0 11.9602 0.193993 12.8701 0.570904C13.7801 0.947814 14.6069 1.50026 15.3033 2.1967C15.9997 2.89314 16.5522 3.71993 16.9291 4.62987C17.306 5.53982 17.5 6.51509 17.5 7.5V15C17.5 15.8288 17.1708 16.6237 16.5847 17.2097C15.9987 17.7958 15.2038 18.125 14.375 18.125H11.7075C11.5978 18.315 11.44 18.4728 11.25 18.5825C11.06 18.6922 10.8444 18.75 10.625 18.75H9.375C9.04348 18.75 8.72554 18.6183 8.49112 18.3839C8.2567 18.1495 8.125 17.8315 8.125 17.5C8.125 17.1685 8.2567 16.8505 8.49112 16.6161C8.72554 16.3817 9.04348 16.25 9.375 16.25H10.625C10.8444 16.25 11.06 16.3078 11.25 16.4175C11.44 16.5272 11.5978 16.685 11.7075 16.875H14.375C14.8723 16.875 15.3492 16.6775 15.7008 16.3258C16.0525 15.9742 16.25 15.4973 16.25 15H15C14.6685 15 14.3505 14.8683 14.1161 14.6339C13.8817 14.3995 13.75 14.0815 13.75 13.75V10C13.75 9.66848 13.8817 9.35054 14.1161 9.11612C14.3505 8.8817 14.6685 8.75 15 8.75H16.25V7.5C16.25 6.67924 16.0883 5.86651 15.7742 5.10823C15.4602 4.34994 14.9998 3.66095 14.4194 3.08058C13.8391 2.50022 13.1501 2.03984 12.3918 1.72575C11.6335 1.41166 10.8208 1.25 10 1.25Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5666_8821">
                        <rect width={20} height={20} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Award-winning customer care
                </p>
              </div>
            </div>
            <div className="hero-big__bottom-persons">
              <picture>
                <source
                  data-srcset="https://cdn-landing.snov.io/images/pages/index/persons.webp"
                  srcSet="https://cdn-landing.snov.io/images/pages/index/persons.webp"
                  type="image/webp"
                />
                <img
                  className=" lazyloaded"
                  data-src="https://cdn-landing.snov.io/images/pages/index/persons.png"
                  src="https://cdn-landing.snov.io/images/pages/index/persons.png"
                  alt="persons"
                  width={310}
                  height={88}
                />
              </picture>
            </div>
          </div>
          <svg
            className="half-circle half-circle__top-left"
            width={120}
            height={120}
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-5.24537e-06 120C66.2742 120 120 66.2742 120 0L0 -5.24537e-06L-5.24537e-06 120Z"
              fill="#33FFE7"
            />
          </svg>
          <svg
            className="half-circle half-circle__bottom-left"
            width={140}
            height={140}
            viewBox="0 0 140 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.22392e-05 -1.22392e-05C5.47967e-06 77.3199 62.6801 140 140 140L140 0L1.22392e-05 -1.22392e-05Z"
              fill="white"
            />
          </svg>
          <svg
            className="half-circle half-circle__top-right"
            width={120}
            height={120}
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M120 120C120 53.7258 66.2742 0 0 0V120H120Z"
              fill="#FCDC5C"
            />
          </svg>
          <svg
            className="half-circle half-circle__bottom-right"
            width={124}
            height={124}
            viewBox="0 0 124 124"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M124 2.20918e-06C55.5167 5.20268e-06 -2.9935e-06 55.5167 0 124L124 124L124 2.20918e-06Z"
              fill="#FF34FF"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
