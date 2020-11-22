import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./components/HomePage";
import { ResumePage } from "./components/ResumePage";
import { ContactPage } from "./components/ContactPage";

function App() {
  return (
    <Router>
      <NavBar />
      {/* <Contact /> */}
      <Route path="/" component={HomePage} exact />
      <Route path="/resume" component={ResumePage} />
      <Route path="/contact" component={ContactPage} />
    </Router>
  );
}

export default App;
