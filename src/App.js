import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Shared/NavBar";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AddCategory from "./Pages/Admin/AddCategory";
import AddLead from "./Pages/Admin/AddLead";
import Home from "./Pages/HomePage/Home";
import CreateProfile from "./Pages/CreateProfile";
import TakeLead from "./Pages/TakeLead";
import LeadTaken from "./Pages/LeadTaken";
import MyDashboard from "./Pages/MyDashboard/MyDashboard";
import RequireAuth from "./components/Shared/RequireAuth";
import CreateList from "./Pages/CreateList";
import LeadsInList from "./Pages/MyDashboard/LeadsInList";
import Footer from "./components/Shared/Footer/Footer";
import CreditPackages from "./Pages/CreditPackages";
import AddPackages from "./Pages/Admin/AddPackages";
import BuyCredit from "./Pages/MyDashboard/BuyCredit";
import ConformPayment from "./Pages/MyDashboard/ConformPayment";
import SmallPlan from "./Pages/SmallPlan";
import MediumPlan from "./Pages/MediumPlan";
import BigPlan from "./Pages/BigPlan";
import ProPlan from "./Pages/ProPlan";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route
          path="/admin/add-category"
          element={<AddCategory></AddCategory>}
        ></Route>
        <Route path="/admin/add-lead" element={<AddLead></AddLead>}></Route>
        <Route path="/admin/add-packages" element={<AddPackages></AddPackages>}></Route>
        <Route path="/credit-packages" element={<CreditPackages></CreditPackages>}></Route>

        <Route
          path="/my-account"
          element={
            <RequireAuth>
              <MyDashboard></MyDashboard>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/create-list"
          element={
            <RequireAuth>
              <CreateList></CreateList>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/leads-in-list/:id"
          element={
            <RequireAuth>
              <LeadsInList></LeadsInList>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/buy-credit/:id"
          element={
            <RequireAuth>
              <BuyCredit></BuyCredit>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/small-package/:id"
          element={
            <RequireAuth>
              <SmallPlan></SmallPlan>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/medium-package/:id"
          element={
            <RequireAuth>
             <MediumPlan></MediumPlan>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/big-package/:id"
          element={
            <RequireAuth>
            <BigPlan></BigPlan>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/pro-package/:id"
          element={
            <RequireAuth>
            <ProPlan></ProPlan>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/create-profile"
          element={<CreateProfile></CreateProfile>}
        ></Route>

        <Route
          path="/take-lead/:id"
          element={
            <RequireAuth>
              <TakeLead></TakeLead>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/lead-taken/:id"
          element={
            <RequireAuth>
              <LeadTaken></LeadTaken>
            </RequireAuth>
          }
        ></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
