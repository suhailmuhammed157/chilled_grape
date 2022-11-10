import "./index.scss";
import footerLeft from "../../../public/assets/bottom-left.png";
import { Link } from "react-router-dom";
import {
    faTelegram,
    faYoutube,
    faTwitter,
    faFacebook,
    faInstagram,
    faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className="footer">
            <img src={footerLeft} alt="foot" />
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Chilled grape</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Careers</a>
                            </li>
                            <li>
                                <a href="#">Our Work</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Products</h4>
                        <ul>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Careers</a>
                            </li>
                            <li>
                                <a href="#">Our Work</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="rows">
                                <div className="social-button">
                                    <Link>
                                        {" "}
                                        <FontAwesomeIcon icon={faTelegram} />
                                    </Link>
                                </div>
                                <div className="social-button">
                                    <Link>
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </Link>
                                </div>
                                <div className="social-button">
                                    <Link>
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </Link>
                                </div>                        
                           
                        </div>
                         <div className="rows">
                               
                                <div className="social-button">
                                    <Link>
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </Link>
                                </div>
                                <div className="social-button">
                                    <Link>
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </Link>
                                </div>
                                <div className="social-button">
                                    <Link>
                                        <FontAwesomeIcon icon={faTiktok} />
                                    </Link>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </footer>
       
    );
}
