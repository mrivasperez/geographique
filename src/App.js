import { BrowserRouter as Router, Route } from "react-router-dom";
import Users from "./user/pages/Users";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Users} exact />
    </Router>
  );
};

export default App;
