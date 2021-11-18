// React dependencies
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="">
                <div className="container">
                    <div className="py-5" id="footerContents">
                        <ul className="row">
                            <li className="col">
                                <a href="https://codepen.io/benaitcheson"><i className="fab fa-codepen fa-2x"></i></a>                                
                            </li>
                            <li className="col">
                                <a href="https://github.com/benaitcheson"><i className="fab fa-github fa-2x"></i></a>
                            </li>
                            <li className="col">
                                <a href="https://www.linkedin.com/in/ben-aitcheson-75963b84/"><i className="fab fa-linkedin fa-2x"></i></a>
                            </li>
                        </ul>
                    </div>

                    <hr className="white"></hr>
                    <p>copyright stuff</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer