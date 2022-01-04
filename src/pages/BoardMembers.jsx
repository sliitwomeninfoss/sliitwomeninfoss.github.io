import { BOARD_MEMBER_DETAILS } from '../utilities/constants/BoardMembers.constants'
import logo from '../assets/img/logos/WIF-Dark.png'

export default function Team() {
    return (
        <div>
            <header id="header" class="fixed-top">
                <nav
                    class="navbar navbar-expand-lg navbar-light bg-white sticky"
                    data-offset="500"
                >
                    <div class="container">
                        {/* <a href="/" class="navbar-brand"> */}
                        {/* SLIIT<span class="text-primary">WIF</span> */}
                        {/* <img src={logo} alt="logo" height="80" width="130" class="img-fluid just" /> */}
                        <div class="logo float-left">
                            <a href="/">
                                <img src={logo} alt="" class="img-fluid" />
                            </a>
                        </div>
                        {/* </a> */}
                        {/* <img src={logo} alt="logo" height="50" width="100" class="img-fluid just" /> */}
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
                                <li class="nav-item">
                                    <a class="nav-link" href="/blogs">
                                        BLOGS
                                    </a>
                                </li>
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
                    <div class="row member-row">
                        <div
                            class="col-lg-3 col-md-6 team-card"
                            data-aos="zoom-out"
                            data-aos-delay="100"
                        >
                            <div class="member">
                                <img
                                    src={
                                        BOARD_MEMBER_DETAILS
                                            .MEMBERSHIP_AND_RECRUITING_LEAD
                                            .IMAGE_SRC
                                    }
                                    class="img-fluid"
                                    alt=""
                                />
                                <div class="member-info">
                                    <div class="member-info-content">
                                        <div class="social">
                                            <a
                                                href={
                                                    BOARD_MEMBER_DETAILS
                                                        .MEMBERSHIP_AND_RECRUITING_LEAD
                                                        .FACEBOOK
                                                }
                                            >
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                            <a
                                                href={
                                                    BOARD_MEMBER_DETAILS
                                                        .MEMBERSHIP_AND_RECRUITING_LEAD
                                                        .LINKEDIN
                                                }
                                            >
                                                <i class="fa fa-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="member-text">
                                <h4>
                                    {
                                        BOARD_MEMBER_DETAILS
                                            .MEMBERSHIP_AND_RECRUITING_LEAD.NAME
                                    }
                                </h4>
                                <span>Membership & Recruiting Lead</span>
                            </div>
                        </div>
                        <div
                            class="col-lg-3 col-md-6 team-card"
                            data-aos="zoom-out"
                            data-aos-delay="100"
                        >
                            <div class="member">
                                <img
                                    src={
                                        BOARD_MEMBER_DETAILS.CLUB_LEAD.IMAGE_SRC
                                    }
                                    class="img-fluid"
                                    alt=""
                                />
                                <div class="member-info">
                                    <div class="member-info-content">
                                        <div class="social">
                                            <a
                                                href={
                                                    BOARD_MEMBER_DETAILS
                                                        .CLUB_LEAD.FACEBOOK
                                                }
                                            >
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                            <a
                                                href={
                                                    BOARD_MEMBER_DETAILS
                                                        .CLUB_LEAD.LINKEDIN
                                                }
                                            >
                                                <i class="fa fa-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="member-text">
                                <h4>{BOARD_MEMBER_DETAILS.CLUB_LEAD.NAME}</h4>
                                <span>Club Lead</span>
                            </div>
                        </div>
                        <div
                            class="col-lg-3 col-md-6 team-card"
                            data-aos="zoom-out"
                            data-aos-delay="200"
                        >
                            <div class="member">
                                <img
                                    src={
                                        BOARD_MEMBER_DETAILS
                                            .WEB_AND_GRAPHIC_TEAM_LEAD.IMAGE_SRC
                                    }
                                    class="img-fluid"
                                    alt=""
                                />
                                <div class="member-info">
                                    <div class="member-info-content">
                                        <div class="social">
                                            <a
                                                href={
                                                    BOARD_MEMBER_DETAILS
                                                        .WEB_AND_GRAPHIC_TEAM_LEAD
                                                        .FACEBOOK
                                                }
                                            >
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                            <a
                                                href={
                                                    BOARD_MEMBER_DETAILS
                                                        .WEB_AND_GRAPHIC_TEAM_LEAD
                                                        .LINKEDIN
                                                }
                                            >
                                                <i class="fa fa-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="member-text">
                                <h4>
                                    {
                                        BOARD_MEMBER_DETAILS
                                            .WEB_AND_GRAPHIC_TEAM_LEAD.NAME
                                    }
                                </h4>
                                <span>Web & Graphic Team Lead</span>
                            </div>
                        </div>
                    </div>
                    <div class="row member-row">
                        <div
                            class="col-lg-3 col-md-6 team-card"
                            data-aos="zoom-out"
                            data-aos-delay="300"
                        >
                            <div class="member">
                                <img
                                    src={
                                        BOARD_MEMBER_DETAILS
                                            .MARKETING_AND_PUBLICITY_LEAD
                                            .IMAGE_SRC
                                    }
                                    class="img-fluid"
                                    alt=""
                                />
                                <div class="member-info">
                                    <div class="member-info-content">
                                        <div class="social">
                                            <a
                                                href={
                                                    BOARD_MEMBER_DETAILS
                                                        .MARKETING_AND_PUBLICITY_LEAD
                                                        .FACEBOOK
                                                }
                                            >
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                            <a
                                                href={
                                                    BOARD_MEMBER_DETAILS
                                                        .MARKETING_AND_PUBLICITY_LEAD
                                                        .LINKEDIN
                                                }
                                            >
                                                <i class="fa fa-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="member-text">
                                <h4>
                                    {
                                        BOARD_MEMBER_DETAILS
                                            .MARKETING_AND_PUBLICITY_LEAD.NAME
                                    }
                                </h4>
                                <span>Marketing & Publicity Lead</span>
                            </div>
                        </div>
                        <div
                            class="col-lg-3 col-md-6 team-card"
                            data-aos="zoom-out"
                            data-aos-delay="200"
                        >
                            <div class="member">
                                <img
                                    src={
                                        BOARD_MEMBER_DETAILS
                                            .DEVELOPING_TEAM_LEAD.IMAGE_SRC
                                    }
                                    class="img-fluid"
                                    alt=""
                                />
                                <div class="member-info">
                                    <div class="member-info-content">
                                        <div class="social">
                                            <a
                                                href={
                                                    BOARD_MEMBER_DETAILS
                                                        .DEVELOPING_TEAM_LEAD
                                                        .FACEBOOK
                                                }
                                            >
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                            <a
                                                href={
                                                    BOARD_MEMBER_DETAILS
                                                        .DEVELOPING_TEAM_LEAD
                                                        .LINKEDIN
                                                }
                                            >
                                                <i class="fa fa-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="member-text">
                                <h4>
                                    {
                                        BOARD_MEMBER_DETAILS
                                            .DEVELOPING_TEAM_LEAD.NAME
                                    }
                                </h4>
                                <span>Developing Team Lead</span>
                            </div>
                        </div>
                        <div
                            class="col-lg-3 col-md-6 team-card"
                            data-aos="zoom-out"
                            data-aos-delay="400"
                        >
                            <div class="member">
                                <img
                                    src={
                                        BOARD_MEMBER_DETAILS
                                            .CONTENT_WRITING_TEAM_LEAD.IMAGE_SRC
                                    }
                                    class="img-fluid"
                                    alt=""
                                />
                                <div class="member-info">
                                    <div class="member-info-content">
                                        <div class="social">
                                            <a
                                                href={
                                                    BOARD_MEMBER_DETAILS
                                                        .CONTENT_WRITING_TEAM_LEAD
                                                        .FACEBOOK
                                                }
                                            >
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                            <a
                                                href={
                                                    BOARD_MEMBER_DETAILS
                                                        .CONTENT_WRITING_TEAM_LEAD
                                                        .LINKEDIN
                                                }
                                            >
                                                <i class="fa fa-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="member-text">
                                <h4>
                                    {
                                        BOARD_MEMBER_DETAILS
                                            .CONTENT_WRITING_TEAM_LEAD.NAME
                                    }
                                </h4>
                                <span>Content Writing Team Lead</span>
                            </div>
                        </div>
                        <div
                            class="col-lg-3 col-md-6 team-card"
                            data-aos="zoom-out"
                            data-aos-delay="400"
                        >
                            <div class="member">
                                <img
                                    src={
                                        BOARD_MEMBER_DETAILS.TECHNICAL_LEAD
                                            .IMAGE_SRC
                                    }
                                    class="img-fluid"
                                    alt=""
                                />
                                <div class="member-info">
                                    <div class="member-info-content">
                                        <div class="social">
                                            <a
                                                href={
                                                    BOARD_MEMBER_DETAILS
                                                        .TECHNICAL_LEAD.FACEBOOK
                                                }
                                            >
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                            <a
                                                href={
                                                    BOARD_MEMBER_DETAILS
                                                        .TECHNICAL_LEAD.LINKEDIN
                                                }
                                            >
                                                <i class="fa fa-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="member-text">
                                <h4>
                                    {BOARD_MEMBER_DETAILS.TECHNICAL_LEAD.NAME}
                                </h4>
                                <span>Technical Lead</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
