import image from '../../assets/img/logos/hack_logo.png'

export default function Hackathon() {

    return (
        <div>
            <section id="hackathon">
                <div class="container" data-aos="fade-up">
                    <div class="row justify-content-center">
                        <div class="row about-extra">
                            <div
                                class="col-lg-6 order-1 order-lg-2"
                                data-aos="fade-left"
                            >
                                <img
                                    src={image}
                                    class="img-fluid"
                                    style={{height: 300, width: 350}}
                                    alt=""
                                />
                            </div>
                            <div
                                class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1"
                                data-aos="fade-right"
                            >
                                <header class="section-header">
                                    <h3>Hackathon</h3>
                                </header>
                                <p>
                                    Delectus alias ut incidunt delectus nam
                                    placeat in consequatur. Sed cupiditate
                                    quia ea quis. Voluptas nemo qui aut
                                    distinctio. Cumque fugit earum est quam
                                    officiis numquam. Ducimus corporis autem
                                    at blanditiis beatae incidunt sunt.
                                </p>
                                <a
                                    href="https://herhelloworld.sliitfoss.org"
                                    target="_blank" rel="noreferrer"
                                >
                                    {' '}
                                    <button
                                        type="submit"
                                        title="Send Message"
                                    >
                                        View Website
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
