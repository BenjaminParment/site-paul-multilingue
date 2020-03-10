import "./Header.scss";

import React from "react";

class Header extends React.Component {
    render = () => (
        <div className="header-parent-container">
            <div className="left-container">
                <span className="header-title">Title</span>
                <div className="header-buttons">Buttons</div>
            </div>
            <div className="header-language-select">Language Select</div>
        </div>
    )
}

export default Header;