import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { FiMenu } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';

const SidebarToggle = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <button
      className="fixed top-[40px] left-1 z-50 block md:hidden text-gray-500 hover:text-gray-600 focus:text-gray-600"
      onClick={toggleSidebar}
    >
      {sidebarOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
    </button>
  );
};

const DashboardSidebar = () => {
  const [user] = useAuthState(auth);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSignout = () => {
    signOut(auth);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <SidebarToggle sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <section
        id="sidebar"
        className={`fixed inset-y-0 left-0 w-64 bg-white border-r overflow-y-auto transition-transform duration-300 ease-in-out transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <a href="#" className="brand">
          <i className="bx bxs-smile"></i>
          <span className="text">Lead.OI</span>
        </a>
        <ul className="side-menu top">
          <li className="active">
            <a href="/my-account">
              <i className="bx bxs-dashboard"></i>
              <span className="text">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/credit-packages">
              <i className="bx bxs-shopping-bag-alt"></i>
              <Link to="/credit-packages" className="text"> Buy Credit</Link>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-doughnut-chart"></i>
              <span className="text">Analytics</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-message-dots"></i>
              <span className="text">Message</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-group"></i>
              <span className="text">Team</span>
            </a>
          </li>
        </ul>
        <ul className="side-menu">
          <li>
            <a href="#">
              <i className="bx bxs-cog"></i>
              <span className="text">Settings</span>
            </a>
          </li>
          <li>
            {user ? (
              <Link
                className="btn btn-primary py-1 px-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-500"
                onClick={handleSignout}
              >
                Signout
              </Link>
            ) : (
              <Link
                className="btn btn-primary py-1 px-2 text-sm bg-blue-500 text-white rounded-md"
                to="/login"
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      </section>
    </div>
  );
};

export default DashboardSidebar;
