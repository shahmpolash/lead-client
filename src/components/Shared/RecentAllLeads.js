import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import './RecentLeads.css';

const RecentAllLeads = () => {
  const [leads, setLeads] = useState([]);
  const [profile, setProfile] = useState([]);
  const [user] = useAuthState(auth);

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
    <div className="container mx-auto recent-leads">
      <div className="overflow-x-auto w-full table">
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {leads.map(
              (lead, index) =>
                lead.leadStatus === "notTaken" && (
                  <tr key={index}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={lead.personProfile} alt="profile" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold"><p>{lead.personName}</p></div>
                          <div className="text-sm opacity-50">
                            {lead.personLocation}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td><p>{lead.personTitle}</p></td>
                    <td><p>{lead.personEmail}</p></td>
                    <th><p>{lead.companyName}</p></th>
                    <th><p>{lead.website}</p></th>
                    <th><p>{lead.credit}</p></th>
                    <th>
                      {user ? (
                        <div>
                          {profile.map(
                            (pro) =>
                              pro.customerEmail === user?.email &&
                              parseFloat(pro.credit) >
                                parseFloat(lead.credit) && (
                                <Link
                                  to={`/take-lead/${lead._id}`}
                                  className="btn btn-sm btn-primary"
                                >
                                  Take
                                </Link>
                              )
                          )}
                          {profile.map(
                            (pro) =>
                              pro.customerEmail === user?.email &&
                              parseFloat(pro.credit) <
                                parseFloat(lead.credit) && (
                                <Link
                                  to="/credit-packages"
                                  className="btn btn-sm btn-primary"
                                >
                                  Buy More Credit
                                </Link>
                              )
                          )}
                        </div>
                      ) : (
                        <Link to="/login" className="btn btn-sm btn-primary">
                          Join Now
                        </Link>
                      )}
                    </th>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentAllLeads;
