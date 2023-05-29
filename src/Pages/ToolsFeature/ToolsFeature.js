import React from "react";
import './ToolsFeature.css'

const ToolsFeature = () => {
  return (
    <div className="container mx-auto mt-12">
      <div className="tools">
        <div className="tools-inner">
          <div className="tools-top">
            <div className="tools-top__left">
              <div className="tools-top__left-headlines">
                <h2 className="text-[40px] font-bold">
                  A collection of sales tools designed with revenue growth in
                  mind
                </h2>
                <p className="subtitle">
                  Each tool is a powerful solution to a specific sales problem.
                  When used together, they're a gamechanger.
                </p>
              </div>
              <div className="tools-top__left-btn">
                <a href="https://app.snov.io/register?lang=en&signup_source=landing&signup_page=snov.io&cta_type=button">
                  Use for free
                </a>
              </div>
            </div>
            <div className="tools-top__right">
              <div className="tools-top__right-video">
                <div id="watchDemoSecond">
                  <svg
                    className="play-btn"
                    width={30}
                    height={36}
                    viewBox="0 0 30 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.6"
                      d="M30 18L-1.63133e-06 35.3205L-1.17124e-07 0.67949L30 18Z"
                      fill="white"
                    />
                  </svg>
                  <video
                    className="preview-wista"
                    muted="muted"
                    autoPlay
                    loop
                    playsInline
                  >
                    <source
                      src="https://cdn-landing.snov.io/images/pages/index/welcome.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="preview-mask">
                  <svg
                    className="mask"
                    width={293}
                    height={290}
                    viewBox="0 0 293 290"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M293 160C293 71.6344 221.366 0 133 0V160H293Z"
                      fill="#FF487F"
                    />
                    <circle
                      cx={130}
                      cy={160}
                      r={124}
                      fill="black"
                      fillOpacity="0.1"
                      stroke="#FCD84B"
                      strokeWidth={12}
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="tools-bottom">
            <div className="tools-bottom__item">
              <div className="tools-bottom__item-icon">
                <svg
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx={21}
                    cy={21}
                    r="16.5"
                    stroke="#7B67FF"
                    strokeWidth={3}
                  />
                  <path
                    d="M13.5 15H24"
                    stroke="#7B67FF"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.5 21H28.5"
                    stroke="#7B67FF"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.5 27H24"
                    stroke="#7B67FF"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M36.75 36.75L43.5 43.5"
                    stroke="#7B67FF"
                    strokeWidth={3}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="tools-bottom__item-headlines">
                <p className="title">Email Finder</p>
                <p className="subtitle">
                  Find and collect pre-verified leads according to your ideal
                  customer profile
                </p>
              </div>
              <ul className="tools-bottom__item-info">
                <li>Extensive database</li>
                <li>Multiple search options</li>
                <li>Bulk search options</li>
              </ul>
              <a className="tools-bottom__item-link" href="/email-finder">
                Learn more
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 9.99975C2.5 9.77874 2.5878 9.56677 2.74408 9.41049C2.90036 9.25421 3.11232 9.16642 3.33333 9.16642H14.655L10.2433 4.75642C10.1659 4.67894 10.1044 4.58696 10.0625 4.48572C10.0205 4.38449 9.99895 4.27599 9.99895 4.16642C9.99895 4.05684 10.0205 3.94834 10.0625 3.84711C10.1044 3.74588 10.1659 3.6539 10.2433 3.57642C10.3208 3.49894 10.4128 3.43748 10.514 3.39555C10.6153 3.35361 10.7238 3.33203 10.8333 3.33203C10.9429 3.33203 11.0514 3.35361 11.1526 3.39555C11.2539 3.43748 11.3459 3.49894 11.4233 3.57642L17.2567 9.40975C17.3343 9.48716 17.3958 9.57912 17.4379 9.68036C17.4799 9.7816 17.5015 9.89014 17.5015 9.99975C17.5015 10.1094 17.4799 10.2179 17.4379 10.3191C17.3958 10.4204 17.3343 10.5123 17.2567 10.5897L11.4233 16.4231C11.2669 16.5796 11.0546 16.6675 10.8333 16.6675C10.612 16.6675 10.3998 16.5796 10.2433 16.4231C10.0869 16.2666 9.99895 16.0544 9.99895 15.8331C9.99895 15.6118 10.0869 15.3996 10.2433 15.2431L14.655 10.8331H3.33333C3.11232 10.8331 2.90036 10.7453 2.74408 10.589C2.5878 10.4327 2.5 10.2208 2.5 9.99975Z"
                    fill="#2E2151"
                  />
                </svg>
              </a>
            </div>
            <div className="tools-bottom__item">
              <div className="tools-bottom__item-icon">
                <svg
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="4.5"
                    y={9}
                    width={39}
                    height="28.5"
                    rx={5}
                    stroke="#7B67FF"
                    strokeWidth={3}
                  />
                  <path
                    d="M12 19.5L22.41 26.0063C23.3828 26.6143 24.6172 26.6143 25.59 26.0063L36 19.5"
                    stroke="#7B67FF"
                    strokeWidth={3}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="tools-bottom__item-headlines">
                <p className="title">Drip Campaigns</p>
                <p className="subtitle">
                  Scale your sales with personalized email outreach and
                  automated follow-ups
                </p>
              </div>
              <ul className="tools-bottom__item-info">
                <li>Recipient behavior triggers</li>
                <li>Unlimited follow-ups</li>
                <li>Unlimited sender accounts</li>
              </ul>
              <a
                className="tools-bottom__item-link"
                href="/email-drip-campaigns"
              >
                Learn more
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 9.99975C2.5 9.77874 2.5878 9.56677 2.74408 9.41049C2.90036 9.25421 3.11232 9.16642 3.33333 9.16642H14.655L10.2433 4.75642C10.1659 4.67894 10.1044 4.58696 10.0625 4.48572C10.0205 4.38449 9.99895 4.27599 9.99895 4.16642C9.99895 4.05684 10.0205 3.94834 10.0625 3.84711C10.1044 3.74588 10.1659 3.6539 10.2433 3.57642C10.3208 3.49894 10.4128 3.43748 10.514 3.39555C10.6153 3.35361 10.7238 3.33203 10.8333 3.33203C10.9429 3.33203 11.0514 3.35361 11.1526 3.39555C11.2539 3.43748 11.3459 3.49894 11.4233 3.57642L17.2567 9.40975C17.3343 9.48716 17.3958 9.57912 17.4379 9.68036C17.4799 9.7816 17.5015 9.89014 17.5015 9.99975C17.5015 10.1094 17.4799 10.2179 17.4379 10.3191C17.3958 10.4204 17.3343 10.5123 17.2567 10.5897L11.4233 16.4231C11.2669 16.5796 11.0546 16.6675 10.8333 16.6675C10.612 16.6675 10.3998 16.5796 10.2433 16.4231C10.0869 16.2666 9.99895 16.0544 9.99895 15.8331C9.99895 15.6118 10.0869 15.3996 10.2433 15.2431L14.655 10.8331H3.33333C3.11232 10.8331 2.90036 10.7453 2.74408 10.589C2.5878 10.4327 2.5 10.2208 2.5 9.99975Z"
                    fill="#2E2151"
                  />
                </svg>
              </a>
            </div>
            <div className="tools-bottom__item">
              <div className="tools-bottom__item-icon">
                <svg
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5 3.86603C23.4282 3.33013 24.5718 3.33013 25.5 3.86603L40.6865 12.634C41.6147 13.1699 42.1865 14.1603 42.1865 15.2321V32.7679C42.1865 33.8397 41.6147 34.8301 40.6865 35.366L25.5 44.134C24.5718 44.6699 23.4282 44.6699 22.5 44.134L7.31347 35.366C6.38526 34.8301 5.81347 33.8397 5.81347 32.7679V15.2321C5.81347 14.1603 6.38526 13.1699 7.31347 12.634L22.5 3.86603Z"
                    stroke="#7B67FF"
                    strokeWidth={3}
                  />
                  <path
                    d="M15.8093 26.3398L20.052 30.5825L32.7799 17.8546"
                    stroke="#7B67FF"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="tools-bottom__item-headlines">
                <p className="title">Email Verifier</p>
                <p className="subtitle">
                  Reduce bounce rate and keep your database clean with easy
                  7-tier verification
                </p>
              </div>
              <ul className="tools-bottom__item-info">
                <li>Gray-listing bypass</li>
                <li>98% accuracy</li>
                <li>Email verifier API</li>
              </ul>
              <a className="tools-bottom__item-link" href="/email-verifier">
                Learn more
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 9.99975C2.5 9.77874 2.5878 9.56677 2.74408 9.41049C2.90036 9.25421 3.11232 9.16642 3.33333 9.16642H14.655L10.2433 4.75642C10.1659 4.67894 10.1044 4.58696 10.0625 4.48572C10.0205 4.38449 9.99895 4.27599 9.99895 4.16642C9.99895 4.05684 10.0205 3.94834 10.0625 3.84711C10.1044 3.74588 10.1659 3.6539 10.2433 3.57642C10.3208 3.49894 10.4128 3.43748 10.514 3.39555C10.6153 3.35361 10.7238 3.33203 10.8333 3.33203C10.9429 3.33203 11.0514 3.35361 11.1526 3.39555C11.2539 3.43748 11.3459 3.49894 11.4233 3.57642L17.2567 9.40975C17.3343 9.48716 17.3958 9.57912 17.4379 9.68036C17.4799 9.7816 17.5015 9.89014 17.5015 9.99975C17.5015 10.1094 17.4799 10.2179 17.4379 10.3191C17.3958 10.4204 17.3343 10.5123 17.2567 10.5897L11.4233 16.4231C11.2669 16.5796 11.0546 16.6675 10.8333 16.6675C10.612 16.6675 10.3998 16.5796 10.2433 16.4231C10.0869 16.2666 9.99895 16.0544 9.99895 15.8331C9.99895 15.6118 10.0869 15.3996 10.2433 15.2431L14.655 10.8331H3.33333C3.11232 10.8331 2.90036 10.7453 2.74408 10.589C2.5878 10.4327 2.5 10.2208 2.5 9.99975Z"
                    fill="#2E2151"
                  />
                </svg>
              </a>
            </div>
            <div className="tools-bottom__item">
              <div className="tools-bottom__item-icon">
                <svg
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40.5 26.3333C40.5 36.835 33.1159 43.5 24 43.5C19.3674 43.5 15.2561 41.9369 12.3123 39.1033C9.37957 36.2804 7.5 32.0955 7.5 26.6389C7.5 24.0718 7.96855 22.2609 8.62739 20.809C9.27142 19.3898 10.1146 18.2639 11.0614 16.9995C11.1049 16.9414 11.1486 16.8831 11.1925 16.8244C12.1733 15.5134 13.2447 14.0513 14.0031 12.1342C14.7396 10.2727 15.1554 8.05647 15.0448 5.1731C20.0498 7.01822 22.8059 8.86099 24.4323 11.3067C26.1216 13.847 26.7679 17.2912 26.9433 22.7934C26.985 24.1001 27.8725 25.0519 28.9394 25.3244C30.0392 25.6053 31.311 25.1502 31.8927 23.8964C33.9866 19.3825 33.7637 16.6063 33.5979 14.5415C33.5802 14.3207 33.5631 14.1081 33.5496 13.9024C36.184 15.4794 40.5 19.1486 40.5 26.3333Z"
                    stroke="#7B67FF"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="tools-bottom__item-headlines">
                <p className="title">Email Warm-up</p>
                <p className="subtitle">
                  Improve your deliverability and email placement to always land
                  in the lead's Inbox
                </p>
              </div>
              <ul className="tools-bottom__item-info">
                <li>AI conversation generator</li>
                <li>Template-specific warm-up</li>
                <li>Reputation improvement</li>
              </ul>
              <a className="tools-bottom__item-link" href="/email-warm-up">
                Learn more
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 9.99975C2.5 9.77874 2.5878 9.56677 2.74408 9.41049C2.90036 9.25421 3.11232 9.16642 3.33333 9.16642H14.655L10.2433 4.75642C10.1659 4.67894 10.1044 4.58696 10.0625 4.48572C10.0205 4.38449 9.99895 4.27599 9.99895 4.16642C9.99895 4.05684 10.0205 3.94834 10.0625 3.84711C10.1044 3.74588 10.1659 3.6539 10.2433 3.57642C10.3208 3.49894 10.4128 3.43748 10.514 3.39555C10.6153 3.35361 10.7238 3.33203 10.8333 3.33203C10.9429 3.33203 11.0514 3.35361 11.1526 3.39555C11.2539 3.43748 11.3459 3.49894 11.4233 3.57642L17.2567 9.40975C17.3343 9.48716 17.3958 9.57912 17.4379 9.68036C17.4799 9.7816 17.5015 9.89014 17.5015 9.99975C17.5015 10.1094 17.4799 10.2179 17.4379 10.3191C17.3958 10.4204 17.3343 10.5123 17.2567 10.5897L11.4233 16.4231C11.2669 16.5796 11.0546 16.6675 10.8333 16.6675C10.612 16.6675 10.3998 16.5796 10.2433 16.4231C10.0869 16.2666 9.99895 16.0544 9.99895 15.8331C9.99895 15.6118 10.0869 15.3996 10.2433 15.2431L14.655 10.8331H3.33333C3.11232 10.8331 2.90036 10.7453 2.74408 10.589C2.5878 10.4327 2.5 10.2208 2.5 9.99975Z"
                    fill="#2E2151"
                  />
                </svg>
              </a>
            </div>
            <div className="tools-bottom__item">
              <div className="tools-bottom__item-icon">
                <svg
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx={24}
                    cy={24}
                    r="19.5"
                    stroke="#7B67FF"
                    strokeWidth={3}
                  />
                  <path
                    d="M23.4963 36C23.291 36 23.1325 35.9378 23.0205 35.8133C22.9086 35.7067 22.8526 35.5644 22.8526 35.3867V33.52C21.4907 33.4133 20.3433 33.12 19.4104 32.64C18.4776 32.1422 17.7687 31.5467 17.2836 30.8533C16.7985 30.16 16.5373 29.4222 16.5 28.64C16.5 28.4978 16.556 28.3733 16.6679 28.2667C16.7985 28.1422 16.9478 28.08 17.1157 28.08H18.5429C18.7668 28.08 18.9347 28.1333 19.0466 28.24C19.1586 28.3467 19.2332 28.4711 19.2705 28.6133C19.3825 29.04 19.6157 29.4667 19.9701 29.8933C20.3246 30.3022 20.8284 30.6489 21.4813 30.9333C22.153 31.2 23.0112 31.3333 24.056 31.3333C25.6604 31.3333 26.8358 31.0667 27.5821 30.5333C28.347 29.9822 28.7295 29.2533 28.7295 28.3467C28.7295 27.7244 28.5243 27.2267 28.1138 26.8533C27.722 26.4622 27.1157 26.1156 26.2948 25.8133C25.4739 25.5111 24.4104 25.1822 23.1045 24.8267C21.7425 24.4533 20.6138 24.0444 19.7183 23.6C18.8228 23.1556 18.1511 22.6044 17.7034 21.9467C17.2743 21.2889 17.0597 20.4533 17.0597 19.44C17.0597 18.1422 17.5634 17.0311 18.5709 16.1067C19.5784 15.1644 21.0056 14.6133 22.8526 14.4533V12.6133C22.8526 12.4356 22.9086 12.2933 23.0205 12.1867C23.1325 12.0622 23.291 12 23.4963 12H24.5597C24.7463 12 24.8955 12.0622 25.0075 12.1867C25.1381 12.2933 25.2034 12.4356 25.2034 12.6133V14.48C26.4534 14.6222 27.4981 14.9511 28.3377 15.4667C29.1772 15.9822 29.8116 16.5778 30.2407 17.2533C30.6698 17.9289 30.8937 18.5867 30.9123 19.2267C30.9123 19.3511 30.8657 19.4756 30.7724 19.6C30.6791 19.7067 30.5299 19.76 30.3246 19.76H28.8414C28.7108 19.76 28.5709 19.7244 28.4216 19.6533C28.291 19.5822 28.1884 19.4489 28.1138 19.2533C28.0019 18.5244 27.5728 17.9111 26.8265 17.4133C26.0802 16.9156 25.1101 16.6667 23.916 16.6667C22.7034 16.6667 21.7146 16.8889 20.9496 17.3333C20.2034 17.7778 19.8302 18.4711 19.8302 19.4133C19.8302 20.0178 20.0075 20.5244 20.3619 20.9333C20.7164 21.3244 21.2761 21.6711 22.041 21.9733C22.806 22.2756 23.8041 22.5956 25.0354 22.9333C26.528 23.3244 27.75 23.7422 28.7015 24.1867C29.653 24.6133 30.3526 25.1556 30.8004 25.8133C31.2668 26.4533 31.5 27.28 31.5 28.2933C31.5 29.3067 31.2388 30.1867 30.7164 30.9333C30.2127 31.68 29.4851 32.2756 28.5336 32.72C27.6007 33.1644 26.4907 33.44 25.2034 33.5467V35.3867C25.2034 35.5644 25.1381 35.7067 25.0075 35.8133C24.8955 35.9378 24.7463 36 24.5597 36H23.4963Z"
                    fill="#7B67FF"
                  />
                </svg>
              </div>
              <div className="tools-bottom__item-headlines">
                <p className="title">Sales CRM</p>
                <p className="subtitle">
                  Optimize your sales team's workflow with simple yet powerful
                  sales CRM
                </p>
              </div>
              <ul className="tools-bottom__item-info">
                <li>Google Calendar sync</li>
                <li>Multiple pipelines</li>
                <li>Deal loss analytics</li>
              </ul>
              <a className="tools-bottom__item-link" href="/sales-crm">
                Learn more
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 9.99975C2.5 9.77874 2.5878 9.56677 2.74408 9.41049C2.90036 9.25421 3.11232 9.16642 3.33333 9.16642H14.655L10.2433 4.75642C10.1659 4.67894 10.1044 4.58696 10.0625 4.48572C10.0205 4.38449 9.99895 4.27599 9.99895 4.16642C9.99895 4.05684 10.0205 3.94834 10.0625 3.84711C10.1044 3.74588 10.1659 3.6539 10.2433 3.57642C10.3208 3.49894 10.4128 3.43748 10.514 3.39555C10.6153 3.35361 10.7238 3.33203 10.8333 3.33203C10.9429 3.33203 11.0514 3.35361 11.1526 3.39555C11.2539 3.43748 11.3459 3.49894 11.4233 3.57642L17.2567 9.40975C17.3343 9.48716 17.3958 9.57912 17.4379 9.68036C17.4799 9.7816 17.5015 9.89014 17.5015 9.99975C17.5015 10.1094 17.4799 10.2179 17.4379 10.3191C17.3958 10.4204 17.3343 10.5123 17.2567 10.5897L11.4233 16.4231C11.2669 16.5796 11.0546 16.6675 10.8333 16.6675C10.612 16.6675 10.3998 16.5796 10.2433 16.4231C10.0869 16.2666 9.99895 16.0544 9.99895 15.8331C9.99895 15.6118 10.0869 15.3996 10.2433 15.2431L14.655 10.8331H3.33333C3.11232 10.8331 2.90036 10.7453 2.74408 10.589C2.5878 10.4327 2.5 10.2208 2.5 9.99975Z"
                    fill="#2E2151"
                  />
                </svg>
              </a>
            </div>
            <div className="tools-bottom__item">
              <div className="tools-bottom__item-icon">
                <svg
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33 16.5C33 21.4706 28.9706 25.5 24 25.5C19.0294 25.5 15 21.4706 15 16.5C15 11.5294 19.0294 7.5 24 7.5C25.0519 7.5 26.0617 7.68046 27 8.01212"
                    stroke="#7B67FF"
                    strokeWidth={3}
                    strokeLinecap="round"
                  />
                  <path
                    d="M40.5 40.5V40.5C40.5 35.5294 36.4706 31.5 31.5 31.5H16.5C11.5294 31.5 7.5 35.5294 7.5 40.5V40.5"
                    stroke="#7B67FF"
                    strokeWidth={3}
                    strokeLinecap="round"
                  />
                  <path
                    d="M37.5 4.5L38.7072 7.63865C38.8764 8.07859 38.961 8.29856 39.0925 8.48359C39.2092 8.64757 39.3524 8.79085 39.5164 8.90745C39.7014 9.03902 39.9214 9.12362 40.3613 9.29283L43.5 10.5L40.3614 11.7072C39.9214 11.8764 39.7014 11.961 39.5164 12.0925C39.3524 12.2092 39.2092 12.3524 39.0925 12.5164C38.961 12.7014 38.8764 12.9214 38.7072 13.3613L37.5 16.5L36.2928 13.3613C36.1236 12.9214 36.039 12.7014 35.9075 12.5164C35.7908 12.3524 35.6476 12.2092 35.4836 12.0925C35.2986 11.961 35.0786 11.8764 34.6387 11.7072L31.5 10.5L34.6387 9.29283C35.0786 9.12362 35.2986 9.03902 35.4836 8.90745C35.6476 8.79085 35.7908 8.64757 35.9075 8.48358C36.039 8.29856 36.1236 8.07859 36.2928 7.63865L37.5 4.5Z"
                    stroke="#7B67FF"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.9989 6L25.4428 3.72189C24.5414 3.27118 23.4739 3.30318 22.6011 3.80709L7.3125 12.634C6.3843 13.1699 5.8125 14.1603 5.8125 15.2321V32.7679C5.8125 33.8397 6.3843 34.8301 7.3125 35.366L22.499 44.134C23.4272 44.6699 24.5708 44.6699 25.499 44.134L40.6856 35.366C41.6138 34.8301 42.1856 33.8397 42.1856 32.7679V17.25"
                    stroke="#7B67FF"
                    strokeWidth={3}
                    strokeLinecap="round"
                  />
                  <path
                    d="M37.5 4.5L38.7072 7.63865C38.8764 8.07859 38.961 8.29856 39.0925 8.48359C39.2092 8.64757 39.3524 8.79085 39.5164 8.90745C39.7014 9.03902 39.9214 9.12362 40.3613 9.29283L43.5 10.5L40.3614 11.7072C39.9214 11.8764 39.7014 11.961 39.5164 12.0925C39.3524 12.2092 39.2092 12.3524 39.0925 12.5164C38.961 12.7014 38.8764 12.9214 38.7072 13.3613L37.5 16.5L36.2928 13.3613C36.1236 12.9214 36.039 12.7014 35.9075 12.5164C35.7908 12.3524 35.6476 12.2092 35.4836 12.0925C35.2986 11.961 35.0786 11.8764 34.6387 11.7072L31.5 10.5L34.6387 9.29283C35.0786 9.12362 35.2986 9.03902 35.4836 8.90745C35.6476 8.79085 35.7908 8.64757 35.9075 8.48358C36.039 8.29856 36.1236 8.07859 36.2928 7.63865L37.5 4.5Z"
                    stroke="#7B67FF"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.6143 26.248L16.7962 29.43L26.3422 19.8841"
                    stroke="#7B67FF"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.0975 26.2465C21.5116 25.6621 20.563 25.6626 19.9777 26.2479C19.3924 26.8332 19.3919 27.7819 19.9762 28.3678L22.0975 26.2465ZM23.1582 27.3071L21.0368 29.4284L23.1596 31.5512C23.7454 32.137 24.6952 32.137 25.281 31.5512L34.8269 22.0053C35.4127 21.4195 35.4127 20.4698 34.8269 19.884C34.2411 19.2982 33.2914 19.2982 32.7056 19.884L24.2203 28.3693L23.1582 27.3071Z"
                    fill="#7B67FF"
                  />
                </svg>
              </div>
              <div className="tools-bottom__item-headlines">
                <p className="title">Email Finder Extensions</p>
                <p className="subtitle">
                  Find lucrative leads on the go with click-and-collect email
                  finder extensions
                </p>
              </div>
              <ul className="tools-bottom__item-info">
                <li>LinkedIn prospect search</li>
                <li>Search pages email search</li>
                <li>Add leads directly to campaigns</li>
              </ul>
              <a className="tools-bottom__item-link" href="/extension">
                Learn more
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 9.99975C2.5 9.77874 2.5878 9.56677 2.74408 9.41049C2.90036 9.25421 3.11232 9.16642 3.33333 9.16642H14.655L10.2433 4.75642C10.1659 4.67894 10.1044 4.58696 10.0625 4.48572C10.0205 4.38449 9.99895 4.27599 9.99895 4.16642C9.99895 4.05684 10.0205 3.94834 10.0625 3.84711C10.1044 3.74588 10.1659 3.6539 10.2433 3.57642C10.3208 3.49894 10.4128 3.43748 10.514 3.39555C10.6153 3.35361 10.7238 3.33203 10.8333 3.33203C10.9429 3.33203 11.0514 3.35361 11.1526 3.39555C11.2539 3.43748 11.3459 3.49894 11.4233 3.57642L17.2567 9.40975C17.3343 9.48716 17.3958 9.57912 17.4379 9.68036C17.4799 9.7816 17.5015 9.89014 17.5015 9.99975C17.5015 10.1094 17.4799 10.2179 17.4379 10.3191C17.3958 10.4204 17.3343 10.5123 17.2567 10.5897L11.4233 16.4231C11.2669 16.5796 11.0546 16.6675 10.8333 16.6675C10.612 16.6675 10.3998 16.5796 10.2433 16.4231C10.0869 16.2666 9.99895 16.0544 9.99895 15.8331C9.99895 15.6118 10.0869 15.3996 10.2433 15.2431L14.655 10.8331H3.33333C3.11232 10.8331 2.90036 10.7453 2.74408 10.589C2.5878 10.4327 2.5 10.2208 2.5 9.99975Z"
                    fill="#2E2151"
                  />
                </svg>
              </a>
            </div>
          </div>
          <svg
            className="half-circle"
            width={48}
            height={48}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-2.09815e-06 48C26.5097 48 48 26.5097 48 0L0 -2.09815e-06L-2.09815e-06 48Z"
              fill="#33E7FF"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ToolsFeature;
