import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate, useParams } from "react-router-dom";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";

const LeadTaken = () => {
  const { id } = useParams();
  const [lead, setLead] = useState([]);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [profile, setProfile] = useState([]);
  const handleSignout = () => {
    signOut(auth);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/lead/${id}`)
      .then((res) => res.json())
      .then((info) => setLead(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/profile?customerEmail=${user?.email}`)
      .then((res) => res.json())
      .then((info) => setProfile(info));
  }, []);

  const handleUserCredit = (event) => {
    event.preventDefault();
    const credit = event.target.credit.value;

    const updateCredit = {
      credit,
    };

    const url = `http://localhost:5000/profile/${lead.clientId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCredit),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/my-account");
      });
  };

  return (
    <div>
      <div className="container mx-auto">
        <section id="sidebar">
          <a href="#" class="brand">
            <i class="bx bxs-smile"></i>
            <span class="text">Lead.OI</span>
          </a>
          <ul class="side-menu top">
            <li class="active">
              <a href="/my-account">
                <i class="bx bxs-dashboard"></i>
                <span class="text">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bxs-shopping-bag-alt"></i>
                <span class="text">My Store</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bxs-doughnut-chart"></i>
                <span class="text">Analytics</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bxs-message-dots"></i>
                <span class="text">Message</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bxs-group"></i>
                <span class="text">Team</span>
              </a>
            </li>
          </ul>
          <ul class="side-menu">
            <li>
              <a href="#">
                <i class="bx bxs-cog"></i>
                <span class="text">Settings</span>
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

        <section id="content">
          <main>
            <ul class="box-info">
              <li>
                <span class="text">
                  <form onSubmit={handleUserCredit}>
                    {profile.map(
                      (pro) =>
                        pro.customerEmail === user?.email && (
                          <input
                            value={pro.credit - lead.credit}
                            type="number"
                            name="credit"
                            placeholder="You can't touch this" 
                            className="input input-bordered max-w-xs mr-2" 
                            disabled
                          ></input>
                        )
                    )}
                    <input
                      className="btn"
                      type="submit"
                      value="Confirm Now"
                    ></input>
                  </form>
                </span>
              </li>
            </ul>
          </main>
        </section>
      </div>
    </div>
  );
};

export default LeadTaken;
