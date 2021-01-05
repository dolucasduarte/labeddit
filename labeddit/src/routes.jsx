import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import FeedPage from "./pages/FeedPage";
import PostPage from "./pages/PostPage";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={SignInPage} />
        <Route exact path="/" component={FeedPage} />
        <Route exact path="/:id" component={PostPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
