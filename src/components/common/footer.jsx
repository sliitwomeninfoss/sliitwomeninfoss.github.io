import logo from '../../assets/img/logos/footer-logo.png';
import 'font-awesome/css/font-awesome.min.css';

export default function Footer() {
    return (
        <div>
            <footer id="footer">
                <div class="footer-top">
                    <div class="container">
                        <div class="row">


                            <div class="col-lg-4 col-md-6 footer-info">
                                <img src={logo} alt="logo" height="80" width="130" class="img-fluid just" />
                                <p>
                                    Welcome to SLIIT FOSS women community. We're a group of volunteers who believe in the usage of Free/Open Source Software (FOSS)
                                </p>

                                <div class="social-links">
                                    <a href="https://twitter.com/sliitwif" class="twitter">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                    <a href=" https://www.facebook.com/sliitwif/" class="facebook">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                    <a href=" https://www.instagram.com/sliitwif/" class="instagram">
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/company/sliit-women-in-foss-community/" class="linkedin">
                                        <i class="fa fa-linkedin"></i>
                                    </a>
                                    {/* <a href="!#" class="youtube">
                                        <i class="fa fa-youtube"></i>
                                    </a> */}
                                </div>

                            </div>


                            <div class="col-lg-4 col-md-6 footer-links">
                                <h4>Useful Links</h4>

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
                                        <a href="/code-of-conduct">Code of Conduct</a>
                                    </li>
                                </ul>
                            </div>


                            <div class="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Our Newsletter</h4>
                                <p>
                                    Don’t forget to subscribe to our news letters, enter your e-mail here.
                                </p>
                                <form
                                // action=""
                                // method="post"
                                >
                                    <input type="email" name="email" placeholder="Email Address" />
                                    <input
                                        type="submit"
                                        value="Subscribe"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="copyright">
                        Copyright © 2021 | All Rights Reserved
                        <a href="sliitwif.org"> SLIIT WIF</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}