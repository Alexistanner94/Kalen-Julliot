<<<<<<< HEAD
import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Route path="/" exact Component={Home} />
        <Route path="/profile" Component={Profile} />
      </>
    );
  }
=======
import React from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Carousel from "./components/Carousel";
import Form from "./components/Form";
import "./App.css";

function App() {
  return <Navbar />;
>>>>>>> 5155304ce7af80735b9e41ffbd9cf6459a0242c1
}

export default App;
