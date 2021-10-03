import react from 'react'
import NavBar from './components/common/navBar'
import Home from './components/home'
import Footer from './components/common/footer'
import './App.css'

class App extends react.Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <Home />
                <Footer />
            </div>
        )
    }
}

export default App
