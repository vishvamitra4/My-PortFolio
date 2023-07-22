import React from "react";
import { ReactDOM } from "react-dom/client";
import "./css_file/footer.css";
import Contact from "./Contact";
function Footer() {
    return (
        <div id="footer" className="flex-box-container-5">
            <h2>Contact Me</h2>

            <div class="address">
                <p><i className="fa fa-map-marker fa-fw"></i>Amber Hostel , IIT ISM Dhanbad</p>
                <p><i className="fa fa-phone fa-fw"></i> Phone: 8287699191</p>
                <p><i className="fa fa-envelope fa-fw"></i> Email: vishvamitra.19je0920@agp.iitism.ac.in</p>
            </div>

            <p>Send me a message:</p>


            <Contact />


            <div class="flex-box-container-6">
                <div>
                    <a href="https://www.facebook.com/vishvamitrakumar.singh" target="_blank"><i className="fa fa-facebook-official"></i></a>
                    <a href="https://www.instagram.com/vishvamitra4/" target="_blank"><i className="fa fa-instagram "></i></a>
                    <a href="https://www.linkedin.com/in/vishvamitra-kumar-singh-59a1201ab/" target="_blank"><i className="fa fa-linkedin "></i></a>
                </div>

                <p>created by @vishvamitra</p>
            </div>

        </div>
    )
}


export default Footer;



/* <p><input type="text" placeholder="Name" /></p>
                <p><input type="text" placeholder="Email" /></p>
                <p><input type="text" placeholder="Subject" /></p>
                <p><input type="text" placeholder="Message" /></p>
                <p>
                    <button type="submit">
                        <i className="fa fa-paper-plane"></i> SEND MESSAGE
                    </button>
                </p> */