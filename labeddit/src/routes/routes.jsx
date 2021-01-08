import { BrowserRouter, Switch } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./authorization";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";
import FeedPage from "../pages/FeedPage";
import PostPage from "../pages/PostPage";

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
