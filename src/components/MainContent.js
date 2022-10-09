import React from "react"
import './styles.css'

class MainContent extends React.Component {
    
    render() {
        return (
            <main className={`${this.props.lightMode ? "mainContentLight" : "mainContent"}`}>
                <h1>Fun facts about React</h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Is maintained by Facebook</li>
                    <li>Has well over 100K start on Github</li>
                    <li>Powers thousands of enterprise apps, 
                        including mobile apps</li>
                </ul>
            </main>
        )
    }
}

export default MainContent;