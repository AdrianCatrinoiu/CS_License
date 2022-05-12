import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import FormPage from "./pages/FormPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
