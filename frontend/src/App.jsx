import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import "./styles/App.css";
import NavigationBar from "./components/NavigationBar";
import Homepage from "./components/Homepage";
import CreateListing from "./components/CreateListing";
import CreateUser from "./components/CreateUser";
import EditListing from "./components/EditListing";
import ListingList from "./components/ListingList";

function App() {
  return (
    <Router>
      <div className="container">
        <NavigationBar />
        <br />
        <Route path="/" exact component={ListingList} />
        <Route path="/edit/:id" component={EditListing} />
        <Route path="/create" component={CreateListing} />
        <Route path="/register" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
