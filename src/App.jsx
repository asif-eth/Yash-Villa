
import React from "react";
import "./App.css";
import "../public/fonts/fonts.css"
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Hero from "./components/hero/Hero";
import Map from "./components/map/Map";

function App() {
  return (
    <>
      <Hero />
      <Form />
      <Map />
      <Footer />
    </>
  );
}

export default App;
