import React from 'react';
import "./css_file/footer.css";

function Contact() {
    return (
        <form
            action="https://formspree.io/f/myyakozk"
            method="POST"
        >
            <label>
                Your Name:<br></br>
                <input type = "text" name="name" />
            </label>
            <label>
                Your email:<br/>
                <input type="email" name="email" />
            </label>
            <label>
                Your message:<br></br>
                <textarea name="message"></textarea>
            </label>
            <button type="submit">Send</button>
            <button><a href = "https://docs.google.com/document/d/1LKwPoLmO7usOJYv3HeMaliHop_2q9CGsEhUyw93PjAQ/edit?usp=sharing" target="_blank">Download Resume</a></button>
        </form>
    );
}
export default Contact;
