import React from "react";
import './Integration.css'

const Integration = () => {
  return (
    <div>
      <section className="section section-integration">
        <div className="container mx-auto">
          <div className="integration-box__wrapp">
            <div className="integration-box__about">
              <h3 className="h3 integration-box__about-title h3 text-[40px] font-bold">
                Your favorite apps integrate with us
              </h3>
              <p className="integration-box__about-text">
                No coding experience necessary. Simply connect and synchronize
                your workflow across platforms. From CRMs to customer support
                apps, Snov.io offers integrations with over{" "}
                <span>5,000 tools</span> to make your workflow easier.
              </p>
              <a className="integration-box__about-link" href="/integrations">
                View all integrations
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 10.5C2.5 10.279 2.5878 10.067 2.74408 9.91072C2.90036 9.75444 3.11232 9.66665 3.33333 9.66665H14.655L10.2433 5.25665C10.1659 5.17917 10.1044 5.08718 10.0625 4.98595C10.0205 4.88472 9.99895 4.77622 9.99895 4.66665C9.99895 4.55707 10.0205 4.44857 10.0625 4.34734C10.1044 4.24611 10.1659 4.15413 10.2433 4.07665C10.3208 3.99917 10.4128 3.93771 10.514 3.89577C10.6153 3.85384 10.7238 3.83226 10.8333 3.83226C10.9429 3.83226 11.0514 3.85384 11.1526 3.89577C11.2539 3.93771 11.3459 3.99917 11.4233 4.07665L17.2567 9.90998C17.3343 9.98739 17.3958 10.0793 17.4379 10.1806C17.4799 10.2818 17.5015 10.3904 17.5015 10.5C17.5015 10.6096 17.4799 10.7181 17.4379 10.8194C17.3958 10.9206 17.3343 11.0126 17.2567 11.09L11.4233 16.9233C11.2669 17.0798 11.0546 17.1677 10.8333 17.1677C10.612 17.1677 10.3998 17.0798 10.2433 16.9233C10.0869 16.7668 9.99895 16.5546 9.99895 16.3333C9.99895 16.112 10.0869 15.8998 10.2433 15.7433L14.655 11.3333H3.33333C3.11232 11.3333 2.90036 11.2455 2.74408 11.0892C2.5878 10.933 2.5 10.721 2.5 10.5Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Integration;
