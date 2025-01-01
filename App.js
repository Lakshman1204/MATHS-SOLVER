import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import StudentPage from "./components/StudentPage";
import TeacherPage from "./components/TeacherPage";
import MathSolver from "./components/MathSolver";
import GraphGenerator from "./components/GraphGenerator";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/student" element={<StudentPage />} />
      <Route path="/teacher" element={<TeacherPage />} />
      <Route path="/mathsolver" element={<MathSolver />} />
      <Route path="/graphgenerator" element={<GraphGenerator />} />
    </Routes>
  </Router>
);

export default App;