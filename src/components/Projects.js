import classes from "./Projects.module.css";
import AnimatedLine from "./UI/AnimatedLine";

const DUMMY = [
    {title: "Project #1", description: "Something about project", link: "https://somelink.com"},
    {title: "Project #2", description: "Something about project", link: "https://somelink.com"},
    {title: "Project #3", description: "Something about project", link: "https://somelink.com"},
    {title: "Project #4", description: "Something about project", link: "https://somelink.com"},
    {title: "Project #5", description: "Something about project", link: "https://somelink.com"},
]

const Projects = (props) => {
    const projects = DUMMY; 

    return (<div className={classes["outer-container"]}>
        <div className={classes["header"]}>
            <h1>Projects</h1>
            <AnimatedLine />
            <h3>Here you will find some of the personal and clients projects that I created with each project containing<br/>
                its own case study</h3>
        </div>
        <div className={classes["projects"]}>
           {projects.map((project) => (
               <div className={classes["project-container"]}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <a>{project.link}</a>
               </div>
           ))} 
        </div>
    </div>);
}
 
export default Projects;