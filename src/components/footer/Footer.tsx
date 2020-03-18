import "./Footer.scss"

import React from "react"

class Footer extends React.Component {
    render = () => (
        <div className="footer-parent-container">
            <div className="footer-info">
                <span className="column">1</span>
                <span className="column">2</span>
                <span className="column">3</span>
            </div>
        </div>
    )
}

export default Footer
