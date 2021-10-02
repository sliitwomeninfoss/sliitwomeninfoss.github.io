import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="footer">
                    <div class="footer-top">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-4 col-md-6 footer-info">
                                    <h3>NewBiz</h3>
                                    <p>
                                        Cras fermentum odio eu feugiat lide par
                                        naso tierra.Justo eget nada terra videa
                                        magna derita valies darta donna mare
                                        fermentum iaculis eu non diam
                                        phasellus.Scelerisque felis imperdiet
                                        proin fermentum leo.Amet volutpat
                                        consequat mauris nunc congue.
                                    </p>
                                </div>

                                <div class="col-lg-2 col-md-6 footer-links">
                                    <h4>Useful Links</h4>
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">About us</a>
                                        </li>
                                        <li>
                                            <a href="#">Services</a>
                                        </li>
                                        <li>
                                            <a href="#">Terms of service</a>
                                        </li>
                                        <li>
                                            <a href="#">Privacy policy</a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="col-lg-3 col-md-6 footer-contact">
                                    <h4>Contact Us</h4>
                                    <p>
                                        A108 Adam Street <br />
                                        New York, NY 535022
                                        <br />
                                        United States <br />
                                        <strong>Phone: </strong> +1 5589 55488
                                        55
                                        <br />
                                        <strong>Email: </strong> info
                                        @example.com
                                        <br />
                                    </p>

                                    <div class="social-links">
                                        <a href="#" class="twitter">
                                            <i class="fa fa-twitter"></i>
                                        </a>
                                        <a href="#" class="facebook">
                                            <i class="fa fa-facebook"></i>
                                        </a>
                                        <a href="#" class="instagram">
                                            <i class="fa fa-instagram"></i>
                                        </a>
                                        <a href="#" class="google-plus">
                                            <i class="fa fa-google-plus"></i>
                                        </a>
                                        <a href="#" class="linkedin">
                                            <i class="fa fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-md-6 footer-newsletter">
                                    <h4>Our Newsletter</h4>
                                    <p>
                                        Tamen quem nulla quae legam multos aute
                                        sint culpa legam noster magna veniam
                                        enim veniam illum dolore legam minim
                                        quorum culpa amet magna export quem
                                        marada parida nodela caramase seza.
                                    </p>
                                    <form
                                    // action=""
                                    // method="post"
                                    >
                                        <input type="email" name="email" />
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
                            &copy; Copyright <strong>NewBiz</strong>
                            .All Rights Reserved
                        </div>
                        <div class="credits">
                            Designed by{' '}
                            <a href="https://bootstrapmade.com/">
                                BootstrapMade
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
