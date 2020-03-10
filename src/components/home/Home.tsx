import Footer from '../footer/Footer';
import Header from '../header/Header';
import React from "react";

class Home extends React.Component {
    render = () => (
        <div className="home-parent-container">
            <Header />
            <div className="main-content">
                Yes, thats where the main content goes ey
            </div>
            <Footer />
        </div>
    )
}

export default Home;
