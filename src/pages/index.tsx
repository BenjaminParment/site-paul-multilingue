import "./index.scss"

import { FormattedMessage } from "gatsby-plugin-intl"
import ImageSlider from "components/image-slider/ImageSlider"
import Layout from "components/layout/Layout"
import React from "react"

const IndexPage: React.FC = () => {
    return (
        <Layout>
            <div className="index-parent-container">
                <div className="top-container">
                    <div className="image-container">
                        <ImageSlider />
                        <div className="text">
                            <FormattedMessage id="homepage.picture_text" />
                        </div>
                    </div>
                    <span className="text-container" />
                </div>
                <div className="bottom-container"></div>
            </div>
        </Layout>
    )
}

export default IndexPage
