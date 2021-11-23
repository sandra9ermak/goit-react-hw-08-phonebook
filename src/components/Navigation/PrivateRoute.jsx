import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
import { Redirect } from "react-router-dom";

const PrivateRoute = ({ children, ...routeProps }) => {
  const isLoggenIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggenIn ? children : <Redirect to="/login" />}
    </Route>
  );
};

export default PrivateRoute;
