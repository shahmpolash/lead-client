import { useEffect, useState } from "react";
import "./MyDashboard.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { Link, useParams } from "react-router-dom";
import DashboardSidebar from "../../components/Shared/DashboardSidebar";

const LeadsInList = () => {
  const [profile, setProfile] = useState([]);
  const [leads, setLeads] = useState([]);
  const [lists, setLists] = useState([]);
  const [list, setList] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [user] = useAuthState(auth);
  const {id} = useParams();

  const handleSignout = () => {
    signOut(auth);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/leads`)
      .then((res) => res.json())
      .then((info) => setLeads(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/lists`)
      .then((res) => res.json())
      .then((info) => setLists(info));
  }, []);
  
  useEffect(() => {
    fetch(`http://localhost:5000/list/${id}`)
      .then((res) => res.json())
      .then((info) => setList(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/profile?customerEmail=${user?.email}`)
      .then((res) => res.json())
      .then((info) => setProfile(info));
  }, [user]);

  useEffect(() => {
    let sum = 0;
    leads.forEach((lead) => {
      if (lead.leadTakenBy === user?.email) {
        sum += parseInt(lead.credit);
      }
    });
    setTotalCredit(sum);
  }, [leads, user]);
  
  const downloadAsCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," + encodeURI(convertToCSV(leads));
    const link = document.createElement("a");
    link.setAttribute("href", csvContent);
    link.setAttribute("download", "leads.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const convertToCSV = (data) => {
    const headers = ["Name", "Job", "Email", "Company", "Website", "Credit"];
    const rows = data
      .filter(
        (lead) =>
          lead.leadStatus === "Taken" &&
          lead.leadTakenBy === user?.email &&
          lead.listName === list.listName
      )
      .map(
        (lead) =>
          `${lead.personName},${lead.personTitle},${lead.personEmail},${lead.companyName},${lead.website},${lead.credit}`
      );
    return [headers.join(","), ...rows].join("\n");
  };

  return (
    <div>
      
      <DashboardSidebar></DashboardSidebar>

      <section id="content">
        <main>
          <div class="head-title">
            <div class="left">
              <h1>Dashboard</h1>
              <ul class="breadcrumb">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                </li>
                <li>
                  <a class="active" href="#">
                    Home
                  </a>
                </li>
              </ul>
            </div>
            
          </div>

          <ul class="box-info">
            <li>
              <i class="bx bxs-calendar-check">
                <img src="https://i.ibb.co/Vwf54RJ/coin.png" alt="Coin" />
              </i>
              <span class="text">
                <h3>{totalCredit}</h3>
                <p>Totol Spend</p>
              </span>
            </li>
            <li>
              <i class="bx bxs-group"></i>
              <span class="text">
                <h3>
                  {profile.map(
                    (pro) =>
                      pro.customerEmail === user?.email && <>{pro.credit}</>
                  )}
                </h3>
                <p>Available Credit</p>
              </span>
            </li>
            <li>
              <i class="bx bxs-dollar-circle"></i>
              <span class="text">
                <h3>$2543</h3>
                <p>Total Sales</p>
              </span>
            </li>
          </ul>

          <div class="table-data">
            <div class="order">
              <div class="head">
                <h3>{list.listName}</h3>
                <div className="tooltip" data-tip="Download">
                  <button class="btn-download" onClick={downloadAsCSV}>
                    <i class="fa-solid fa-download"></i>
                    <span className="text ml-2">Lead Data</span>
                  </button>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="dropdown dropdown-hover">
                  <label tabIndex={0} className="btn btn-outline btn-primary mr-5">
                    List
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    {
                      lists.map(list=> list.listCreatedBy === user?.email &&
                        <li><a href={`/leads-in-list/${list._id}`}>{list.listName}</a></li>
                        )
                    }
                  </ul>
                </div>
                <Link to='/create-list'>Create List</Link>
              </div>
              <table>
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
                      lead.leadTakenBy === user?.email && lead.listName === list.listName && (
                        <tr>
                          <td>
                            <img src={lead.personProfile} alt="profile" />
                            <p>{lead.personName}</p>
                          </td>
                          <td>
                            <p>{lead.personTitle}</p>
                          </td>
                          <td>
                            <p>{lead.personEmail}</p>
                          </td>
                          <td>
                            <p>{lead.companyName}</p>
                          </td>
                          <td>
                            <p>{lead.website}</p>
                          </td>

                          <td>
                            <span class="status completed">{lead.credit}</span>
                          </td>
                        </tr>
                      )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default LeadsInList;
