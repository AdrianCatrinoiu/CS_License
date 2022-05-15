import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const mapState = ({ user }) => ({
  user: user.user,
});

const useAuth = (props) => {
  const { user } = useSelector(mapState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return user;
};

export default useAuth;
