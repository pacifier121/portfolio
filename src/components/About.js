import classes from "./About.module.css"
import AnimatedLine from "./UI/AnimatedLine";
import Button from "./UI/Button";

const About = (props) => {
    return ( <div className={classes["outer-container"]}>
        <div className={classes["about-me"]}>
            <h1>About Me</h1>
            <AnimatedLine /> 
            <h3>Here is a quick glance of my skills about coding and tech</h3>
        </div>
        <div className={classes["know-me"]}>
            <h2>Get to know me!</h2>
            <p>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that 
            leads to the success of the overall product. Check out some of my work in the Projects section.</p>
            <p>I also like sharing content related to the stuff that I have learned over the years in Web Development so it 
            can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful 
            content related to Web Development and Programming.</p>
            <p>I'm open to Job opportunities where I can contribute, learn and grow. 
            If you have a good opportunity that matches my skills and experience then don't hesitate to contact me. </p>
            <Button>Contact</Button>
        </div>
        <div className={classes["my-skills"]}>
            <h2>My Skills</h2>
            <div className={classes["skillset"]}>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>React.js</p>
                <p>Git/Github</p>
                <p>Node.js</p>
                <p>DBMS</p>
                <p>Linux</p>
            </div>
        </div>
    </div> );
}
 
export default About;