import React, { useState } from 'react'
import "./Contact.css"
import db from './firebase'
function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [issent, setIssent] = useState(false);
    const sendMsg = (event) => {
        event.preventDefault();
        setName('');
        setEmail('');
        setMessage('');
        db.collection('FORM_SUBMISSIONS').add({
            name: name,
            email: email,
            message: message
        });
        setIssent(true);
        setTimeout(() => {
            setIssent(false);
        }, 5000);
    }
    return (
        <div id='contactPage'>
            <h1>Contact Me</h1>
            {
                issent && (
                    <h3>Thank you {name} for your Message.</h3>
                )
            }
            <div className="contactForm">
                <form name="contact">
                    <label htmlFor="Name">Your Name</label><br />
                    <input type="text" name="Name" id="Name" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} /><br />
                    <label htmlFor="Name">Your E-Mail ID</label><br />
                    <input type="email" name="mail" id="mail" placeholder='Your E-Mail Address'

                        value={email} onChange={(e) => setEmail(e.target.value)}
                    /><br />
                    <label htmlFor="Name">Your Message</label><br />
                    <textarea
                        value={message} onChange={(e) => setMessage(e.target.value)}
                    ></textarea><br />
                    <button type='submit' id='sendMSg' onClick={sendMsg}>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact