import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Navigation.css'
import { NavigationLinks } from '../../helpers/NavigationLinks'

// Generate links using helper

function createLinks() {
    return NavigationLinks.map(
        (e, idx) => (
            <Nav.Link key={idx} href={e.ref}>{e.name}</Nav.Link>
        )
    )
}
function NavigationBar() {
    return (
        <div id="home">
            <Navbar className="navigation__container" expand='md' fixed="top">
                <Navbar.Brand style={{ marginLeft: '1rem' }} href='#home'>First Salary</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse style={{ justifyContent: 'flex-end', marginRight: '1rem', borderColor: 'none' }}>
                    <Nav className='navigation__links' style={{margin: '0 1rem'}}>
                        {createLinks()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar
