import React, { useEffect, useState } from "react";
import DashboardSidebar from "../components/Shared/DashboardSidebar";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const CreditPackages = () => {
  const [user] = useAuthState(auth);
  const [packages, setPackages] = useState([]);
  const [customer, setCustomer] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/credit-packages`)
      .then((res) => res.json())
      .then((info) => setPackages(info));
  }, []);
  

  useEffect(() => {
   fetch(`http://localhost:5000/profile?customerEmail=${user?.email}`)
     .then((res) => res.json())
     .then((info) => setCustomer(info));
 }, [user]);

  return (
    <div>
      <DashboardSidebar></DashboardSidebar>

      <section id="content">
        
        <main>
          <div class="head-title">
            <div class="left">
              <h1>Buy Credit</h1>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-items-center justify-center gap-10 mt-10 mb-5">
              <div class="bg-gradient-to-r from-purple-500 to-pink-500 p-10 rounded-lg shadow-lg lg:w-3/5">
                <div class="flex items-center mb-4">
                  <span class="text-3xl font-bold text-white mr-2">$10</span>
                  <span class="text-white opacity-75">Small Plan</span>
                </div>
                <div class="flex items-center justify-between mb-4">
                  <div class="text-white opacity-75">Credits:</div>
                  <div class="text-2xl font-bold text-white">1000</div>
                </div>
                {
                  customer.map(client=> client.customerEmail === user?.email &&
                    <Link to={`/small-package/${client._id}`} class="bg-white text-purple-500 hover:bg-purple-500 hover:text-white py-2 px-4 rounded-full font-bold transition duration-300 ease-in-out">
                  Purchase Now
                </Link>
                    )
                }
                
              </div>
              <div class="bg-gradient-to-r from-purple-500 to-pink-500 p-10 rounded-lg shadow-lg lg:w-3/5">
                <div class="flex items-center mb-4">
                  <span class="text-3xl font-bold text-white mr-2">$20</span>
                  <span class="text-white opacity-75">Medium Plan</span>
                </div>
                <div class="flex items-center justify-between mb-4">
                  <div class="text-white opacity-75">Credits:</div>
                  <div class="text-2xl font-bold text-white">2000</div>
                </div>
                {
                  customer.map(client=> client.customerEmail === user?.email &&
                    <Link to={`/medium-package/${client._id}`} class="bg-white text-purple-500 hover:bg-purple-500 hover:text-white py-2 px-4 rounded-full font-bold transition duration-300 ease-in-out">
                  Purchase Now
                </Link>
                    )
                }
              </div>
              <div class="bg-gradient-to-r from-purple-500 to-pink-500 p-10 rounded-lg shadow-lg lg:w-3/5">
                <div class="flex items-center mb-4">
                  <span class="text-3xl font-bold text-white mr-2">$50</span>
                  <span class="text-white opacity-75">Big Plan</span>
                </div>
                <div class="flex items-center justify-between mb-4">
                  <div class="text-white opacity-75">Credits:</div>
                  <div class="text-2xl font-bold text-white">5000</div>
                </div>
                {
                  customer.map(client=> client.customerEmail === user?.email &&
                    <Link to={`/big-package/${client._id}`} class="bg-white text-purple-500 hover:bg-purple-500 hover:text-white py-2 px-4 rounded-full font-bold transition duration-300 ease-in-out">
                  Purchase Now
                </Link>
                    )
                }
              </div>
              <div class="bg-gradient-to-r from-purple-500 to-pink-500 p-10 rounded-lg shadow-lg lg:w-3/5">
                <div class="flex items-center mb-4">
                  <span class="text-3xl font-bold text-white mr-2">$100</span>
                  <span class="text-white opacity-75">Pro Plan</span>
                </div>
                <div class="flex items-center justify-between mb-4">
                  <div class="text-white opacity-75">Credits:</div>
                  <div class="text-2xl font-bold text-white">10000</div>
                </div>
                {
                  customer.map(client=> client.customerEmail === user?.email &&
                    <Link to={`/pro-package/${client._id}`} class="bg-white text-purple-500 hover:bg-purple-500 hover:text-white py-2 px-4 rounded-full font-bold transition duration-300 ease-in-out">
                  Purchase Now
                </Link>
                    )
                }
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default CreditPackages;
