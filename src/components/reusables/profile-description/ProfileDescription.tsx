import "./ProfileDescription.scss"

import { FormattedMessage } from "gatsby-plugin-intl"
import React from "react"

export interface ProfileDescriptionProps {
    id: string
    image: JSX.Element
}

export const ProfileDescription: React.FC<ProfileDescriptionProps> = ({
    id,
    image,
}) => {
    return (
        <div className="profile-description-container">
            <span className="profile-name">
                <FormattedMessage id={`${id}.name`} />
            </span>
            <div className="bottom-container">
                <div className="profile-picture">{image}</div>
                <span className="profile-description">
                    <FormattedMessage id={`${id}.description`} />
                </span>
            </div>
        </div>
    )
}
