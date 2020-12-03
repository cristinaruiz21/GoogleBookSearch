import React from "react";
import Search from "./pages/Search";
import Save from "./pages/Save";
import Nav from "./components/Navbar";
import {Route, BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Search} />
        <Route exact path="/books" component={Search}/>
        <Route exact path="/savedbooks" component={Save}/>
      </div>
    </Router>
  );
}

export default App;
