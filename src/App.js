import Navbar from './components/Navbar';
import Home from './components/Home';
import About from "./components/About";
import Projects from "./components/Projects";
import Container from "./components/UI/Container";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

const App = () => {
    return (<>
        <Navbar />
        <Home />
        <Container bg="#fafafa">
            <About />
        </Container>
        <Container bg="#fff">
            <Projects />
        </Container>
        <Contact />
        <Container bg="#000">
           <Footer /> 
        </Container>
    </>);
}
 
export default App;