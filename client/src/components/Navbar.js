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
import Carousel from "react-bootstrap/Carousel";
import Registration from "./Registration";
import Login from "./Login";

function About() {
  return (
    <div class="about">
      <p>
        <h3 class=" heading"> Visual Arts Of Kalen & Julliot </h3>
        The inspiration for Visuals Arts of Kalen &Julliot came from two local
        artists, Kalen ,originally for ( Insert location here ) , and Zakary
        Julliot, originally from Haiti. These are two very talented artists who
        specialize in several different genres of art like paintings, drawings,
        and photography. These local Artists are well known in their communities
        for their empowering photography and their amazingly detailed paintings.
        Seeing the recognition they received from their community, they wanted
        showcase their work to other art lovers all over the world. Visual Arts
        of Kalen & Julliot is a Platform that will allow any Artist to showcase
        their art, globally, and receive real feedback from other artists and
        art lovers all over the world. If you are an aspiring artist, and want
        to get real advice and helpful tips on your are work Click Here ( hyper
        link to Sign Up).{" "}
      </p>
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
function Navbar() {
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
                <li>
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
              <Route path="/registration">
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

export default Navbar;
