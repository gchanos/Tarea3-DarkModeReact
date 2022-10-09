import React from "react"
import './styles.css'


class Footer extends React.Component {

    render() {
        return (
            <footer 
            className={this.props.lightMode ? "light" : ""}
            >
                <small>© 2021 Chan's development. All rights reserved.</small>
            </footer>
        )
    }
}

export default Footer;