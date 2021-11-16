import Team2 from '../assets/img/team/team-2.jpg'
import Team4 from '../assets/img/team/team-4.jpg'
import { BOARD_MEMBER_NAMES } from '../utilities/constants/BoardMembers.constants'

export default function Team() {
    return (
        <div>
            <header id="header" class="fixed-top">
                <nav
                    class="navbar navbar-expand-lg navbar-light bg-white sticky"
                    data-offset="500"
                >
                    <div class="container">
                        <a href="/" class="navbar-brand">
                            SLIIT<span class="text-primary">WIF</span>
                        </a>
                        <button
                            class="navbar-toggler"
                            data-toggle="collapse"
                            data-target="#navbarContent"
                            aria-controls="navbarContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div
                            class="navbar-collapse collapse"
                            id="navbarContent"
                        >
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="/">
                                        HOME
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/about-us">
                                        ABOUT
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/past-events">
                                        EVENTS
                                    </a>
                                </li>
                                {/* <li class="nav-item">
                                    <a class="nav-link" href="!#">
                                        Blog
                                    </a>
                                </li> */}
                                <li class="nav-item active">
                                    <a class="nav-link" href="/board-members">
                                        BOARD
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/code-of-conduct">
                                        CODE OF CONDUCT
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/contact-us">
                                        CONTACT
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <section id="team">
                <div class="container" data-aos="fade-up">
                    <div class="section-header">
                        <h3>Board of Executives 20/21</h3>
                    </div>
                    <div class="row" style={{justifyContent: "center"}}>
                        <div
                            class="col-lg-3 col-md-6"
                            data-aos="zoom-out"
                            data-aos-delay="100"
                        >
                            <div class="member">
                                <img src={Team2} class="img-fluid" alt="" />
                                <div class="member-info">
                                    <div class="member-info-content">
                                        <h4>{BOARD_MEMBER_NAMES.MEMBERSHIP_AND_RECRUITING_LEAD}</h4>
                                        <span>Membership & Recruiting Lead</span>
                                        <div class="social">
                                            <a href="!#">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                            <a href="!#">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                            <a href="!#">
                                                <i class="fa fa-google-plus"></i>
                                            </a>
                                            <a href="!#">
                                                <i class="fa fa-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="col-lg-4 col-md-6"
                            data-aos="zoom-out"
                            data-aos-delay="100"
                        >
                            <div class="member">
                                <img src={Team4} class="img-fluid" alt="" />
                                <div class="member-info">
                                    <div class="member-info-content">
                                        <h4>{BOARD_MEMBER_NAMES.CLUB_LEAD}</h4>
                                        <span><h5>Club Lead</h5></span>
                                        <div class="social">
                                            <a href="!#">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                            <a href="!#">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                            <a href="!#">
                                                <i class="fa fa-google-plus"></i>
                                            </a>
                                            <a href="!#">
                                                <i class="fa fa-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="col-lg-3 col-md-6"
                            data-aos="zoom-out"
                            data-aos-delay="100"
                        >
                            <div class="member">
                                <img src={Team2} class="img-fluid" alt="" />
                                <div class="member-info">
                                    <div class="member-info-content">
                                        <h4>{BOARD_MEMBER_NAMES.WEB_AND_GRAPHIC_TEAM_LEAD}</h4>
                                        <span>Web & Graphic Team Lead</span>
                                        <div class="social">
                                            <a href="!#">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                            <a href="!#">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                            <a href="!#">
                                                <i class="fa fa-google-plus"></i>
                                            </a>
                                            <a href="!#">
                                                <i class="fa fa-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div
                            class="col-lg-3 col-md-6"
                            data-aos="zoom-out"
                            data-aos-delay="100"
                        >
                            <div class="member">
                                <img src={Team4} class="img-fluid" alt="" />
                                <div class="member-info">
                                    <div class="member-info-content">
                                        <h4>{BOARD_MEMBER_NAMES.MARKETING_AND_PUBLICITY_LEAD}</h4>
                                        <span>Marketing & Publicity Lead</span>
                                        <div class="social">
                                            <a href="!#">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                            <a href="!#">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                            <a href="!#">
                                                <i class="fa fa-google-plus"></i>
                                            </a>
                                            <a href="!#">
                                                <i class="fa fa-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="col-lg-3 col-md-6"
                            data-aos="zoom-out"
                            data-aos-delay="200"
                        >
                            <div class="member">
                                <img src={Team2} class="img-fluid" alt="" />
                                <div class="member-info">
                                    <div class="member-info-content">
                                        <h4>{BOARD_MEMBER_NAMES.DEVELOPING_TEAM_LEAD}</h4>
                                        <span>Developing Team Lead</span>
                                        <div class="social">
                                            <a href="!#">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                            <a href="!#">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                            <a href="!#">
                                                <i class="fa fa-google-plus"></i>
                                            </a>
                                            <a href="!#">
                                                <i class="fa fa-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="col-lg-3 col-md-6"
                            data-aos="zoom-out"
                            data-aos-delay="300"
                        >
                            <div class="member">
                                <img src={Team4} class="img-fluid" alt="" />
                                <div class="member-info">
                                    <div class="member-info-content">
                                        <h4>{BOARD_MEMBER_NAMES.CONTENT_WRITING_TEAM_LEAD}</h4>
                                        <span>Content Writing Team Lead</span>
                                        <div class="social">
                                            <a href="!#">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                            <a href="!#">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                            <a href="!#">
                                                <i class="fa fa-google-plus"></i>
                                            </a>
                                            <a href="!#">
                                                <i class="fa fa-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="col-lg-3 col-md-6"
                            data-aos="zoom-out"
                            data-aos-delay="400"
                        >
                            <div class="member">
                                <img src={Team2} class="img-fluid" alt="" />
                                <div class="member-info">
                                    <div class="member-info-content">
                                        <h4>{BOARD_MEMBER_NAMES.TECHNICAL_LEAD}</h4>
                                        <span>Technical Lead</span>
                                        <div class="social">
                                            <a href="!#">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                            <a href="!#">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                            <a href="!#">
                                                <i class="fa fa-google-plus"></i>
                                            </a>
                                            <a href="!#">
                                                <i class="fa fa-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
