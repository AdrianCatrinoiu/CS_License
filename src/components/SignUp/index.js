import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpUserStart } from "../../redux/User/user.actions";
import "./styles.scss";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Email from "@mui/icons-material/AlternateEmail";
import Password from "@mui/icons-material/Https";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import { userError } from "../../redux/User/user.actions";
const mapState = ({ user }) => ({
  user: user.user,
  userErr: user.userErr,
});

const SignUp = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, userErr } = useSelector(mapState);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState();

  const reset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError(null);
  };
  useEffect(() => {
    if (user) {
      reset();
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  useEffect(() => {
    setError(userErr);
  }, [userErr]);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      signUpUserStart({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      })
    );
  };
  const handleFirstNameChange = (event, value) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event, value) => {
    setLastName(event.target.value);
  };
  const handleEmailChange = (event, value) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event, value) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event, value) => {
    setConfirmPassword(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="h-full bg-white w-full sm:bg-[url('./assets/background.svg')]  sm:bg-[length:1500px] md:bg-[length:1800px] lg:bg-[length:2000px] xl:bg-[length:2300px] 2xl:bg-[length:2500px] bg-[length:800px] bg-no-repeat bg-bottom">
      <div className="absolute sm:top-[10%] top-[90%] mt-[30px] left-[100px]">
        <Link to="/">
          <Fab variant="extended" onClick={() => dispatch(userError(""))}>
            <NavigationIcon
              sx={{
                transform: "rotate(270deg)",
              }}
            />
          </Fab>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <div className="mt-[10%]">
          {error && (
            <p className=" font-MontserratBold text-red-500">{error}</p>
          )}
        </div>
        <div className="p-12 sm:w-1/2 h-full flex flex-col items-center justify-center divide-y-2 ">
          <div className="w-[80%] flex flex-col items-center justify-center mb-8">
            <TextField
              label="First name"
              sx={{ m: 2, width: "25ch" }}
              value={firstName}
              onChange={handleFirstNameChange}
              InputLabelProps={{ style: { fontSize: 16 } }}
              InputProps={{
                style: { fontSize: 16 },
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton size="small" disabled>
                      <PersonIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Last name"
              sx={{ m: 2, width: "25ch" }}
              value={lastName}
              onChange={handleLastNameChange}
              InputLabelProps={{ style: { fontSize: 16 } }}
              InputProps={{
                style: { fontSize: 16 },
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton size="small" disabled>
                      <PersonIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Email"
              sx={{ m: 2, width: "25ch" }}
              value={email}
              onChange={handleEmailChange}
              InputLabelProps={{ style: { fontSize: 16 } }}
              InputProps={{
                style: { fontSize: 16 },
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton size="small" disabled>
                      <Email />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Password"
              sx={{ marginY: 2, width: "25ch" }}
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              InputLabelProps={{ style: { fontSize: 16 } }}
              InputProps={{
                style: { fontSize: 16 },
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton size="small" disabled>
                      <Password />
                    </IconButton>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Confirm password"
              sx={{ marginY: 2, width: "25ch" }}
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              InputLabelProps={{ style: { fontSize: 16 } }}
              InputProps={{
                style: { fontSize: 16 },
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton size="small" disabled>
                      <Password />
                    </IconButton>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <div className="w-full flex flex-row justify-center">
              <Button
                variant="contained"
                color="success"
                endIcon={<ArrowForwardIcon />}
                onClick={handleSubmit}
              >
                <p className="text-2xl"> Sign up</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
