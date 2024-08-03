import NavBar from "../layout/NavBar"
import Footer from "../layout/Footer"
import Hero from "../features/home/Hero"
import Timeline from "../features/home/Timeline"
import { Component  } from "react"

class Home extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Hero />
        <Timeline />
        <Footer />
      </>
    )
  }
}

export default Home