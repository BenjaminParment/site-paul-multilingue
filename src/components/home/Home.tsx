import Content from "components/content/Content"
import Footer from "components/footer/Footer"
import Header from "components/header/Header"
import React from "react"

class Home extends React.Component {
    render = () => (
        <div className="home-parent-container">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default Home
