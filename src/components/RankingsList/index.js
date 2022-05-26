import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Ranking from "../Ranking";

const mapState = ({ user }) => ({
  rankings: user.rankings,
});

const RankingsList = () => {
  const { rankings } = useSelector(mapState);
  const [filteredRankigns, setFilteredRankings] = useState(rankings);
  useEffect(() => {
    setFilteredRankings(rankings);
  }, [rankings]);
  console.log("rankings", rankings);
  console.log("filteredRankigns", filteredRankigns);

  return (
    <div className="h-full w-full flex flex-col justify-center items-center mb-24">
      {filteredRankigns &&
        filteredRankigns.rankings.map((company, index) => (
          <div key={index} className="my-4 w-[90%]">
            <Ranking
              place={index + 1}
              companyName={company.companyName}
              year={company.year}
              emissions={company.emissions}
            />
          </div>
        ))}
    </div>
  );
};

export default RankingsList;
