import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Home from "./containers/Home/Home";
import Navbar from "./component/Navbar/Navbar"

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Navbar/>
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
