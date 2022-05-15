import React from "react";
import { useSelector } from "react-redux";
import UserProfile from "./../UserProfile";
import "./styles.scss";

const mapState = ({ user }) => ({
  user: user.user,
});

const VerticalNav = ({ children }) => {
  const { user } = useSelector(mapState);

  const configUserProfile = {
    user,
  };

  return (
    <div className="verticalNav">
      <UserProfile {...configUserProfile} />

      <div className="menu">{children}</div>
    </div>
  );
};

export default VerticalNav;
