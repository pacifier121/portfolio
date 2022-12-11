import Navbar from './components/Navbar';
import Home from './components/Home';
import About from "./components/About";
import Projects from "./components/Projects";
import Container from "./components/UI/Container";
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
    </>);
}
 
export default App;