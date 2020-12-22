import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" component={Users} exact />
          <Route path="/places/new" component={NewPlace} exact />
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
