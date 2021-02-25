import "./App.css";
import NavBar from "./components/navbar/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Projects } from "./components/pages/Projects";
import { Contact } from "./components/pages/Contact";




function App() {
  return (
    <>
    <Router>
      <NavBar />
      <div className="pages">
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/projects" component={Projects}/>
      <Route exact path="/contact" component={Contact}/>
    </Switch>
    </div>
    </Router>
    </>
  )
}





export default App;
