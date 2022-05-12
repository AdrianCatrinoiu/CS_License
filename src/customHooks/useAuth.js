import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const useAuth = (props) => {
  const { currentUser } = useSelector(mapState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  return currentUser;
};

export default useAuth;
