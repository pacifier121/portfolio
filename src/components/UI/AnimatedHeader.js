import classes from "./AnimatedHeader.module.css";

const AnimatedHeader = (props) => {
    return ( 
            <div className={classes["animated-header"]} >
                {props.children}
                <div className={classes["animated-line"]}></div>
            </div>
     );
}
 
export default AnimatedHeader;