import { BrowserRouter, Switch } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./authorization";
import SignUpPage from "pages/AuthenticationPages/SignUpPage";
import SignInPage from "pages/AuthenticationPages/SignInPage";
import FeedPage from "pages/FeedPage/FeedPage";
import PostPage from "pages/PostPage/PostPage";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/signup" component={SignUpPage} />
        <PublicRoute path="/login" component={SignInPage} />
        <PrivateRoute exact path="/" component={FeedPage} />
        <PrivateRoute path="/:id" component={PostPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
