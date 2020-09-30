import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Homepage from './components/Homepage';
import CreateListing from './components/CreateListing';
import CreateUser from './components/CreateUser';
import EditListing from './components/EditListing';

function App() {
  return (
    <>
      <NavigationBar />
      <Router>
        <div className="container">
          <br />
          <Route path="/" exact component={Homepage} />
          <Route path="/edit/:id" component={EditListing} />
          <Route path="/create" component={CreateListing} />
          <Route path="/register" component={CreateUser} />
        </div>
      </Router>
    </>
  );
}

export default App;
