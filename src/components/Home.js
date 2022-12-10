import classes from './Home.module.css';
import Sidebar from './Sidebar';
import Button from "./UI/Button";

const Home = () => {
    return ( <div className={classes['container']}>
        <Sidebar />
        <div className={classes['inner-container']}>
            <h1 className="head-text">Hey, I'm Prashant Rawat</h1>
            <h2 className="subhead-text">And I'm a Web Developer</h2>
            <Button>PROJECTS</Button>
        </div>
    </div> );
}
 
export default Home;