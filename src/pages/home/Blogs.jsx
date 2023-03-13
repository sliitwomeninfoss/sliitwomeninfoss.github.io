import { useState, useEffect } from 'react'
import Config from '../../utilities/config'

export default function Blogs() {
    const [blog, setBlog] = useState({
        item: [],
        error: null
    })

    const axios = require('axios').default

    useEffect(() => {
        axios.get(Config.MEDIUM_BLOG_URL)
            .then(info => {
                const posts = info.data.items.filter(post => post.categories.length > 0);
                setBlog({ item: posts })
            })
            .catch(err => setBlog({ error: err.message }))
    }, [axios])


    return (
        <div>
            <section id="we-are" class="section">
                <div class="container" data-aos="zoom-in">
                    <header class="section-header">
                        <h3>Latest Blog Posts</h3>
                    </header>
                    <p><i>
                        “It can be pretty rough out there for bloggers
                        who think small. You’ve got to think –
                        and play – big if you want to make
                        a larger footprint these days.”
                        <br />
                        – David Risley
                    </i>
                    </p>
                    <a href="/blogs" rel="noreferrer">
                        <button class="main-btn" type="submit">
                            View More Blogs {' '}
                            <i class="fa fa-arrow-circle-right" style={{ marginLeft: 8 }}></i>
                        </button>
                    </a>
                    <br />
                    <br />
                    <br />
                    <div class="row">
                        {blog.item.slice(0, 3).map((blog) => (
                            <div class="col-md-4">
                                <div class="card-content card-shadow">
                                    <div class="card-img">
                                        <img src={blog.thumbnail} alt="" />
                                        <span><h4>Published On: {blog.pubDate.split(' ', 1)}</h4></span>
                                    </div>
                                    <div class="card-desc">
                                        <h3>{blog.title}</h3>
                                        <br />
                                        <div>
                                            {
                                                blog.categories.length && blog.categories.map((tag) => <span>{tag}</span>)
                                            }
                                        </div>
                                    </div>
                                    <a href={blog.link} class="read-btn" target="_blank" rel="noreferrer">Read More</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
