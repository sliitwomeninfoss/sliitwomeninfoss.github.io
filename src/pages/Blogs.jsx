import { useState, useEffect } from 'react'
import logo from '../assets/img/logos/WIF-Dark.png'

export default function Blogs() {

    const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/sliitwif";
    const [blog, setBlog] = useState({
        item: [],
        error: null
    })

    const axios = require('axios').default

    useEffect(() => {
        axios.get(mediumURL)
            .then(info => {
                const posts = info.data.items.filter(post => post.categories.length > 0);
                setBlog({ item: posts })
            })
            .catch(err => setBlog({ error: err.message }))
    }, [axios])

    console.log("jhfghe", blog.item)

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
                                <li class="nav-item active">
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

            <section id="blogs" class="section">
                <div class="container" data-aos="fade-up">
                    <header class="section-header">
                        <h3>Blogs</h3>
                        {/* <p>
                            Laudem latine persequeris id sed, ex fabulas
                            delectus quo. No vel partiendo abhorreant
                            vituperatoribus.
                        </p> */}
                    </header>


                    <div class="row">
                        {blog.item.map((blog, index) => (
                            <div class="col-md-4">
                                <div class="card-content">
                                    <div class="card-img">
                                        <img src={blog.thumbnail} alt="" />
                                        <span><h4>Published On: {blog.pubDate.split(' ', 1)}</h4></span>
                                    </div>
                                    <div class="card-desc">
                                        <h3>{blog.title}</h3>
                                        <br />
                                        {/* <p>{blog.description}</p> */}
                                        <p> {blog.categories.length > 0 ?
                                            blog.categories.map((tag, index) => (
                                                <span>{tag}</span>
                                            ))
                                            : <div />
                                        }
                                        </p>
                                    </div>
                                    <a href={blog.link} class="read-btn" target="_blank" rel="noreferrer">Read More</a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <a href="https://medium.com/sliitwif" rel="noreferrer" target="_blank">
                        <button class="main-btn" type="submit">
                            Read More on <b>Medium</b> {' '}
                            <i class="fa fa-arrow-circle-right" style={{ marginLeft: 8 }}></i>
                        </button>
                    </a>
                </div>
            </section>
        </div>
    )
}