import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Landing";
import SignInPage from "./pages/Login";
import SignUpPage from "./pages/Register";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SignInPage} exact />
        <Route path='/signup' component={SignUpPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
