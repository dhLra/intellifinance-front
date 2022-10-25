import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AuthProvider } from "./services/LoginService/AuthProvider";
import ProtectedLayout from "./components/Layouts/ProtectedLayout";

import LoginPage from "./pages/LoginPage";
import RetriveAccountPage from "./pages/RetriveAccountPage";
import ResetPassowrdPage from "./pages/ResetPasswordPage";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import Layout from "./components/Layouts/Layout";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>

            <Route path="*" element={<LoginPage />} />

            <Route path="/login" exact element={<LoginPage />} />
            <Route path="/retrive-account" exact element={<RetriveAccountPage />} />
            <Route path="/reset-password" exact element={<ResetPassowrdPage />} />

            <Route path="/home" element={
              <ProtectedLayout>
                <Layout>
                  <HomePage />
                </Layout>
              </ProtectedLayout>} />


              <Route path="/homedev" element={
                <Layout>
                  <HomePage />
                </Layout>} />

            <Route path="/map" element={
              <ProtectedLayout>
                <Layout>
                  <MapPage />
                </Layout>
              </ProtectedLayout>} />

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
