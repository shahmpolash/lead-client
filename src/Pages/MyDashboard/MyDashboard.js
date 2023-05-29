import { useEffect, useState } from "react";
import "./MyDashboard.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link } from "react-router-dom";
import DashboardSidebar from "../../components/Shared/DashboardSidebar";
import { ImCoinDollar } from "react-icons/im";
import { GrGroup } from "react-icons/gr";
import { GiPayMoney } from "react-icons/gi";

const MyDashboard = () => {
  const [profile, setProfile] = useState([]);
  const [leads, setLeads] = useState([]);
  const [lists, setLists] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [user] = useAuthState(auth);
  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 5; // Number of leads to display per page

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
    const csvContent =
      "data:text/csv;charset=utf-8," + encodeURIComponent(convertToCSV());
    const downloadLink = document.createElement("a");
    downloadLink.setAttribute("href", csvContent);
    downloadLink.setAttribute("download", "leads.csv");
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const convertToCSV = () => {
    const header = ["Name", "Job", "Email", "Company", "Website", "Credit"];
    const rows = leads
      .filter(
        (lead) =>
          lead.leadStatus === "Taken" && lead.leadTakenBy === user?.email
      )
      .map((lead) => [
        lead.personName,
        lead.personTitle,
        lead.personEmail,
        lead.companyName,
        lead.website,
        lead.credit,
      ]);
    const csvRows = [header, ...rows].map((row) => row.join(",")).join("\n");
    return csvRows;
  };

  // Calculate the index of the last lead on the current page
  const indexOfLastLead = currentPage * leadsPerPage;
  // Calculate the index of the first lead on the current page
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;

  
  const currentLeads = leads.filter(
    (lead) =>  lead.leadStatus === "Taken" && lead.leadTakenBy === user?.email
  ).slice(indexOfFirstLead, indexOfLastLead);
  


  const leadsTakenByUser = leads.filter(
    (lead) => lead.leadStatus === "Taken" && lead.leadTakenBy === user?.email
  );

  const totalPages = Math.ceil(leadsTakenByUser.length / leadsPerPage);
  
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  

 

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
            <a href="/my-account">Dashboard</a>
          </li>
          <li>
            <i class="bx bx-chevron-right"></i>
          </li>
          <li>
            <a class="active" href="/">Home</a>
          </li>
        </ul>
      </div>
    </div>

    <ul class="box-info">
      <li>
        <i class="bx bxs-calendar-check">
         <GiPayMoney></GiPayMoney>
        </i>
        <span class="text">
          <h3>{totalCredit}</h3>
          <p>Total Spend</p>
        </span>
      </li>
      <li>
        <i class="bx bxs-group"><ImCoinDollar/></i>
        <span class="text">
          <h3>
            {profile.map(
              (pro) =>
                pro.customerEmail === user?.email && <>{pro.credit}</>
            )}
          </h3>
          <p>Available Credit</p>
          <a class="btn btn-xs btn-primary" href="/credit-packages">Buy Credit</a>
        </span>
      </li>
      <li>
        <i class="bx bxs-dollar-circle"><GrGroup></GrGroup></i>
        <span class="text">
          <h3>
            {leads.filter((lead) => lead.leadTakenBy === user?.email)
              .length}
          </h3>
          <p>You Have Taken</p>
        </span>
      </li>
    </ul>

    <div class="table-data">
      <div class="order">
        <div class="head">
          <h3>Recent Leads</h3>
          <div class="tooltip" data-tip="Download">
            <button class="btn-download" onClick={downloadAsCSV}>
              <i class="fa-solid fa-download"></i>
              <span class="text ml-2">Lead Data</span>
            </button>
          </div>
        </div>
        <div class="flex justify-start">
          <div class="dropdown dropdown-hover">
            <label
              tabIndex={0}
              class="btn btn-outline btn-primary mr-5"
            >
              List
            </label>
            <ul
              tabIndex={0}
              class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {lists.map(
                (list) =>
                  list.listCreatedBy === user?.email && (
                    <li>
                      <a href={`/leads-in-list/${list._id}`}>
                        {list.listName}
                      </a>
                    </li>
                  )
              )}
            </ul>
          </div>
          <a class="btn btn-outline btn-primary mr-5" href="/create-list">Create List</a>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Job
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Website
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Credit
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              {currentLeads.map((lead) => (
                <tr key={lead.id}>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img class="h-10 w-10 rounded-full" src={lead.personProfile} alt="Profile" />
                      </div>
                      <div class="ml-4">
                        <p class="text-sm font-medium text-gray-900">{lead.personName}</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <p class="text-sm text-gray-500">{lead.personTitle}</p>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <p class="text-sm text-gray-500">{lead.personEmail}</p>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <p class="text-sm text-gray-500">{lead.companyName}</p>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <p class="text-sm text-gray-500">{lead.website}</p>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {lead.credit}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul class="pagination">
          {pageNumbers.map((pageNumber) => (
            <li
              key={pageNumber}
              class={pageNumber === currentPage ? "active" : ""}
            >
              <button onClick={() => handlePageChange(pageNumber)}>
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </main>
</section>

    </div>
  );
};

export default MyDashboard;
