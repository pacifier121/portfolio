import classes from './Navbar.module.css';
import DarkModeButton from './UI/DarkModeButton';

const Navbar = (props) => {
    return ( <nav className={classes['nav'] + " " + (props.theme === "light" ? classes["nav-light"] : classes["nav-dark"])}>
        <div className={classes['profile']}>
            <img src="myResumePic.jpg" />
            <h2>PRASHANT RAWAT</h2>
        </div>
        <div className={classes['nav-section']}>
            <DarkModeButton theme={props.theme} onClick={props.onThemeChange} />
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">PROJECTS</a>
            <a href="#">CONTACT</a>
            <a className={classes['resume-link']} href="#">Resume</a>
        </div>
    </nav> );
}
 
export default Navbar;