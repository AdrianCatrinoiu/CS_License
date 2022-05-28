import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userGetEmissionsListStart } from "../../redux/User/user.actions";
import FormYear from "../FormYear";

const mapState = ({ user }) => ({
  emissionsList: user.emissionsList,
});

const ProfileDetails = () => {
  const { emissionsList } = useSelector(mapState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userGetEmissionsListStart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col justify-between">
      {emissionsList &&
        emissionsList.map((emission) => {
          console.log("emission", emission);
          return (
            <div key={emission?.formId} className="my-4">
              <FormYear
                year={emission?.year}
                emissions={emission?.emissions}
                adminBadge={emission?.adminBadge}
                emissionBadge={emission?.emissionBadge}
                uuid={emission?.uuid}
              />
            </div>
          );
        })}
    </div>
  );
};

export default ProfileDetails;
