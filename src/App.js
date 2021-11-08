import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/common/navBar'
import Footer from './components/common/footer'
import Home from './pages/home'
import AboutUs from './pages/AboutUs'
import PastEvents from './pages/PastEvents'
import BoardMembers from './pages/BoardMembers'
import ContactUs from './pages/ContactUs'
import CodeOfConduct from './pages/CodeOfConduct'
import './App.css'

function App() {
    return (
        <div className="App">
            {/* <NavBar /> */}
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about-us" component={AboutUs} />
                    <Route exact path="/past-events" component={PastEvents} />
                    <Route exact path="/board-members" component={BoardMembers} />
                    <Route exact path="/contact-us" component={ContactUs} />
                    <Route exact path="/code-of-conduct" component={CodeOfConduct} />
                </Switch>
            </BrowserRouter>
            <br />
            <Footer />
        </div>
    )
}

export default App
