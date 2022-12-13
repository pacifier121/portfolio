import classes from "./Projects.module.css";
import AnimatedLine from "./UI/AnimatedLine";

const ProjectContainer = ({project}) => {
    return ( 
       <div className={classes["project-container"]} >
            <h2>{project.title}</h2>
                <img src={project.img} />
                <p className={classes["project-description"]}>{project.description}</p>
                <p><a href={project.link}>Project Link</a></p>
                <p><a href={project.link}>Live Link</a></p>
           </div>
     );
}
 

const DUMMY = [
    {title: "Project #1", description: "Something about project", link: "https://somelink.com", img: "./images/Wallpaper - 01.jpg"},
    {title: "Project #2", description: "Something about project", link: "https://somelink.com", img: "./images/Wallpaper - 02.jpg"},
    {title: "Project #3", description: "Something about project", link: "https://somelink.com", img: "./images/Wallpaper - 03.jpg"},
    {title: "Project #4", description: "Something about project", link: "https://somelink.com", img: "./images/Wallpaper - 04.jpg"},
    {title: "Project #5", description: "Something about project", link: "https://somelink.com", img: "./images/Wallpaper - 05.jpg"},
]

const Projects = (props) => {
    const projects = DUMMY; 

    return (<div className={classes["outer-container"] + " " + (props.theme === "light" ? classes["project-light"] : classes["project-dark"])}>
        <div className={classes["header"]}>
            <h1>Projects</h1>
            <AnimatedLine />
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