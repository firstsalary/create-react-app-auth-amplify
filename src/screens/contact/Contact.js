import React from 'react'
import './Contact.css'
import { NavigationLinks } from '../../helpers/NavigationLinks'


function createLinks() {
    return NavigationLinks.map((e, idx) => (
        <p key={idx}> <a href={e.ref}>{e.name}</a></p>
    ))
}

function Contact() {
    return (
        <div className="contact__container" id="contact">
            <div className="contact__data__links">
                <div>
                    <p>San Francisco, CA, USA</p>
                    <p>First Salary</p>
                    <p>talent@firstsalary.net</p>
                First Salary
                </div>
                <div>
                {createLinks()}
                </div>
            </div>
            <div style={{textAlign: 'center'}}> Copyright&copy; {new Date().getFullYear()} All rights reserved </div>
        </div>
    )
}

export default Contact
