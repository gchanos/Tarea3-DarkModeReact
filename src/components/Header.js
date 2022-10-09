import React from "react"
import './styles.css'

class Header extends React.Component {


    render() {
        return (
            
                <nav 
                className={this.props.lightMode ? "light" : ""}
                >
                    <div className="logo-container">
                     <img src={require('../images/react-logo.png')} alt="React Logo" className="logo" />
                     <h1>ReactFacts</h1>
                    </div>
                     <h2 className="nav-items">
                        <div className="toggler">
                            <p className="toggler--dark">Dark</p>
                            <div 
                            className="toggler--slider"
                            onClick={() => this.props.toggleLightMode(this.props.lightMode)}
                            >
                                <div className="toggler--slider--circle"></div>    
                            </div>    
                            <p className="toggler--light">Light</p>
                        </div>
                     </h2>
                </nav>
            
        )
    }
}

export default Header;