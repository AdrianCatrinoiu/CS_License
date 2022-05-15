import React from "react";
import "./styles.scss";
import userIMG from "../../assets/user.png";

const UserProfile = (props) => {
  const { user } = props;
  const { first_name, last_name } = user;
  return (
    <div className="userProfile">
      <ul>
        <li>
          <div className="img">
            <img src={userIMG} alt={last_name} />
          </div>
        </li>
        <li>
          <span className="displayName">{first_name + " " + last_name}</span>
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
