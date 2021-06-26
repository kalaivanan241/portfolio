import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Experience from "./pages/Experience/Experience";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route component={Home} path="/" exact />
          <Route component={Experience} path="/experience" />
          <Route component={Skills} path="/skills" />
          <Route component={Contact} path="/contact-me" />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
