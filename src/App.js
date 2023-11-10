import AdminLayout from "./Components/Layout/AdminLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./Components/Login/Login";
import ErrorPage from "./ErrorPage";
import Welcome from "./Components/Welcome/Welcome";


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<AdminLayout />}>
            <Route
              path="welcome"
              element={
                
                  <Welcome/>
               
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
