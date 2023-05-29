import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { Link } from "react-router-dom";

const MyAccount = () => {
  const [profile, setProfile] = useState([]);
  const [user] = useAuthState(auth);
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/leads`)
      .then((res) => res.json())
      .then((info) => setLeads(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/profile?customerEmail=${user?.email}`)
      .then((res) => res.json())
      .then((info) => setProfile(info));
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        <Link>
          My Available Credit:{" "}
          {profile.map(
            (pro) => pro.customerEmail === user?.email && <>{pro.credit}</>
          )}
        </Link>
      </div>
      {profile.filter((pro) => pro.customerEmail === user?.email).length ===
        0 && (
        <Link className="btn" to="/create-profile">
          Please Complete Your Profile Now
        </Link>
      )}
      {profile.filter((pro) => pro.customerEmail === user?.email).length ===
        1 && (
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Email</th>
                <th>Company</th>
                <th>Website</th>
                <th>Credit</th>
              </tr>
            </thead>
            <tbody>
              {leads.map(
                (lead) =>
                  lead.leadStatus === "Taken" &&
                  lead.leadTakenBy === user?.email && (
                    <tr>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={lead.personProfile} alt="profile" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{lead.personName}</div>
                            <div className="text-sm opacity-50">
                              {lead.personLocation}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{lead.personTitle}</td>
                      <td>{lead.personEmail}</td>
                      <th>{lead.companyName}</th>
                      <th>{lead.website}</th>
                      <th>{lead.credit}</th>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyAccount;
