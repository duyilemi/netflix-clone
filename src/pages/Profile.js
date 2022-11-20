import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { auth } from "../firebase";
import Plans from "../components/Plans";
import "./Profile.css";

function Profile() {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="profile">
      <Navbar />
      <div className="profile__body">
        <h1>Profile</h1>
        <div className="profile__info">
          <img
            src="https://th.bing.com/th/id/R.1b9f68e6b02f27c74d4c3de19b6c6e46?rik=CNAXqHFL7GmaAg&pid=ImgRaw&r=0"
            alt=""
          />
          <div className="profile__details">
            <h2>{user.email}</h2>

            <div className="profile__plans">
              <h3>Plans</h3>
              <Plans />
              <button
                className="profile__signOut"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
