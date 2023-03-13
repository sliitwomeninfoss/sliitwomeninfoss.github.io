import logo from '../../assets/img/logos/footer-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import backgroundImage from '../../assets/img/other/footer-topography.svg'
import 'font-awesome/css/font-awesome.min.css';


export default function Footer() {
    return (
        <div>
            <footer id="footer">
                <div class="footer-top" style={{ backgroundImage: `url('${backgroundImage}')` }}>
                    <div class="container">
                        <div class="row">

                            {/* Logo and description */}
                            <div class="col-lg-5 col-md-12 text-left footer-info">
                                <div class="f-info">
                                <img src={logo} alt="logo" height="80" width="130" class="img-fluid just footer-logo" />
                                <p>
                                    Welcome to SLIIT Women In FOSS Community. 
                                    We're a group of volunteers who believe in the
                                    usage of Free/Open Source Software (FOSS)
                                </p>

                                {/* Social media links */}
                                <span class="connect">Connect with us</span>

                                <div class="social-links">
                                    <a href="https://www.facebook.com/sliitwif/" class="facebook">
                                        <FontAwesomeIcon icon={['fab', 'facebook']} />
                                    </a>
                                    <a href="https://www.instagram.com/sliitwif/" class="instagram">
                                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                                    </a>
                                    <a href="https://twitter.com/sliitwif" class="twitter">
                                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                                    </a>
                                    <a href="https://www.linkedin.com/company/sliit-women-in-foss-community/" class="linkedin">
                                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                                    </a>
                                    {/* <a href="!#" class="youtube">
                                        <FontAwesomeIcon icon={['fab', 'youtube']} />
                                    </a> */}
                                </div>
                                </div>
                            </div>

                            {/* Useful Links */}
                            <div class="col-lg-3 col-md-6 text-left  footer-links">
                                <h4 class="fheader">Useful Links</h4>

                                <ul>
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="/about-us">About Us</a>
                                    </li>
                                    <li>
                                        <a href="/contact-us">Contact Us</a>
                                    </li>
                                    {/* <li>
                                        <a href="!#">Blog</a>
                                    </li> */}
                                    <li>
                                        <a href="/past-events">Events</a>
                                    </li>
                                    <li>
                                        <a href="/code-of-conduct">
                                            Code of Conduct
                                        </a>
                                    </li>
                                    {/* <li>
                                        <a href="!#">GutHub</a>
                                    </li>
                                    <li>
                                        <a href="!#">Leaderboard</a>
                                    </li>
                                    <li>
                                        <a href="!#">Brand Assets</a>
                                    </li>
                                    <li>
                                        <a href="!#">Contribution Guidelines</a>
                                    </li>
                                    <li>
                                        <a href="!#">Annual Report 2020</a>
                                    </li> */}
                                </ul>
                            </div>

                            {/* Subscribe */}
                            <div class="col-lg-4 col-md-6 text-left footer-newsletter">
                                <h4 class="fheader">Subscribe</h4>
                                <p class="subscribe_text">
                                    Don’t forget to subscribe to our news letters, enter your e-mail here.
                                </p>
                                {/* Email form */}
                                <div class="subscribe-form">
                                    <form
                                    // action=""
                                    // method="post"
                                    >
                                        <input type="email" name="email" placeholder="Email Address" />
                                        <button><i class="fa fa-envelope-o"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright area */}
                <div class="copyright-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12">
                                <div class="copyright-text">
                                    <p>
                                        Copyright &copy; {new Date().getFullYear()} | All Rights Reserved
                                        <a href="!#"> SLIIT Women In FOSS</a>
                                    </p>
                                </div>
                            </div>
                            {/* <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div class="footer-menu">
                                    <ul>
                                        <li><a href="!#">Home</a></li>
                                        <li><a href="!#">Terms</a></li>
                                        <li><a href="!#">Privacy</a></li>
                                        <li><a href="!#">Policy</a></li>
                                        <li><a href="!#">Contact</a></li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </footer>
        </div>)
}
