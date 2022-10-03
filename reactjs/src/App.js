import "./App.css";
import React, { useState, useEffect } from "react";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";

// PAGES IMPORTS
import Homepage from "./pages/Hompage/Homepage";
import Exercise from "./pages/Exercise/Exercise";
import Workout from "./pages/Workout/Workout";
import Weight from "./pages/Weight/Weight";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // Toggles logged in status
  const toggleLogin = () => {
    setLoggedIn(!loggedIn);
  };

  const navigate = useNavigate();

  // check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      toggleLogin();
      navigate("/homepage");
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login toggleLogin={toggleLogin} />} />
        <Route
          exact
          path="/signup"
          element={<Signup toggleLogin={toggleLogin} />}
        />
        <Route element={<ProtectedRoutes isLoggedIn={loggedIn} />}>
          <Route exact path="/homepage" element={<Homepage />} />
          <Route exact path="/exercises" element={<Exercise />} />
          <Route exact path="/workouts" element={<Workout />} />
          <Route exact path="/weight" element={<Weight />} />
          <Route
            exact
            path="/profile"
            element={<Profile toggleLogin={toggleLogin} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
