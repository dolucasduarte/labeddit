import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";

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
        <div style={{ width: "100vw" }}>
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
