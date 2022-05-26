import React from "react";
import "./styles.scss";
import userIMG from "../../assets/user.png";

const UserProfile = ({ user }) => {
  return (
    <div className="userProfile">
      <ul>
        <li>
          <div className="img">
            <img src={userIMG} alt={user.companyName} />
          </div>
        </li>
        <li>
          <span className="displayName">{user.companyName}</span>
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
