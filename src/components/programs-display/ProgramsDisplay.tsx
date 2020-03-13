import "./ProgramsDisplay.scss"

import { FormattedMessage } from "gatsby-plugin-intl"
import { QuestionMarkImage } from "components/images/QuestionMarkImage"
import React from "react"

export const ProgramsDisplay: React.FC = () => {
    return (
        <div className="programs-parent-container">
            <span className="programs-title">
                <FormattedMessage id="homepage.program.title" />
            </span>
            <div className="programs-container">
                <div className="single-program">
                    <span className="single-program-title">
                        <FormattedMessage id="homepage.program.program_1" />
                    </span>
                    <div className="single-program-image">
                        <QuestionMarkImage className="image" />
                    </div>
                </div>
                <div className="single-program">
                    <span className="single-program-title">
                        <FormattedMessage id="homepage.program.program_2" />
                    </span>
                    <div className="single-program-image">
                        <QuestionMarkImage className="image" />
                    </div>
                </div>
                <div className="single-program">
                    <span className="single-program-title">
                        <FormattedMessage id="homepage.program.program_3" />
                    </span>
                    <div className="single-program-image">
                        <QuestionMarkImage className="image" />
                    </div>
                </div>
            </div>
        </div>
    )
}
