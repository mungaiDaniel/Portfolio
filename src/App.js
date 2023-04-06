import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contacts from "./components/Contacts.jsx";
import Footer from "./components/Footer";
import Process from "./components/Process";
import Resume from "./components/Resume";

function App(){
  return (
    <>
    <Particles canvasClassName="tsparticles-canvas-el"
      params={{
        particles:{
          number:{
            value: 20,
            density:{
              enable:true,
              value_area: 1500
            }
          },
          shape:{
            type: "circle",
            stroke: {
              width: 6,
              color: "#f9ab00"
            }
          }
        }
      }}
    />
    <Header />
    <NavBar />
    <About />
    <Experience/>
    <Services />
    <Resume />
    <Process />
    <Work />
    <Contacts />
    <Footer/>
    </>
  )
}

export default App;
