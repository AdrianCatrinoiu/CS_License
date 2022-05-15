import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { checkUserIsAdmin } from "../utils";

const mapState = ({ user }) => ({
  user: user.user,
});

const useAdminAuth = (props) => {
  const { user } = useSelector(mapState);
  const navigate = useNavigate();
  useEffect(() => {
    if (!checkUserIsAdmin(user)) {
      navigate("/");
    }
  }, [user]);

  return user;
};

export default useAdminAuth;
