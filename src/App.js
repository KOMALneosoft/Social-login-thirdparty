import logo from "./logo.svg";
import "./App.css";
import SocialLogin from "./components/SocialLogin";
import Pagination from "./components/Pagination";
import { Route, Switch } from "react-router-dom";
import SApp from "./components/searchapp";

function App() {
  return (
    <div>
      {/* <SocialLogin/> */}
      {/* <Pagination/> */}
      {/* <DemoPage/> */}
      <SApp />

      <Switch>
        <Route path="/" exact component={SocialLogin} />
        <Route path="/page" component={Pagination} />
        {/* <Route path="/search" component={Searching} /> */}
      </Switch>
    </div>
  );
}

export default App;
