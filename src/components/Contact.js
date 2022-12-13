import classes from "./Contact.module.css";
import AnimatedLine from "./UI/AnimatedLine";
import Container from "./UI/Container";

const Contact = (props) => {
    return ( <div className={classes["outer-container"] + " " + (props.theme === "light"? classes["contact-light"] : classes["contact-dark"])} >
        <div className={classes["header"]}>
            <h1>Contact</h1>
            <AnimatedLine />
            <h3>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</h3>
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
        </div>
        </Container>
    </div> );
}
 
export default Contact;