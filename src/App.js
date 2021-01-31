import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./containers/Projects/Projects";
import Contact from "./containers/Contact/Contact";
import Home from "./containers/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer"
// import Background from "./component/Background/Background"

function App(props) {
  const styleME ={
    backgroundImage: `url("https://wallpapercave.com/wp/ZEBuAbe.jpg")`,
backgroundSize: "cover",
backgroundPosition: 'center center',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat',
maxWidth: '100vw',
height: '100vh',
position: "absolute",
backgroundAttachment: "fixed"


  
  }
  return (
    <div className="App" style={styleME}>
      <Router basename="/">
        <Navbar/>
  
        <Switch>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/" component={Home}/>
        </Switch>
        <Footer/>

      </Router>
    </div>
  );
}

export default App;
