import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Footer from './components/common/footer'
import Home from './pages/home'
import AboutUs from './pages/AboutUs'
import PastEvents from './pages/PastEvents'
import Blogs from './pages/Blogs'
import BoardMembers from './pages/BoardMembers'
import ContactUs from './pages/ContactUs'
import CodeOfConduct from './pages/CodeOfConduct'
import './App.css'

// Font awesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about-us" component={AboutUs} />
                    <Route exact path="/past-events" component={PastEvents} />
                    <Route exact path="/blogs" component={Blogs} />
                    <Route
                        exact
                        path="/board-members"
                        component={BoardMembers}
                    />
                    <Route exact path="/contact-us" component={ContactUs} />
                    <Route
                        exact
                        path="/code-of-conduct"
                        component={CodeOfConduct}
                    />
                </Switch>
            </BrowserRouter>
            <br />
            <Footer />
        </div>
    )
}

export default App
