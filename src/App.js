import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import ContactMe from './components/ContactMe/ContactMe';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Resume" component={Resume} />
        <Route exact path="/ContactMe" component={ContactMe} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
