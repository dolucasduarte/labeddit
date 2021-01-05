import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import FeedPage from "./pages/FeedPage";
import PostPage from "./pages/PostPage";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
        <Route exact path="/" component={FeedPage} />
        <Route exact path="/:id" component={PostPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
