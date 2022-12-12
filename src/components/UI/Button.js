import classes from './Button.module.css';

const Button = (props) => {
    return ( <div className={classes['button'] + " " + props.className + " " + 
                (props.theme === "light" ? classes["button-light"] : classes["button-dark"])}>
        {props.children}
    </div> );
}
 
export default Button;