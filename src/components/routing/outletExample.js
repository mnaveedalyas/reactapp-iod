import React from 'react'
import {  BrowserRouter, Routes, Route, Outlet, } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      <Outlet />
    </div>
  );
}
function Messageboard() {
  return (
    <div>
      <h1>Messageboard</h1>
    </div>
  );
}

function Taskboard() {
  return (
    <div>
      <h1>Taskboard</h1>
    </div>
  );
}

export default function  OutletExample() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route
            path="messages"
            element={<Messageboard/>}
          />
          <Route path="tasks" element={<Taskboard/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}