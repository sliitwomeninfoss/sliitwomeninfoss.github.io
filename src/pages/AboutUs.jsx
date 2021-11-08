import extra1 from '../assets/img/other/about-extra-1.svg'
import extra2 from '../assets/img/other/about-extra-2.svg'
export default function AboutUs() {
    return (
        <div>
            <header id="header" class="fixed-top">
                <nav
                    class="navbar navbar-expand-lg navbar-light bg-white sticky"
                    data-offset="500">
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
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div
                            class="navbar-collapse collapse"
                            id="navbarContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="/">
                                        HOME
                                    </a>
                                </li>
                                <li class="nav-item active">
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
                                <li class="nav-item">
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

            <section id="about" class="clearfix">
                <div class="container" data-aos="fade-up">
                    <header class="section-header">
                        <h3>About Us</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                    </header>
                    {/* <div class="row about-container">
                        <div class="col-lg-6 content order-lg-1 order-2">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <div class="icon"><i class="fas fa-shopping-bag"></i></div>
                                <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
                                <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                            </div>
                            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                                <div class="icon"><i class="fa fa-photo"></i></div>
                                <h4 class="title"><a href="">Magni Dolores</a></h4>
                                <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                            <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                                <div class="icon"><i class="fa fa-bar-chart"></i></div>
                                <h4 class="title"><a href="">Dolor Sitema</a></h4>
                                <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                            </div>
                        </div>
                        <div class="col-lg-6 background order-lg-2" data-aos="zoom-in">
                            <img src={aboutImage} class="img-fluid" alt="" />
                        </div>
                    </div> */}
                    <div class="row about-extra">
                        <div
                            class="col-lg-6 order-1 order-lg-2"
                            data-aos="fade-left">
                            <img src={extra2} class="img-fluid" alt="" />
                        </div>
                        <div
                            class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1"
                            data-aos="fade-right">
                            <h4>Our Vision</h4>
                            <p>
                                Delectus alias ut incidunt delectus nam
                                placeat in consequatur. Sed cupiditate quia
                                ea quis. Voluptas nemo qui aut distinctio.
                                Cumque fugit earum est quam officiis
                                numquam. Ducimus corporis autem at
                                blanditiis beatae incidunt sunt.
                            </p>
                        </div>
                    </div>
                    <div class="row about-extra">
                        <div class="col-lg-6" data-aos="fade-right">
                            <img src={extra1} class="img-fluid" alt="" />
                        </div>
                        <div
                            class="col-lg-6 pt-5 pt-lg-0"
                            data-aos="fade-left">
                            <h4>Our Mission</h4>
                            <p>
                                Ipsum in aspernatur ut possimus sint. Quia
                                omnis est occaecati possimus ea. Quas
                                molestiae perspiciatis occaecati qui rerum.
                                Deleniti quod porro sed quisquam saepe.
                                Numquam mollitia recusandae non ad at et a.
                            </p>
                        </div>
                    </div>
                    <div class="row about-extra">
                        <div
                            class="col-lg-6 order-1 order-lg-2"
                            data-aos="fade-left">
                            <img src={extra2} class="img-fluid" alt="" />
                        </div>
                        <div
                            class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1"
                            data-aos="fade-right">
                            <h4>Our Strategy</h4>
                            <p>
                                Delectus alias ut incidunt delectus nam
                                placeat in consequatur. Sed cupiditate quia
                                ea quis. Voluptas nemo qui aut distinctio.
                                Cumque fugit earum est quam officiis
                                numquam. Ducimus corporis autem at
                                blanditiis beatae incidunt sunt.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}