import React from "react"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lightMode: false,
        }
    }
    
    handleLightMode() {
        this.setState({lightMode: !this.state.lightMode})
    }

    render() {
        
        return (
            <div className="mainContainer">
                <Header
                    lightMode={this.state.lightMode}
                    toggleLightMode={() => this.handleLightMode()}
                />
                <MainContent 
                    lightMode={this.state.lightMode}
                />
                <Footer 
                    lightMode={this.state.lightMode}
                />
            </div>
        )
    }
}

export default App;
