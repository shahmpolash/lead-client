import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";

const CreateList = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const handleSignout = () => {
    signOut(auth);
  };

  const handleCreateList = (event) => {
    event.preventDefault();
    const listName = event.target.listName.value;
    const listCreatedBy = event.target.listCreatedBy.value;

    const list = {
      listName,
      listCreatedBy,
    };

    const url = `http://localhost:5000/create-list`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(list),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/my-account");
      });
  };

  
  return (
    <div className="container mx-auto">
      <section id="sidebar">
        <a href="#" class="brand">
          <i class="bx bxs-smile"></i>
          <span class="text">Lead.OI</span>
        </a>
        <ul class="side-menu top">
          <li class="active">
            <a href="#">
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
                <form onSubmit={handleCreateList}>
                  <input
                    placeholder="Create List Name."
                    class="border border-gray-300 shadow p-3 mr-5 rounded"
                    required
                    type="text"
                    name="listName"
                  ></input>
                  <input
                    hidden
                    value={user?.email}
                    type="text"
                    name="listCreatedBy"
                  ></input>

                  <input
                    className="btn"
                    type="submit"
                    value="Create List"
                  ></input>
                </form>
              </span>
            </li>
          </ul>
        </main>
      </section>
    </div>
  );
};

export default CreateList;
