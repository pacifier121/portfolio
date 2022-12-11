import classes from "./Footer.module.css";

const Footer = (props) => {
    return (<div className={classes["footer"]}>
        <div className={classes["about-me"]}>
            <h2>Prashant Rawat</h2>
            <p>A web developer</p>
        </div>
        <div className={classes["socials"]}>
            <h2>Socials</h2>
            <div className={classes["socials-container"]}>
                <i className={classes['social-icon']} class="fa-brands fa-linkedin-in"></i>
                <i className={classes['social-icon']} class="fa-brands fa-twitter"></i>
                <i className={classes['social-icon']} class="fa-brands fa-github"></i>
                <i className={classes['social-icon']} class="fa-brands fa-instagram"></i>
            </div>
        </div>
        <div className={classes["copyright"]}>
            <p>© Copyright 2022. Made by Prashant Rawat</p>
        </div>
    </div>);
}
 
export default Footer;