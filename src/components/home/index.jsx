import image from '../../assets/img/other/intro-img.svg'
import AboutUs from './AboutUs'
import Blogs from './Blogs'
import PastEvents from './PastEvents'
import Team from './Team'
import ContactUs from './ContactUs'
import Mascot from './Mascot'
import Hackathon from './Hackathon'

export default function Home() {

    return (
        <div>
            <section id="intro" class="clearfix">
                <div class="container" data-aos="fade-up">
                    <div
                        class="intro-img"
                        data-aos="zoom-out"
                        data-aos-delay="200"
                    >
                        <img src={image} alt="" class="img-fluid" />
                    </div>
                    <div
                        class="intro-info"
                        data-aos="zoom-in"
                        data-aos-delay="100"
                    >
                        <h2>
                            SLIIT
                            <br />
                            <span>Women In FOSS</span>
                            <br />
                            Community!
                        </h2>
                        <div>
                            <a
                                href="!#"
                                class="btn-get-started scrollto"
                            >
                                Become a Member
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <main id="main">
                <AboutUs />
                <Mascot />
                <Hackathon />
                <PastEvents />
                <Blogs />
                <Team />
                <ContactUs />
            </main>
        </div>
    )
}