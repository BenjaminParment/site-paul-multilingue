import "./LanguageButton.scss"

import React from "react"
import { changeLang } from "shared/utils/languageUtils"

interface LanguageButtonProps {
    value: string
}

const LanguageButton: React.FC<LanguageButtonProps> = ({ value }) => (
    <div className="language-button-container">
        <button onClick={() => changeLang(value)} className="language-button">
            {value}
        </button>
    </div>
)

export default LanguageButton
