import { BrowserRouter, Switch } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./authorization";
<<<<<<< HEAD
import SignUpPage from "pages/AuthenticationPages/SignUpPage";
import SignInPage from "pages/AuthenticationPages/SignInPage";
import FeedPage from "pages/FeedPage/FeedPage";
import PostPage from "pages/PostPage/PostPage";
=======
import SignUpPage from "../pages/AuthenticationPages/SignUpPage";
import SignInPage from "../pages/AuthenticationPages/SignInPage";
import FeedPage from "../pages/FeedPage";
import PostPage from "../pages/PostPage";
>>>>>>> 993da5a39915945b0912bcb243ef3138d10481c0

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
