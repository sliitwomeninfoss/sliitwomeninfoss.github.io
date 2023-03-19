import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/past-events" element={<PastEvents />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/board-members" element={<BoardMembers />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route
                        path="/code-of-conduct"
                        element={<CodeOfConduct />}
                    />
                </Routes>
            </Router>
        </div>
    )
}

export default App
