import NavBar from "../layout/NavBar"
import Footer from "../layout/Footer"
import { Component } from "react"
import Hero from "../features/about/Hero"

class About extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <NavBar />
        <Hero />
        <Footer />
      </>
    )
  }
}
export default About