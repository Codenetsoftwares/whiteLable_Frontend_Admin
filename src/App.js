import AdminLayout from "./Components/Layout/AdminLayout";
import { AuthProvider } from "./Utils/Auth";
import { RequireAuth } from "./Utils/RequireAuth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./Pages/Accounts/Login/Login";
import ErrorPage from "./ErrorPage";
import Welcome from "./Pages/Welcome/Welcome";
import Authform from "./Components/AuthForm";
import Create from "./Pages/Accounts/Login/Create";
import UserCreate from "./Pages/Accounts/Login/UserCreate";
import { ToastContainer, toast } from "react-toastify";
import MainTransaction from "./Components/MainTransaction";
import AgentDelete from "./Components/AgentDelete";
import AccountLandingModal from "./Components/MyAccount/AccountLandingModal";
import HierarchyPageView from "./Components/HierarchyPageView";
import PartnershipViewLog from "./Pages/PartnershipViewLog";

function App() {
  return (
    <React.Fragment>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="authform" element={<Authform />} />
            <Route index element={<Login />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<AdminLayout />}>
              <Route
                path="welcome"
                element={
                  <RequireAuth>
                    <Welcome />
                  </RequireAuth>
                }
              />
              <Route
                path="Create"
                element={
                  <RequireAuth>
                    <Create />
                  </RequireAuth>
                }
              />
              <Route
                path="partnershipViewLog/:userId"
                element={
                  <RequireAuth>
                    <PartnershipViewLog />
                  </RequireAuth>
                }
              />

              <Route
                path="maintransaction"
                element={
                  <RequireAuth>
                    <MainTransaction />
                  </RequireAuth>
                }
              />
              <Route
                path="agentDelete"
                element={
                  <RequireAuth>
                    <AgentDelete />
                  </RequireAuth>
                }
              />
              <Route
                path="/account-landing/:userId"
                element={
                  <RequireAuth>
                    <AccountLandingModal />
                  </RequireAuth>
                }
              />
              <Route
                path="hierarchypageview/:userId"
                element={
                  <RequireAuth>
                    <HierarchyPageView />
                  </RequireAuth>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;
