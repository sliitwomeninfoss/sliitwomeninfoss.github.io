import { useState, useEffect } from 'react'
import Config from '../utilities/config'
// import logo from '../assets/img/logos/WIF-Dark.png'
import NavBar from '../components/common/navBar'

export default function Blogs() {
    const [blog, setBlog] = useState({
        item: [],
        error: null,
    })

    const axios = require('axios').default

    useEffect(() => {
        axios
            .get(Config.MEDIUM_BLOG_URL)
            .then((info) => {
                const posts = info.data.items.filter(
                    (post) => post.categories.length > 0
                )
                setBlog({ item: posts })
            })
            .catch((err) => setBlog({ error: err.message }))
    }, [axios])

    return (
        <div>
            <NavBar />

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
                                <div class="card-content card-shadow">
                                    <div class="card-img">
                                        <img src={blog.thumbnail} alt="" />
                                        <span>
                                            <h4>
                                                Published On:{' '}
                                                {blog.pubDate.split(' ', 1)}
                                            </h4>
                                        </span>
                                    </div>
                                    <div class="card-desc">
                                        <h3>{blog.title}</h3>
                                        <br />
                                        {/* <p>{blog.description}</p> */}
                                        <p>
                                            {' '}
                                            {blog.categories.length > 0 ? (
                                                blog.categories.map(
                                                    (tag, index) => (
                                                        <span>{tag}</span>
                                                    )
                                                )
                                            ) : (
                                                <div />
                                            )}
                                        </p>
                                    </div>
                                    <a
                                        href={blog.link}
                                        class="read-btn"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <a
                        href="https://medium.com/sliitwif"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <button class="main-btn" type="submit">
                            Read More on <b>Medium</b>{' '}
                            <i
                                class="fa fa-arrow-circle-right"
                                style={{ marginLeft: 8 }}
                            ></i>
                        </button>
                    </a>
                </div>
            </section>
        </div>
    )
}
