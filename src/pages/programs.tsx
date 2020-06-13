import "./page-style/programs.scss"

import Layout from "components/layout/Layout"
import { QuestionMarkImage } from "components/images/QuestionMarkImage"
import React from "react"
import { TextDisplay } from "components/reusables/text-display/TextDisplay"

const ProgramsPage: React.FC = () => {
    return (
        <Layout>
            <TextDisplay
                image={<QuestionMarkImage />}
                imageStyle="image-dimension"
            >
                <span>Display this text please</span>
            </TextDisplay>
        </Layout>
    )
}

export default ProgramsPage
