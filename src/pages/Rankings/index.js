import React from "react";
import RankingsList from "../../components/RankingsList";
import WithAuth from "../../hoc/withAuth";
import RankingLayout from "../../layouts/RankingLayout";

const Rankings = () => {
  return (
    <WithAuth>
      <RankingLayout>
        <div className="h-full w-full mb-24 sm:mt-0 mt-24">
          <RankingsList />
        </div>
      </RankingLayout>
    </WithAuth>
  );
};

export default Rankings;
