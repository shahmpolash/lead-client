import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer" id="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-top__row">
              <div className="footer-top__col">
                <div className="footer-top__col-title">
                  <p>Product</p>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9998 16.0003C11.7661 16.0007 11.5397 15.9194 11.3598 15.7703L5.35979 10.7703C5.15557 10.6005 5.02715 10.3566 5.00277 10.0922C4.97839 9.82777 5.06005 9.56449 5.22979 9.36028C5.39953 9.15606 5.64344 9.02763 5.90786 9.00325C6.17229 8.97888 6.43557 9.06054 6.63979 9.23028L11.9998 13.7103L17.3598 9.39028C17.4621 9.30721 17.5798 9.24518 17.7061 9.20775C17.8324 9.17031 17.9649 9.15822 18.096 9.17216C18.227 9.1861 18.354 9.2258 18.4696 9.28897C18.5853 9.35214 18.6873 9.43755 18.7698 9.54028C18.8614 9.6431 18.9307 9.76372 18.9735 9.8946C19.0163 10.0255 19.0316 10.1638 19.0185 10.3008C19.0053 10.4379 18.964 10.5708 18.8971 10.6911C18.8303 10.8115 18.7392 10.9167 18.6298 11.0003L12.6298 15.8303C12.4447 15.9558 12.2229 16.0156 11.9998 16.0003Z"
                      fill="#2E2151"
                    />
                  </svg>
                </div>
                <div className="footer-top__col-links">
                  <a
                    className="footer-top__col-links-item"
                    href="/email-finder"
                  >
                    <span>Email Finder</span>
                  </a>
                  <a
                    className="footer-top__col-links-item"
                    href="/email-drip-campaigns"
                  >
                    <span>Email Drip Campaigns</span>
                  </a>
                  <a
                    className="footer-top__col-links-item"
                    href="/email-verifier"
                  >
                    <span>Email Verifier</span>
                  </a>
                  <a
                    className="footer-top__col-links-item"
                    href="/email-warm-up"
                  >
                    <span>Email Warm-up</span>
                  </a>
                  <a className="footer-top__col-links-item" href="/sales-crm">
                    <span>Sales CRM</span>
                  </a>
                  <a
                    className="footer-top__col-links-item"
                    href="/email-tracker"
                  >
                    <span>Email Tracker</span>
                  </a>
                  <a
                    className="footer-top__col-links-item"
                    href="https://app.snov.io/techcheck"
                  >
                    <span>Technology Checker</span>
                  </a>
                  <a
                    className="footer-top__col-links-item"
                    href="/integrations"
                  >
                    <span>Integrations</span>
                  </a>
                  <a className="footer-top__col-links-item" href="/api">
                    <span>API</span>
                  </a>
                </div>
              </div>
              <div className="footer-top__col">
                <div className="footer-top__col-title">
                  <p>Chrome Extensions</p>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9998 16.0003C11.7661 16.0007 11.5397 15.9194 11.3598 15.7703L5.35979 10.7703C5.15557 10.6005 5.02715 10.3566 5.00277 10.0922C4.97839 9.82777 5.06005 9.56449 5.22979 9.36028C5.39953 9.15606 5.64344 9.02763 5.90786 9.00325C6.17229 8.97888 6.43557 9.06054 6.63979 9.23028L11.9998 13.7103L17.3598 9.39028C17.4621 9.30721 17.5798 9.24518 17.7061 9.20775C17.8324 9.17031 17.9649 9.15822 18.096 9.17216C18.227 9.1861 18.354 9.2258 18.4696 9.28897C18.5853 9.35214 18.6873 9.43755 18.7698 9.54028C18.8614 9.6431 18.9307 9.76372 18.9735 9.8946C19.0163 10.0255 19.0316 10.1638 19.0185 10.3008C19.0053 10.4379 18.964 10.5708 18.8971 10.6911C18.8303 10.8115 18.7392 10.9167 18.6298 11.0003L12.6298 15.8303C12.4447 15.9558 12.2229 16.0156 11.9998 16.0003Z"
                      fill="#2E2151"
                    />
                  </svg>
                </div>
                <div className="footer-top__col-links">
                  <a className="footer-top__col-links-item" href="/extension">
                    <span>LI Prospect Finder</span>
                  </a>
                  <a
                    className="footer-top__col-links-item"
                    href="https://chrome.google.com/webstore/detail/email-finder-by-snovio/einnffiilpmgldkapbikhkeicohlaapj"
                  >
                    <span>Email Finder Extension</span>
                  </a>
                  <a
                    className="footer-top__col-links-item"
                    href="https://chrome.google.com/webstore/detail/email-verifier-by-snovio/hlbhaaegomldlibkeiiifaejlciaifmj"
                  >
                    <span>Email Verifier Extension</span>
                  </a>
                  <a
                    className="footer-top__col-links-item"
                    href="https://chrome.google.com/webstore/detail/unlimited-email-tracker-b/gojogohjgpelafgaeejgelmplndppifh"
                  >
                    <span>Email Tracker Extension</span>
                  </a>
                  <a
                    className="footer-top__col-links-item"
                    href="https://chrome.google.com/webstore/detail/website-technology-checke/phealodnoblgkcfbhpdebpihdbfmggpi"
                  >
                    <span>Technology Checker Extension</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*zh only content START*/}
          <div className="footer-bottom">
            <div className="footer-bottom__box">
              <div className="footer-bottom__box-logo">
                <a href="/">
                  <svg
                    width={116}
                    height={30}
                    viewBox="0 0 116 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.62109 27.2256V21.9045C6.91631 23.4248 9.70458 24.185 11.7324 24.185C14.3939 24.185 15.6613 23.1714 15.6613 21.271C15.6613 20.2575 15.0276 19.4973 13.887 18.6104C13.38 18.2304 12.2394 17.5969 10.465 16.8367C8.69066 16.0766 7.42327 15.3164 6.66284 14.5562C4.88849 13.0359 3.87457 11.0088 3.87457 8.72832C3.87457 6.44783 4.63501 4.54743 6.28262 3.15379C7.93023 1.76016 10.2115 1 13.1265 1C15.5346 1 18.1961 1.63347 21.2379 2.90041L19.3368 7.33469C16.6752 6.32114 14.7741 5.68767 13.38 5.68767C11.9859 5.81436 10.972 6.06775 10.465 6.57453C9.83132 7.0813 9.57784 7.58808 9.57784 8.22155C9.57784 8.85501 9.70458 9.36179 9.95806 9.74187C10.2115 10.122 10.5918 10.502 11.0987 10.8821C11.6057 11.2622 12.9998 11.8957 15.1544 13.0359C17.4357 14.0495 18.9565 15.1897 19.9705 16.4566C20.9844 17.7236 21.3646 19.1172 21.3646 20.8909C21.3646 23.2981 20.4774 25.3252 18.7031 26.7188C16.9287 28.1125 14.5207 28.8726 11.4789 28.8726C8.43719 28.8726 5.9024 28.3659 3.62109 27.2256Z"
                      fill="#2E2151"
                    />
                    <path
                      d="M25.8005 28.4926V7.71477H30.1096L30.87 10.3753H31.1235C32.3909 8.34824 34.5455 7.33469 37.4605 7.33469C39.8685 7.33469 41.6429 7.96816 42.9103 9.2351C44.1777 10.502 44.9381 12.5291 44.9381 14.9363V28.4926H39.2348V16.4566C39.2348 14.9363 38.9814 13.7961 38.4744 13.0359C37.9674 12.2757 37.0803 11.8957 35.9396 11.8957C34.4187 11.8957 33.1513 12.4024 32.5176 13.416C31.884 14.4295 31.5037 16.2033 31.5037 18.6104V28.3659L25.8005 28.4926Z"
                      fill="#2E2151"
                    />
                    <path
                      d="M49.5007 18.1037C49.5007 14.6829 50.3878 12.0224 52.1622 10.2486C53.9365 8.34824 56.3446 7.33469 59.6398 7.33469C61.6676 7.33469 63.442 7.71477 64.8361 8.60163C66.357 9.48848 67.4976 10.7554 68.3848 12.2757C69.1452 13.9228 69.6522 15.8232 69.6522 17.977C69.6522 21.3977 68.765 24.0583 66.9907 25.9587C65.2163 27.8591 62.6815 28.8726 59.5131 28.8726C57.4852 28.8726 55.7109 28.4926 54.19 27.6057C52.6691 26.7188 51.5285 25.4519 50.6413 23.8049C49.8809 22.1579 49.5007 20.2575 49.5007 18.1037ZM56.2178 13.416C55.5841 14.4295 55.2039 15.9499 55.2039 17.977C55.2039 20.0041 55.5841 21.6511 56.2178 22.6646C56.8515 23.6782 57.9922 24.185 59.5131 24.185C61.0339 24.185 62.1746 23.6782 62.8083 22.6646C63.442 21.6511 63.8222 20.1308 63.8222 17.977C63.8222 15.9499 63.442 14.4295 62.8083 13.416C62.1746 12.4024 61.0339 11.8957 59.5131 11.8957C57.9922 11.8957 56.9783 12.4024 56.2178 13.416Z"
                      fill="#2E2151"
                    />
                    <path
                      d="M70.5395 7.71476H76.4962C78.1959 12.6525 81.5658 22.5379 81.5658 22.5379C81.5658 22.5379 84.927 12.0779 86.3819 7.71476H92.3386L84.2273 28.4925H78.3973L70.5395 7.71476Z"
                      fill="#2E2151"
                    />
                    <g opacity="0.5">
                      <path
                        d="M92.5933 28.4933L95.635 14.6837H99.3104L96.3954 28.4933H92.5933ZM96.142 11.3896C96.142 10.6295 96.3954 10.1227 96.7757 9.74262C97.1559 9.36253 97.6628 9.23584 98.4233 9.23584C99.4372 9.23584 100.071 9.74261 100.071 10.7562C100.071 11.3896 99.9441 11.8964 99.5639 12.4032C99.1837 12.7833 98.8035 13.0367 98.0431 13.0367C96.7757 12.91 96.142 12.4032 96.142 11.3896Z"
                        fill="#2E2151"
                      />
                      <path
                        d="M102.225 27.3531C101.212 26.3395 100.831 25.0726 100.831 23.4256C100.831 21.7785 101.085 20.2582 101.718 18.8646C102.352 17.471 103.113 16.4574 104.253 15.6972C105.394 14.9371 106.661 14.557 108.309 14.557C109.83 14.557 111.097 15.0638 111.984 16.0773C112.872 17.0909 113.379 18.3578 113.379 20.1315C113.379 21.9052 113.125 23.4256 112.491 24.6925C111.858 25.9594 111.097 27.0997 109.957 27.8598C108.816 28.62 107.549 29.0001 106.028 29.0001C104.507 29.0001 103.239 28.2399 102.225 27.3531ZM104.507 23.4256C104.507 24.9459 105.14 25.706 106.408 25.706C107.042 25.706 107.549 25.4527 108.055 24.9459C108.562 24.4391 108.943 23.6789 109.196 22.7921C109.45 21.9052 109.576 20.8917 109.576 19.8781C109.576 18.2311 108.943 17.471 107.802 17.471C107.168 17.471 106.661 17.7243 106.154 18.2311C105.647 18.7379 105.267 19.4981 105.014 20.3849C104.76 21.3985 104.507 22.412 104.507 23.4256Z"
                        fill="#2E2151"
                      />
                    </g>
                  </svg>
                </a>
              </div>
              <div className="footer-bottom__box-copyright">
                <p>Copyright © 2023 by Snov.io. All rights reserved.</p>
              </div>
            </div>
            <div className="footer-bottom__socials">
              <a
                className="footer-bottom__socials-item footer-bottom__socials-item-facebook"
                href="https://www.facebook.com/snovioplatform/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 12.067C0 18.033 4.333 22.994 10 24V15.333H7V12H10V9.333C10 6.333 11.933 4.667 14.667 4.667C15.533 4.667 16.467 4.8 17.333 4.933V8H15.8C14.333 8 14 8.733 14 9.667V12H17.2L16.667 15.333H14V24C19.667 22.994 24 18.034 24 12.067C24 5.43 18.6 0 12 0C5.4 0 0 5.43 0 12.067Z"
                    fill="#7D7A85"
                  />
                </svg>
              </a>
              <a
                className="footer-bottom__socials-item footer-bottom__socials-item-twitter"
                href="https://twitter.com/snov_io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.643 4.93659C22.808 5.30659 21.911 5.55659 20.968 5.66959C21.941 5.08738 22.669 4.17105 23.016 3.09159C22.1019 3.63458 21.1014 4.01678 20.058 4.22159C19.3564 3.47245 18.4271 2.97591 17.4143 2.80906C16.4016 2.64221 15.3621 2.81438 14.4572 3.29884C13.5524 3.7833 12.8328 4.55295 12.4102 5.48829C11.9875 6.42363 11.8855 7.47234 12.12 8.47159C10.2677 8.37858 8.45564 7.89714 6.80144 7.05849C5.14723 6.21985 3.68785 5.04275 2.51801 3.60359C2.11801 4.29359 1.88801 5.09359 1.88801 5.94559C1.88757 6.71258 2.07644 7.46783 2.43789 8.14432C2.79934 8.82081 3.32217 9.39763 3.96001 9.82359C3.22029 9.80005 2.49688 9.60017 1.85001 9.24059V9.30059C1.84994 10.3763 2.22204 11.419 2.90319 12.2516C3.58434 13.0842 4.53258 13.6555 5.58701 13.8686C4.9008 14.0543 4.18135 14.0817 3.48301 13.9486C3.78051 14.8742 4.36001 15.6836 5.14038 16.2635C5.92075 16.8434 6.86293 17.1648 7.83501 17.1826C6.18484 18.478 4.1469 19.1807 2.04901 19.1776C1.67739 19.1777 1.30609 19.156 0.937012 19.1126C3.06649 20.4818 5.54535 21.2084 8.07701 21.2056C16.647 21.2056 21.332 14.1076 21.332 7.95159C21.332 7.75159 21.327 7.54959 21.318 7.34959C22.2293 6.69056 23.0159 5.87448 23.641 4.93959L23.643 4.93659Z"
                    fill="#7D7A85"
                  />
                </svg>
              </a>
              <a
                className="footer-bottom__socials-item footer-bottom__socials-item-youtube"
                href="https://www.youtube.com/channel/UCfvMUI2tXgc0Pcjk0hF5pSw/videos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_5666_11482)">
                    <path
                      d="M23.5001 6.50708C23.3642 6.02231 23.0995 5.58342 22.7341 5.23708C22.3584 4.88008 21.8979 4.62471 21.3961 4.49508C19.5181 4.00008 11.9941 4.00008 11.9941 4.00008C8.85746 3.96439 5.72156 4.12135 2.60413 4.47008C2.10232 4.60929 1.64269 4.87036 1.26613 5.23008C0.896129 5.58608 0.628129 6.02508 0.488129 6.50608C0.151822 8.31782 -0.0115791 10.1574 0.000128902 12.0001C-0.0118711 13.8411 0.151129 15.6801 0.488129 17.4941C0.625129 17.9731 0.892129 18.4101 1.26313 18.7631C1.63413 19.1161 2.09613 19.3711 2.60413 19.5061C4.50713 20.0001 11.9941 20.0001 11.9941 20.0001C15.1348 20.0358 18.2747 19.8789 21.3961 19.5301C21.8979 19.4004 22.3584 19.1451 22.7341 18.7881C23.0994 18.4418 23.3638 18.0029 23.4991 17.5181C23.8442 15.707 24.012 13.8667 24.0001 12.0231C24.0261 10.1717 23.8585 8.32264 23.5001 6.50608V6.50708ZM9.60213 15.4241V8.57708L15.8621 12.0011L9.60213 15.4241Z"
                      fill="#7D7A85"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5666_11482">
                      <rect width={24} height={24} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                className="footer-bottom__socials-item footer-bottom__socials-item-telegram"
                href="https://t.me/snovioupdates"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 12C24 18.627 18.627 24 12 24C5.373 24 0 18.627 0 12C0 5.373 5.373 0 12 0C18.627 0 24 5.373 24 12ZM12.43 8.859C11.263 9.344 8.93 10.349 5.432 11.873C4.864 12.099 4.566 12.32 4.539 12.536C4.493 12.902 4.951 13.046 5.573 13.241C5.658 13.268 5.746 13.295 5.836 13.325C6.449 13.524 7.273 13.757 7.701 13.766C8.09 13.774 8.524 13.614 9.003 13.286C12.271 11.079 13.958 9.964 14.064 9.94C14.139 9.923 14.243 9.901 14.313 9.964C14.383 10.026 14.376 10.144 14.369 10.176C14.323 10.369 12.529 12.038 11.599 12.902C11.309 13.171 11.104 13.362 11.062 13.406C10.968 13.503 10.872 13.596 10.78 13.685C10.21 14.233 9.784 14.645 10.804 15.317C11.294 15.64 11.686 15.907 12.077 16.173C12.504 16.464 12.93 16.754 13.482 17.116C13.622 17.208 13.756 17.303 13.887 17.396C14.384 17.751 14.831 18.069 15.383 18.019C15.703 17.989 16.035 17.688 16.203 16.789C16.6 14.663 17.382 10.059 17.563 8.161C17.574 8.00341 17.5673 7.84509 17.543 7.689C17.5285 7.56293 17.4671 7.44693 17.371 7.364C17.228 7.247 17.006 7.222 16.906 7.224C16.455 7.232 15.763 7.473 12.43 8.859Z"
                    fill="#7D7A85"
                  />
                </svg>
              </a>
            </div>
            <div className="footer-bottom__lang language-wrapper">
              <svg
                className="earth"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.201 17.799 1.5 12 1.5C6.201 1.5 1.5 6.201 1.5 12C1.5 17.799 6.201 22.5 12 22.5ZM12 3C12.774 3 13.7122 3.711 14.5012 5.42025C14.781 6.02775 15.0247 6.7275 15.2213 7.5H8.77875C8.97525 6.7275 9.219 6.027 9.49875 5.42025C10.2878 3.711 11.226 3 12 3ZM8.1375 4.79175C7.77 5.58675 7.4655 6.50025 7.23675 7.5H4.20375C5.24211 5.70503 6.86657 4.32209 8.80425 3.5835C8.55141 3.96846 8.32826 4.37213 8.13675 4.791L8.1375 4.79175ZM6.9585 9C6.81815 9.99381 6.74847 10.9963 6.75 12C6.75 13.0395 6.82275 14.0475 6.95925 15H3.51225C3.17215 14.0364 2.99891 13.0219 3 12C3 10.9485 3.18 9.93825 3.51225 9H6.95925H6.9585ZM7.236 16.5C7.46475 17.4998 7.76925 18.4132 8.136 19.2083C8.33325 19.6357 8.556 20.0422 8.8035 20.4158C6.86625 19.6772 5.2421 18.2945 4.20375 16.5H7.2375H7.236ZM8.77875 16.5H15.2197C15.0437 17.2138 14.8027 17.9099 14.4998 18.5798C13.713 20.289 12.7747 21 12 21C11.2253 21 10.2878 20.289 9.49875 18.5798C9.19584 17.9099 8.95483 17.2138 8.77875 16.5ZM15.5235 15H8.475C8.32323 14.0072 8.24801 13.0043 8.25 12C8.25 10.9447 8.33025 9.936 8.475 9H15.525C15.6698 9.936 15.75 10.9447 15.75 12C15.75 13.0553 15.6698 14.064 15.525 15H15.5235ZM16.7625 16.5H19.7955C18.757 18.2947 17.1325 19.6773 15.195 20.4158C15.4425 20.0422 15.6652 19.6357 15.8625 19.2083C16.2292 18.4132 16.5338 17.4998 16.7625 16.5ZM20.487 15H17.04C17.1765 14.0475 17.2493 13.0395 17.2493 12C17.2493 10.9605 17.1765 9.9525 17.04 9H20.487C20.8274 9.96355 21.0008 10.9781 21 12C21 13.0515 20.82 14.0618 20.4877 15H20.487ZM15.1957 3.5835C17.1334 4.32209 18.7579 5.70503 19.7962 7.5H16.7625C16.5338 6.50025 16.2292 5.58675 15.8625 4.79175C15.671 4.37288 15.4478 3.96921 15.195 3.58425L15.1957 3.5835Z"
                  fill="#2E2151"
                />
              </svg>
              <div className="footer-bottom__lang-change language-change">
                <a
                  className="active"
                  data-lang="en"
                  href="https://snov.io/?lang=en"
                >
                  English
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.7069 5.29279C16.8944 5.48031 16.9997 5.73462 16.9997 5.99979C16.9997 6.26495 16.8944 6.51926 16.7069 6.70679L8.70692 14.7068C8.51939 14.8943 8.26508 14.9996 7.99992 14.9996C7.73475 14.9996 7.48045 14.8943 7.29292 14.7068L3.29292 10.7068C3.11076 10.5182 3.00997 10.2656 3.01224 10.0034C3.01452 9.74119 3.11969 9.49038 3.3051 9.30497C3.49051 9.11956 3.74132 9.01439 4.00352 9.01211C4.26571 9.00983 4.51832 9.11063 4.70692 9.29279L7.99992 12.5858L15.2929 5.29279C15.4804 5.10532 15.7348 5 15.9999 5C16.2651 5 16.5194 5.10532 16.7069 5.29279Z"
                      fill="#7358EB"
                    />
                  </svg>
                </a>
                <a data-lang="br" href="https://snov.io/br/?lang=br">
                  Português
                </a>
                <a data-lang="zh" href="https://snovio.cn/?lang=zh">
                  简体中文
                </a>
                <a data-lang="ua" href="https://snov.io/ua/?lang=ua">
                  Українська
                </a>
                <a data-lang="es" href="https://snov.io/es/?lang=es">
                  Español
                </a>
              </div>
              <div className="current-lang">English</div>
              <svg
                className="icon icon-arrow_down"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00002 5.33347C7.84425 5.33317 7.69329 5.38742 7.57335 5.48681L3.57335 8.82014C3.43721 8.9333 3.35159 9.09591 3.33534 9.27219C3.31909 9.44848 3.37353 9.624 3.48669 9.76014C3.59985 9.89629 3.76245 9.9819 3.93874 9.99816C4.11502 10.0144 4.29054 9.95997 4.42669 9.84681L8.00002 6.86014L11.5734 9.74014C11.6415 9.79552 11.72 9.83687 11.8042 9.86183C11.8885 9.88678 11.9768 9.89484 12.0641 9.88555C12.1515 9.87626 12.2361 9.84979 12.3132 9.80768C12.3903 9.76556 12.4583 9.70862 12.5134 9.64014C12.5744 9.57159 12.6206 9.49117 12.6492 9.40393C12.6777 9.31668 12.6879 9.22448 12.6791 9.1331C12.6704 9.04173 12.6428 8.95314 12.5983 8.87291C12.5537 8.79267 12.493 8.7225 12.42 8.66681L8.42002 5.44681C8.29663 5.36313 8.14875 5.32323 8.00002 5.33347Z"
                  fill="#2E2151"
                />
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
