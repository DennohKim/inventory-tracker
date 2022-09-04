import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./pages/ProtectedRoute";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { AuthContextProvider } from "./context/AuthContext";
import Clients from "./pages/Clients";
import BusinessEntities from "./pages/BusinessEntities";
import Computers from "./pages/Computers";
import Manufacturers from "./pages/Manufacturers";
import Printers from "./pages/Printers";
import { ContextProvider } from "./context/ContextProvider";

function App() {

  
  return (
    <>
      <AuthContextProvider>
      <ContextProvider >
          <Routes>
            <Route path="/" element={<Signin />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="/clients" element={<Clients />}></Route>
            <Route path="/businessentities" element={<BusinessEntities />}></Route>
            <Route path="/computers" element={<Computers />}></Route>
            <Route path="/manufacturers" element={<Manufacturers />}></Route>
            <Route path="/printers" element={<Printers />}></Route>
          </Routes>
          </ContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;