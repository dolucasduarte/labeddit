import { Route, Redirect } from "react-router-dom";
import Header from "components/Header/Header";

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
          <Header />
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
