import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import FeedPage from "./pages/FeedPage";
import PostPage from "./pages/PostPage";

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
        <Component {...props} />
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

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/signup" component={SignUpPage} />
        <PublicRoute path="/login" component={SignInPage} />
        <PrivateRoute exact path="/" component={FeedPage} />
        <PrivateRoute exact path="/:id" component={PostPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
