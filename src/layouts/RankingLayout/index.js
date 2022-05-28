import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { userFormRankingsStart } from "../../redux/User/user.actions";
import sortList from "../../utils/constants/sortList.json";
import CAENList from "../../utils/constants/CAENList.json";

const mapState = ({ user }) => ({
  rankings: user.rankings,
});

const RankingLayout = (props) => {
  const { rankings } = useSelector(mapState);

  const [sortType, setSortType] = useState(
    rankings.filters.sortType ? rankings.filters.sortType : sortList[0]
  );
  const [CAEN, setCAEN] = useState(rankings.filters.CAEN);
  const [year, setYear] = useState(rankings.filters.year);
  const yearList = Array.from({ length: 21 }, (_, i) => (i + 2002).toString());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userFormRankingsStart({ sortType, CAEN, year }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    dispatch(userFormRankingsStart({ sortType, CAEN, year }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType, CAEN, year]);

  const handleSortTypeChange = (event, value) => {
    setSortType(value);
  };
  const handleCAENChange = (event, value) => {
    setCAEN(value);
  };
  const handleYearChange = (event, value) => {
    setYear(value);
  };

  return (
    <div className="h-full">
      <Navbar {...props} />
      <div className="relative inline-block w-full min-h-full pt-12 pl-[25rem]">
        <div className="absolute flex flex-col items-center top-0 left-0 w-[25rem] h-full z-[1] border-r border-[#d3d3d3]">
          <div className="w-[80%] mt-24">
            <div>
              <Autocomplete
                disablePortal
                disableClearable
                id="combo-box-demo"
                options={sortList}
                value={sortType}
                onChange={handleSortTypeChange}
                sx={{
                  "& .css-1in441m": {
                    fontSize: 12,
                  },
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputLabelProps={{ style: { fontSize: 16 } }}
                    label="Sort by"
                  />
                )}
              />
            </div>
          </div>
          <div className="w-[80%] mt-24">
            <div>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={yearList}
                value={year}
                onChange={handleYearChange}
                sx={{
                  "& .css-1in441m": {
                    fontSize: 12,
                  },
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputLabelProps={{ style: { fontSize: 16 } }}
                    label="Year"
                  />
                )}
              />
            </div>
          </div>
          <div className="w-[80%] mt-24">
            <div>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={CAENList}
                value={CAEN}
                onChange={handleCAENChange}
                sx={{
                  "& .css-1in441m": {
                    fontSize: 12,
                  },
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputLabelProps={{ style: { fontSize: 16 } }}
                    label="Field of activity"
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div className="h-full w-full">{props.children}</div>
      </div>
    </div>
  );
};

export default RankingLayout;
