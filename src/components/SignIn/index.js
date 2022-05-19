import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { emailSignInStartAction } from "../../redux/User/user.actions";
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
import { Link } from "react-router-dom";

const mapState = ({ user }) => ({
  user: user.user,
});

const SignIn = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(mapState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };
  //at sign-in
  useEffect(() => {
    if (user) {
      resetForm();
      navigate("/form");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(emailSignInStartAction({ email, password }));
  };

  const handleEmailChange = (event, value) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event, value) => {
    setPassword(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="p-12 sm:w-1/2 h-full flex flex-col items-center justify-center divide-y-2">
      <div className="w-[80%] flex flex-col items-center justify-center mb-8">
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
                <IconButton size="small">
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
                <IconButton size="small">
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

        <div className="w-full flex flex-row justify-between">
          <Button variant="text" color="success">
            <p className="text-2xl">Forgot password?</p>
          </Button>
          <Button
            variant="contained"
            color="success"
            endIcon={<ArrowForwardIcon />}
            onClick={handleSubmit}
          >
            <p className="text-2xl"> Sign In</p>
          </Button>
        </div>
      </div>
      <div className="">
        <div className="mt-8 flex flex-row justify-between">
          <p>No account yet?</p>
          <Link to="/register">
            <Button variant="text" color="success">
              <p className="text-2xl">Sign up</p>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
