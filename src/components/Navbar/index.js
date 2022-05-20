import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { signOutUserStart } from "../../redux/User/user.actions";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import MenuIcon from "@mui/icons-material/Menu";
import Logout from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

const mapState = (state) => ({
  user: state.user.user,
});

const Navbar = (props) => {
  const dispatch = useDispatch();
  const { user } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="h-28 bg-white">
      <div className="flex flex-row w-full h-full">
        <div className="flex rounded-full self-start items-center w-1/3 left-3 h-full">
          <Link to="/" className="flex flex-row items-center">
            <img
              className="w-32 h-24  ml-8 "
              src={Logo}
              alt="Nortec Noir Logo"
            />
            <p className="">Nortec noir</p>
          </Link>
        </div>
        <div className="w-1/3 flex justify-center items-center h-full">
          <div className="w-48 h-20 flex justify-center items-center hover:shadow-2xl text-center rounded-md hover:translate-y-1  hover:bg-lime-500  duration-300 ">
            <Link className="w-full h-full flex items-center" to="/">
              <p className="w-full text-center self-center">Home</p>
            </Link>
          </div>
        </div>
        <div className="w-1/3 h-full  flex flex-col justify-center self-end items-end">
          <div className="flex flex-row items-center justify-center mr-12">
            <Tooltip title="Account settings">
              <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                <Avatar sx={{ width: 32, height: 32 }}>
                  <MenuIcon />
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              {user ? (
                <div>
                  <Link
                    className="w-full h-full flex items-center"
                    to="/dashboard"
                  >
                    <MenuItem className="w-full">
                      <Avatar /> My account
                    </MenuItem>
                  </Link>
                  <Divider />

                  <MenuItem className="w-full" onClick={() => signOut()}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </div>
              ) : (
                <div>
                  <Link
                    className="w-full h-full flex items-center"
                    to="/register"
                  >
                    <MenuItem className="w-full">
                      <ListItemIcon>
                        <PersonAdd fontSize="large" />
                      </ListItemIcon>
                      Register
                    </MenuItem>
                  </Link>
                  <Link className="w-full h-full flex items-center" to="/login">
                    <MenuItem className="w-full">
                      <ListItemIcon>
                        <LoginIcon fontSize="large" />
                      </ListItemIcon>
                      Login
                    </MenuItem>
                  </Link>
                </div>
              )}
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
