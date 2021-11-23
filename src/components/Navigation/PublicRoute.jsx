import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
import { Redirect } from "react-router-dom";

const PublicRoute = ({ children, restricted = false, ...routeProps }) => {
  const isLoggenIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggenIn && restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to="/" /> : children}
    </Route>
  );
};

export default PublicRoute;
