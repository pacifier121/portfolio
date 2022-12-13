import classes from './Sidebar.module.css';

const Sidebar = (props) => {
    return ( <div className={classes['sidebar'] + " " + (props.theme === "light" ? classes["sidebar-light"] : classes["sidebar-dark"])}>
        <a href="#">
            {/* LinkedIn */}
            <i className={classes['social-icon']} class="fa-brands fa-linkedin-in"></i>
        </a>        
        <a href="#">
            {/* Twitter */}
            <i className={classes['social-icon']} class="fa-brands fa-twitter"></i>
        </a>        
        <a href="#">
            {/* GitHub */}
            <i className={classes['social-icon']} class="fa-brands fa-github"></i>
        </a>        
        <a href="#">
            {/* Instagram */}
            <i className={classes['social-icon']} class="fa-brands fa-instagram"></i>
        </a>        
    </div> );
}
 
export default Sidebar;