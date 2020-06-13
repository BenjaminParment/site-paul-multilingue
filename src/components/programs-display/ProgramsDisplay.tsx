import "./ProgramsDisplay.scss"

import { BOPETOProgram } from "components/images/programs/BOPETOProgram"
import { EducationRDCProgram } from "components/images/programs/EducationRDC"
import { FormattedMessage } from "gatsby-plugin-intl"
import React from "react"
import { VieProgram } from "components/images/programs/Vie"

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
                        <EducationRDCProgram className="image" />
                    </div>
                </div>
                <div className="single-program">
                    <span className="single-program-title">
                        <FormattedMessage id="homepage.program.program_2" />
                    </span>
                    <div className="single-program-image">
                        <VieProgram className="image" />
                    </div>
                </div>
                <div className="single-program">
                    <span className="single-program-title">
                        <FormattedMessage id="homepage.program.program_3" />
                    </span>
                    <div className="single-program-image">
                        <BOPETOProgram className="image" />
                    </div>
                </div>
            </div>
        </div>
    )
}
