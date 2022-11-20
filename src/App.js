import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { login, logout } from "./redux/userSlice";
import Profile from "./pages/Profile";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    // tracks whos presently singned in and returns the user .... if any
    const unsubscribe = auth.onAuthStateChanged((userInfo) => {
      if (userInfo) {
        const { uid, email } = userInfo;
        dispatch(login({ uid, email }));
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
