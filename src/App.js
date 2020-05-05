import React from 'react';
import './App.scss';
import Header from "./Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import ProjectPage from "./ProjectPage/ProjectPage";

function App() {
  return (
      <Router>
          <div className="App">
              <Header/>
              <main className="container">
                  <Switch>
                      <Route path="/projects/:id" component={ProjectPage}/>
                      <Route path="/" component={Homepage}/>
                  </Switch>
              </main>
          </div>
      </Router>
  );
}

export default App;
