import Navbar from './components/Navbar';
import Home from './components/Home';
import About from "./components/About";
import Projects from "./components/Projects";
import Container from "./components/UI/Container";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Divider from "./components/UI/Divider";
import {useState } from "react";
import './App.css';

const App = () => {
    const [theme, setTheme] = useState("light");
    
    const themeChangeHandler = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (<>
        <Navbar theme={theme} onThemeChange={themeChangeHandler} />
        <Home theme={theme} />
        <Container bg={theme === "light" ? "#fafafa": "#111"}>
            <About theme={theme} />
        </Container>
        <Container bg={theme === "light" ? "#fff": "#000"}>
            <Projects theme={theme}/>
        </Container>
        <Contact theme={theme}/>  
        {theme !== "light" && <Divider />}
        <Container bg="#000">
           <Footer theme={theme} /> 
        </Container>
    </>);
}
 
export default App;