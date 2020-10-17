import "./HeaderButtonDropdown.scss";

import { BOARD_PATH, VOLUNTEERS_PATH } from "shared/routes";
import { FormattedMessage, Link } from "gatsby-plugin-intl";
import React, { useEffect, useRef, useState } from "react";

function useOutsideAlerter(ref: React.RefObject<HTMLDivElement>, setOpen: (state: boolean) => void) {
    function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
            setOpen(false);
        }
    }

    useEffect(() => {
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });
}

export const HeaderButtonDropdown: React.FC = () => {
    const wrapperRef = useRef(null);
    const [isOpen, setOpen] = useState(false);
    useOutsideAlerter(wrapperRef, setOpen);

    const buttonClicked = () => setOpen(true);

    return (
        <div className="header-button-dropdown-container">
            <button onClick={buttonClicked} className="header-button-dropdown">
                <FormattedMessage id="header_buttons.profile.title" />
            </button>
            {isOpen && (
                <div className="dropdown-open" ref={wrapperRef}>
                    <span>
                        <Link to={VOLUNTEERS_PATH} className="single-option">
                            <FormattedMessage id={"header_buttons.profile.voluntaries"} />
                        </Link>
                    </span>
                    <span>
                        <Link to={BOARD_PATH} className="single-option">
                            <FormattedMessage id={"header_buttons.profile.board"} />
                        </Link>
                    </span>
                </div>
            )}
        </div>
    );
};
