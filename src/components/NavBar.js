import React from "react";
// import {Link} from 'react-scroll'
import {Link as LinkRouter} from "react-router-dom"

const NavBar = () => {

    return (
        <div className="navigation">
            <div className="navButtons">
                <div className="navButtonWrapper">
                    <button className="navButton">
                        <LinkRouter className="navButtonLink"
                                    to="/">
                            <p>Start</p>
                        </LinkRouter>
                    </button>
                </div>
                <div className="navButtonWrapper">
                    <button className="navButton">
                        <LinkRouter className="navButtonLink"
                              to="/about"
                              spy={true}
                              smooth={true}
                              duration={500}>
                            <p>O mnie</p>
                        </LinkRouter>
                    </button>
                </div>
                <div className="navButtonWrapper">
                    <button className="navButton">
                        <LinkRouter className="navButtonLink"
                              to="portfolio"
                              spy={true}
                              smooth={true}
                              duration={500}>
                            <p>Prace</p>
                        </LinkRouter>
                    </button>
                </div>
                <div className="navButtonWrapper">
                    <button className="navButton">
                        <LinkRouter className="navButtonLink"
                              to="contact"
                              spy={true}
                              smooth={true}
                              duration={500}>
                            <p>Kontakt</p>
                        </LinkRouter>
                    </button>
                </div>
            </div>
        </div>)
}

export default NavBar