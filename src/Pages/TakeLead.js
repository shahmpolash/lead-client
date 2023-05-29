import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate, useParams } from "react-router-dom";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";

const TakeLead = () => {
  const { id } = useParams();
  const [lead, setLead] = useState([]);
  const navigate = useNavigate();
  const [lists, setLists] = useState([]);

  const [user] = useAuthState(auth);
  const [profile, setProfile] = useState([]);
  const handleSignout = () => {
    signOut(auth);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/lists`)
      .then((res) => res.json())
      .then((info) => setLists(info));
  }, []);

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

  const handleAddLead = (event) => {
    event.preventDefault();
    const leadStatus = event.target.leadStatus.value;
    const clientId = event.target.clientId.value;
    const leadTakenBy = event.target.leadTakenBy.value;
    const availableCredit = event.target.availableCredit.value;
    const listName = event.target.listName.value;

    const leadTaken = {
      leadStatus,
      clientId,
      leadTakenBy,
      availableCredit,
      listName,
    };

    const url = `http://localhost:5000/lead/${lead._id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(leadTaken),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate(`/lead-taken/${lead._id}`);
      });
  };

  return (
    <div className="container mx-auto h-screen">
     
     
      <section id="content">
        <main>
         

          <ul class="box-info">
            <li>
              
              <span class="text">
               
                <form onSubmit={handleAddLead}>
                <div className="mb-5 flex items-center">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-bold text-gray-600"
                  >
                    Select Lead Catogories
                  </label>

                  {lists.filter((list) => list.listCreatedBy === user?.email)
                    .length > 0 && (
                    <>
                      {lists.filter(
                        (list) => list.listCreatedBy === user?.email
                      ).length > 0 && (
                        <div className="flex  items-center">
                          <select
                            required
                            className="select select-info w-full max-w-xs"
                            name="listName"
                          >
                            {lists.map(
                              (list) =>
                                list.listCreatedBy === user?.email && (
                                  <option>{list.listName}</option>
                                )
                            )}
                          </select>
                        <span className="mx-1">OR</span>
                          <Link className="btn" to="/create-list">
                            Create New List
                          </Link>
                        </div>
                      )}

                      <input
                        hidden
                        type="text"
                        value="Taken"
                        name="leadStatus"
                      ></input>
                      {profile.map(
                        (pro) =>
                          pro.customerEmail === user?.email && (
                            <input
                              hidden
                              type="text"
                              value={pro._id}
                              name="clientId"
                            ></input>
                          )
                      )}

                      <input
                        hidden
                        type="text"
                        value={user?.email}
                        name="leadTakenBy"
                      ></input>
                      {profile.map(
                        (pro) =>
                          pro.customerEmail === user?.email && (
                            <input
                              hidden
                              type="text"
                              value={pro.credit - lead.credit}
                              name="availableCredit"
                            ></input>
                          )
                      )}
                    </>
                  )}
                </div>
                
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Add This Lead"
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

export default TakeLead;
