import classes from './Navbar.module.css';
import DarkModeButton from './UI/DarkModeButton';

const goToViolation = (id)=>{
    const violation = document.getElementById(id); 
    window.scrollTo({
      top:violation.offsetTop,
      behavior:"smooth"
  });
};

const Navbar = (props) => {
    return ( <nav className={classes['nav'] + " " + (props.theme === "light" ? classes["nav-light"] : classes["nav-dark"])}>
        <div className={classes['profile']}>
            <img src="myResumePic.jpg" />
            <h2>PRASHANT RAWAT</h2>
        </div>
        <div className={classes['nav-section']}>
            <DarkModeButton theme={props.theme} onClick={props.onThemeChange} />
            <a onClick={() => goToViolation("home")} href="#home">HOME</a>
            <a onClick={() => goToViolation("about")} href="#about">ABOUT</a>
            <a href="#projects">PROJECTS</a>
            <a href="#contact">CONTACT</a>
            <a className={classes['resume-link']} href="#">Resume</a>
        </div>
    </nav> );
}
 
export default Navbar;