import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    // https://c7d98a2a9c36.ngrok.io 
    <div className="app">
      {!user ? (
        <Login></Login>
      ) : (
        <div className="app__body">
          <Router>
            <Switch>
              {/* <Sidebar></Sidebar> */}
              <Route path="/rooms/:roomId">
              <Sidebar></Sidebar>
                <Chat></Chat>
              </Route>

              <Route >
                <Chat></Chat>
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
