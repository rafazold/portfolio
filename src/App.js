import React from 'react';
import './App.scss';
import Header from "./Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Homepage from "./Homepage/Homepage";

function App() {
  return (
      <Router>
          <div className="App">
              {/*<img src="./assets/530.png"*/}
              {/*     className="layer"/>*/}
              <Header/>
              <main className="container">
                  <Switch>
                      {/*here we can add aditional paths*/}
                      <Route path="/" component={Homepage}/>
                  </Switch>
              </main>
          </div>
      </Router>
  );
}

export default App;
