import classes from "./Projects.module.css";
import AnimatedHeader from "./UI/AnimatedHeader";

const ProjectContainer = ({project}) => {
    return ( 
       <div className={classes["project-container"]} >
            <h2>{project.title}</h2>
                <img src={project.img} />
                <p className={classes["project-description"]}>{project.description}</p>
                <div className={classes["links"]}>
                    <p><a target="_blank" href={project.project_link}>Project Link</a></p>
                    {project.live_link && <p><a target="_blank" href={project.live_link}>Live Link</a></p>}
                    {project.demo_link && <p><a target="_blank" href={project.demo_link}>Demo Link</a></p>}
                </div>
           </div>
     );
}
 
const myProjects = [
    {title: "ChatOcean", description: "Social Media Application with realtime chat (made with ReactJs, NodeJs, Socket.io, ExpressJs)", 
        project_link: "https://github.com/pacifier121/chatocean", demo_link: "https://www.youtube.com/watch?v=nsAT9Fd6M2M", live_link: "", img: "./images/sample_chatocean.png"},
    {title: "Algorithm Visualizer", description: "This app made with React.js is built to give a simulation of some simple and popular algorithms in computer science", 
        project_link: "https://github.com/pacifier121/algo-box", live_link: "https://pacifier121.github.io/algo-box/", img: "./images/algo-visualizer.png"},
    {title: "Digit Classifier", description: "An ML model that classifies a digit drawn on screen from 0 to 9.", 
        project_link: "https://github.com/pacifier121/digit-classifier", live_link: "https://digit-classifier-10ya.onrender.com", img: "./images/digit-classifier.png"},
]

const Projects = (props) => {
    const projects = myProjects; 

    return (<div id="projects" className={classes["outer-container"] + " " + (props.theme === "light" ? classes["project-light"] : classes["project-dark"])}>
        <div className={classes["header"]}>
            <AnimatedHeader>
                <h1>Projects</h1>
            </AnimatedHeader>
            <h3>Here you will find some of the personal and clients projects that I created with each project containing<br/>
                its own case study</h3>
        </div>
        <div className={classes["projects"]}>
           {projects.map((project) => (
                <ProjectContainer key={project.title} project={project} />
           ))} 
        </div>
    </div>);
}
 
export default Projects;