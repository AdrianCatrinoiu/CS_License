import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import FormYear from "../FormYear";

const mapState = ({ user }) => ({
  emissionsList: user.emissionsList,
});

const ProfileDetails = () => {
  const { emissionsList } = useSelector(mapState);

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col justify-between">
      {emissionsList &&
        emissionsList.map((emission) => (
          <div key={emission.year} className="my-4">
            <FormYear year={emission.year} emissions={emission.emissions} />
          </div>
        ))}
    </div>
  );
};

export default ProfileDetails;
