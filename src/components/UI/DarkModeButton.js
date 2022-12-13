import classes from "./DarkModeButton.module.css";

const DarkModeButton = (props) => {
    return ( <div onClick={props.onClick} className={classes["button"] + " " + (props.theme === "light" ? classes["button-light"] : classes["button-dark"])}>
        <div className={classes["ball"]}>
            {props.theme === "light" ? <i class="fa-sharp fa-solid fa-sun"></i> : <i class="fa-sharp fa-solid fa-moon"></i>}
        </div>
    </div> );
}
 
export default DarkModeButton;