import React from "react";
import Header from "./components/Header";
import Navbar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
