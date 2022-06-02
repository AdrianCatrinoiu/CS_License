import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { shareFormStart } from "../../redux/User/user.actions";
import SharedForm from "../../components/SharedForm";

const mapState = ({ user }) => ({
  shareData: user.shareData,
});

const ShareForm = () => {
  const { shareData } = useSelector(mapState);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("params", params);
    dispatch(shareFormStart(params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainLayout>
      <div className=" h-[calc(100vh-7rem)] w-full flex flex-row justify-center items-center ">
        <div className=" w-[80%] ">
          <SharedForm
            year={shareData?.year}
            emissions={shareData?.emissions}
            emissionBadge={shareData?.emissionBadge}
            companyName={shareData?.companyName}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default ShareForm;
