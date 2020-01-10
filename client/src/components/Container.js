import React from "react";
import "./../App.css";
import Home from "./Home.js";
import Post from "./Post.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";
import Gallery from "./Gallery";

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
function Container() {
  return (
    <div>
      <div class="container">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <div text="center" style={{ marginTop: "0px" }}>
            <h3
              style={{
                fontFamily: "cursive",
                color: "white",
                marginLeft: "80%",
                width: "120%"
              }}
            >
              {" "}
              Studio Arts of Kalen & Julliot
            </h3>
          </div>
        </nav>
        <Router>
          <div>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark ">
              <ul>
                <li>
                  <NavLink className="Nav_link" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="Nav_link" to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className="Nav_link" to="/dashboard">
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink className="Nav_link" to="/post">
                    Post Arts
                  </NavLink>
                </li>
                <NavLink className="Nav_link" to="/post">
                  Gallery
                </NavLink>
                <li>
                  <br></br>
                  <NavLink className="Nav_link" to="/registration">
                    SignUp
                  </NavLink>
                </li>
                <li>
                  <NavLink className="Nav_link" to="/login">
                    Login
                  </NavLink>
                </li>
              </ul>
            </nav>
            <hr />

            {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/post">
                <Post />
              </Route>
              <Route path="/signup">
                <Registration />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default Container;
