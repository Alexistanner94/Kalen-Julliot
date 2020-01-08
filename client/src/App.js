import React from "react";
import Container from "./components/Container";
import Form from "./components/Form";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Gallery />
      <Container />
      <Footer />
    </>
  );
}

export default App;
