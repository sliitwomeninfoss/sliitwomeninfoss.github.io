import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/common/navBar'
import Home from './components/home'
import AboutUs from './components/home/AboutUs'
import PastEvents from './components/home/PastEvents'
import ContactUs from './components/home/ContactUs'
import CodeOfConduct from './components/home/CodeOfConduct'
import Footer from './components/common/footer'
import './App.css'

function App() {
    return (
        <div className="App">
            <NavBar />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about-us" component={AboutUs} />
                    <Route exact path="/past-events" component={PastEvents} />
                    <Route exact path="/contact-us" component={ContactUs} />
                    <Route exact path="/code-of-conduct" component={CodeOfConduct}/>
                </Switch>
            </BrowserRouter>
            <br />
            <Footer />
        </div>
    )
}

export default App
