import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const mapState = ({ user }) => ({
  user: user.user,
});
export const checkUserIsAdmin = (currentUser) => {
  if (!currentUser || currentUser.role === "user") return false;
  return true;
};
const useAdminAuth = (props) => {
  const { user } = useSelector(mapState);
  const navigate = useNavigate();
  useEffect(() => {
    if (!checkUserIsAdmin(user)) {
      navigate("/");
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return user;
};

export default useAdminAuth;
