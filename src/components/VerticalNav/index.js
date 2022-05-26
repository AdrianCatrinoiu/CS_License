import React from "react";
import { useSelector } from "react-redux";
import UserProfile from "./../UserProfile";
import "./styles.scss";

const mapState = ({ user }) => ({
  user: user.user,
});

const VerticalNav = ({ children }) => {
  const { user } = useSelector(mapState);

  return (
    <div className="verticalNav">
      <UserProfile user={user} />

      <div className="menu">{children}</div>
    </div>
  );
};

export default VerticalNav;
