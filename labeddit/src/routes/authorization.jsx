import { Route, Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";

function isAuthenticated() {
  const token = localStorage.getItem("token");
  if (token) return true;
  return false;
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <div>
          <Navbar />
          <Component {...props} />
        </div>
      ) : (
        <Redirect
          to={{ pathname: "/signup", state: { from: props.location } }}
        />
      )
    }
  />
);

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export { PrivateRoute, PublicRoute };
