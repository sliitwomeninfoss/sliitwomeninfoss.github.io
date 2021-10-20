import image from '../../assets/img/other/intro-img.svg'

export default function Hackathon() {

    return (
        <div>
            <section id="intro" class="section-bg">
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

                            <span>Hackathon</span>
                            <br />

                        </h2>
                        <div>
                            <a
                                href="#about"
                                class="btn-get-started scrollto"
                            >
                                Get Started
                            </a>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
