import React from "react";
import { useSelector } from "react-redux";
import FormYear from "../FormYear";

const mapState = ({ user }) => ({
  user: user.user,
});

const ProfileDetails = () => {
  const { user } = useSelector(mapState);
  const userFormYears = user.userFormYears;
  return (
    <div>
      {userFormYears &&
        userFormYears.map((year) => (
          <div key={year}>
            <FormYear year={year} />
          </div>
        ))}
    </div>
  );
};

export default ProfileDetails;
