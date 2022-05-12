import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import BounceDownFadeOut from "../BounceDownFadeOut";

const StepCAEN = ({ formStep }) => {
  const [CAEN, setCAEN] = useState("");

  const handleChange = (event) => {
    setCAEN(event.target.value);
    console.log("CAEN:", event.target.value);
  };

  return (
    <div className="flex flex-col w-[80%] justify-center items-center h-2/3">
      <p className="mb-24 text-[24px]">
        Choose your company's field of activity:
      </p>
      <BounceDownFadeOut text="Scroll down for more options" />

      <FormControl
        sx={{
          overflow: "scroll",
          paddingLeft: "20%",
          paddingRight: "20%",
          width: "100%",
        }}
      >
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="controlled-radio-buttons-group"
          value={CAEN}
          onChange={handleChange}
        >
          <FormControlLabel
            value="agriculture"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
            }
            label="Agriculture, forestry, fishing"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: 18,
              },
            }}
          />
          <FormControlLabel
            value="extraction"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
            }
            label="Extraction industry"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: 18,
              },
            }}
          />
          <FormControlLabel
            value="manufacturing"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
            }
            label="Manufacturing industry"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: 18,
              },
            }}
          />
          <FormControlLabel
            value="electricity"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
            }
            label="Production and supply of electricity and heat, gas, hot water and air conditioning"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: 18,
              },
            }}
          />
          <FormControlLabel
            value="water"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
            }
            label="Water distribution"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: 18,
              },
            }}
          />
          <FormControlLabel
            value="sanitation"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
            }
            label="Sanitation, waste management, decontamination activities"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: 18,
              },
            }}
          />
          <FormControlLabel
            value="construction"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
            }
            label="Construction"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: 18,
              },
            }}
          />
          <FormControlLabel
            value="sales"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
            }
            label="Wholesale and retail"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: 18,
              },
            }}
          />
          <FormControlLabel
            value="vehicles"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
            }
            label="Trade repair of motor vehicles and motorcycles"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: 18,
              },
            }}
          />
          <FormControlLabel
            value="transport"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
            }
            label="Transport and storage"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: 18,
              },
            }}
          />
          <FormControlLabel
            value="restaurants"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
            }
            label="Hotels and restaurants"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: 18,
              },
            }}
          />
          <FormControlLabel
            value="communications"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
            }
            label="Information and communications"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: 18,
              },
            }}
          />
          <FormControlLabel
            value="insurance"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
            }
            label="Financial intermediation and insurance"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: 18,
              },
            }}
          />
          <FormControlLabel
            value="realEstate"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
            }
            label="Real estate"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: 18,
              },
            }}
          />
          <FormControlLabel
            value="proffesions"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
            }
            label="Professional, scientific and technical activities"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: 18,
              },
            }}
          />
          <FormControlLabel
            value="administration"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
            }
            label="Administrative and support service activities"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: 18,
              },
            }}
          />
          <FormControlLabel
            value="publicAdministration"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
            }
            label="Public administration and defense"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: 18,
              },
            }}
          />
          <FormControlLabel
            value="health"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
            }
            label="Health and social work"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: 18,
              },
            }}
          />
          <FormControlLabel
            value="entertainment"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
            }
            label="Entertainment, cultural and recreational activities"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: 18,
              },
            }}
          />
          <FormControlLabel
            value="other"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
            }
            label="Other service activities"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: 18,
              },
            }}
          />
          <FormControlLabel
            value="householdEmployers"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
            }
            label="Activities of private households as employers of domestic personnel"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: 18,
              },
            }}
          />
          <FormControlLabel
            value="householdProduction"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
            }
            label="Activities of private households for the production of goods and services for own consumption"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: 18,
              },
            }}
          />
          <FormControlLabel
            value="female"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
            }
            label="Activități ale organizațiilor și organismelor extrateritoriale"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: 18,
              },
            }}
          />
          <FormControlLabel
            value="extraterritorial"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
            }
            label="Activities of extraterritorial organizations"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: 18,
              },
            }}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default StepCAEN;
