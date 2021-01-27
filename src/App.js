import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./containers/Projects/Projects";
import Contact from "./containers/Contact/Contact";
import Home from "./containers/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import Background from "./component/Background/Background"

function App(props) {
  return (
    <div className="App">
      <Router basename="/">
        <Navbar/>
        {/* <Background image={props.Background}/> */}
        <Switch>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
