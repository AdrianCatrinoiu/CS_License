import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { signOutUserStart } from "../../redux/User/user.actions";
const mapState = (state) => ({
  currentUser: state.user.currentUser,
});

const Navbar = (props) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <header className="h-28 border-b-2 border-green-800 bg-gradient-to-r from-green-900 to-lime-600">
      <div className="flex flex-row w-full h-full">
        <div className="flex rounded-full self-start items-center w-1/3 left-3 h-full">
          <Link to="/">
            <img
              className="w-32 h-24  ml-8 "
              src={Logo}
              alt="Nortec Noir Logo"
            />
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
            {currentUser && (
              <>
                <div className="w-48 h-20 flex justify-center items-center hover:shadow-2xl text-center rounded-md hover:translate-y-1  hover:bg-lime-500  duration-300 mr-4">
                  <Link
                    className="w-full h-full flex items-center"
                    to="/dashboard"
                  >
                    <p className="w-full text-center self-center">My account</p>
                  </Link>
                </div>
                <div className="w-48 h-20 flex justify-center items-center hover:shadow-2xl text-center rounded-md hover:translate-y-1  hover:bg-lime-500  duration-300 cursor-pointer">
                  <span
                    className="w-full h-full flex items-center"
                    onClick={() => signOut()}
                  >
                    <p className="w-full text-center self-center">Logout</p>
                  </span>
                </div>
              </>
            )}
          </div>

          <div className="flex flex-row items-center mr-20">
            {!currentUser && (
              <>
                <div className="w-48 h-20 flex justify-center items-center hover:shadow-2xl text-center rounded-md hover:translate-y-1  hover:bg-green-800  duration-300 mr-4">
                  <Link
                    className="w-full h-full flex items-center"
                    to="/register"
                  >
                    <p className="w-full text-center self-center">Register</p>
                  </Link>
                </div>

                <div className="w-48 h-20 flex justify-center items-center hover:shadow-2xl text-center rounded-md hover:translate-y-1  hover:bg-green-800  duration-300 ">
                  <Link className="w-full h-full flex items-center" to="/login">
                    <p className="w-full text-center self-center">Login</p>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
