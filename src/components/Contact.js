import classes from "./Contact.module.css";
import AnimatedHeader from "./UI/AnimatedHeader";
import Container from "./UI/Container";
import Button from "./UI/Button";

const Contact = (props) => {
    const formSubmitHandler = () => {

    } 

    return ( <div id="contact" className={classes["outer-container"] + " " + (props.theme === "light"? classes["contact-light"] : classes["contact-dark"])} >
        <div className={classes["header"]}>
            <AnimatedHeader>
            <h1>Contact</h1>
            </AnimatedHeader>
            <h3>Feel free to Contact me by submitting the form below and I will get back <br/>
                to you as soon as possible</h3>
        </div>
        <Container>

        <div className={classes["contact-form-container"]}>
            <div className={classes["name"]}>
                <label htmlFor="name">Name</label>
                <input placeholder="Enter your Name" type="text" name="name"/>
            </div>
            <div className={classes["email"]}>
                <label htmlFor="email">Email</label>
                <input placeholder="Enter your Email" type="text" name="email"/>
            </div>
            <div className={classes["message"]}>
                <label htmlFor="message">Message</label>
                <textarea placeholder="Enter your Message" type="text" name="message"></textarea>
            </div>
            <div className={classes["submit-button-container"]}><Button theme={props.theme} onClick={formSubmitHandler} >Submit</Button></div>
        </div>
        </Container>
    </div> );
}
 
export default Contact;