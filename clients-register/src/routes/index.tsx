import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Contacts } from "../pages/Contact";
import { User } from "../pages/User";
import React from "react";


const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/contact" element={<Contacts />} />
    <Route path="/users" element={<User />} />
  </Routes>
);

export default RoutesMain;