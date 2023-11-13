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


function App() {
  return (
    <React.Fragment>
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
                  <RequireAuth><Welcome /></RequireAuth>
                }
              />
              <Route
                path="Create"
                element={
                  <RequireAuth><Create /></RequireAuth>
                }
              />
              <Route
                path="userCreate"
                element={
                  <RequireAuth><UserCreate /></RequireAuth>
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
