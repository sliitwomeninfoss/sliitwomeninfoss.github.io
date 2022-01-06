import contact from '../assets/img/logos/contact.png'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import logo from '../assets/img/logos/WIF-Dark.png'

const success = () =>
    toast.success(
        'Your details have been successfully submitted! Expect to receive a response within 24 hours.'
    )
const failure = () =>
    toast.error(
        'There was a problem submitting the form - please try again later!'
    )

export default function ContactUs() {
    function sendEmail(e) {
        e.preventDefault()
        emailjs
            .sendForm(
                'service_916fd9t',
                'template_xupiy9k',
                e.target,
                'user_AhOeO3pVJFeslV70OSsBk'
            )
            .then((res) => {
                if (res.status === 200) {
                    success()
                    resetContactUsForm()
                }else{
                    failure()
                }
            })
            .catch((err) => {
                failure()
            })
    }

    function customfunction(e) {
        sendEmail(e)
    }

    function resetContactUsForm() {
        document.getElementById('contact-form').reset()
    }
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
                                <li class="nav-item active">
                                    <a class="nav-link" href="/contact-us">
                                        CONTACT
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <section id="contact" class="contact-area pt-125 pb-130 gray-bg">
                <div class="container" data-aos="fade-up">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            {/* <div class="section-title text-center pb-25">
                                <h2 class="title">Get In Touch</h2>
                                <p>Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis quis leo.</p>
                            </div>  */}
                            <div class="section-header">
                                <h3> Get In Touch</h3>
                                <p>
                                    Fill up the form and our Team will get back
                                    to you within 24 hours.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6 col-sm-7">
                            <div class="contact-box text-center mt-30">
                                <div class="contact-icon">
                                    <i class="fa fa-map-marker"></i>
                                </div>
                                <div class="contact-content">
                                    <h6 class="contact-title">Our Address</h6>
                                    <p>SLIIT MALABE</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-7">
                            <div class="contact-box text-center mt-30">
                                <div class="contact-icon">
                                    <i class="fa fa-phone"></i>
                                </div>
                                <div class="contact-content">
                                    <h6 class="contact-title">Call Us</h6>
                                    <p>+94 70 322 6877 </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-7">
                            <div class="contact-box text-center mt-30">
                                <div class="contact-icon">
                                    <i class="fa fa-envelope"></i>
                                </div>
                                <div class="contact-content">
                                    <h6 class="contact-title">Email Us</h6>
                                    <p>infowifsliit@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="contact-form pt-30">
                                <form
                                    id="contact-form"
                                    action=""
                                    onSubmit={customfunction}
                                >
                                    <div class="single-form">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            required={true}
                                        />
                                    </div>
                                    <div class="single-form">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            required={true}
                                        />
                                    </div>
                                    <div class="single-form">
                                        <textarea
                                            name="message"
                                            placeholder="Message"
                                            required={true}
                                        ></textarea>
                                    </div>
                                    <p class="form-message"></p>
                                    <div class="single-form">
                                        <button class="main-btn" type="submit">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="contact-map mt-60">
                                <img
                                    src={contact}
                                    class="img-fluid"
                                    alt="img-contact"
                                />
                                {/* Map */}
                                {/* <div class="gmap_canvas">
                                    <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Mission%20District%2C%20San%20Francisco%2C%20CA%2C%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </div>
    )
}
