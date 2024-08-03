import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";
import { Component } from "react";
import Hero from "../features/characters/Hero";
import Chars from "../features/characters/Chars";

class Characters extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <NavBar />
        <Hero />
        <Chars />
        <Footer />
      </>
    );
  }
}

export default Characters;
