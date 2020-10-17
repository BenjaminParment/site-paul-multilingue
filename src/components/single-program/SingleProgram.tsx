import "./SingleProgram.scss";

import { BOPETOProgram } from "components/images/programs/BOPETOProgram";
import { EducationRDCProgram } from "components/images/programs/EducationRDC";
import { FormattedMessage } from "gatsby-plugin-intl";
import React from "react";
import { VieProgram } from "components/images/programs/Vie";

interface SingleProgramProps {
    program: string;
}

interface ProgramInfo {
    description: any;
    videoUrl: string;
    photo: JSX.Element;
}

export const SingleProgram: React.FC<SingleProgramProps> = ({ program }) => {
    const getOpenedProgram = (): ProgramInfo => {
        switch (program) {
            default:
            case "Education RDC 2025":
                return {
                    description: <FormattedMessage id="programs.education.description" />,
                    videoUrl: "https://www.youtube.com/embed/S3K6pUOAmTE",
                    photo: <EducationRDCProgram className="image" />,
                };
            case "VIE":
                return {
                    description: <FormattedMessage id="programs.vie.description" />,
                    videoUrl: "https://www.youtube.com/embed/QDUb7vxMzeY",
                    photo: <VieProgram className="image" />,
                };
            case "BOPETO":
                return {
                    description: <FormattedMessage id="programs.bopeto.description" />,
                    videoUrl: "https://www.youtube.com/embed/KWUVTxkl5rI",
                    photo: <BOPETOProgram className="image" />,
                };
        }
    };

    const openedProgram: ProgramInfo = getOpenedProgram();

    return (
        <div className="single-program-parent-container">
            {/* <div className="top-container">{openedProgram.photo}</div> */}
            <div className="bottom-container">
                <div className="description">{openedProgram.description}</div>
                <div className="video">
                    <iframe
                        src={openedProgram.videoUrl}
                        title={openedProgram.description}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder="0"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
};
