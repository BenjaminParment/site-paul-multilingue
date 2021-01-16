import "./News.scss";

import React from "react";
import { TextDisplay } from "components/reusables/text-display/TextDisplay";
import { News1Image } from "components/images/news/News1Image";
import { FormattedMessage } from "gatsby-plugin-intl";

interface News {
    photo: JSX.Element;
    contentId: string;
}

export const News: React.FC = () => {
    const news: News[] = [
        {
            contentId: `news.1`,
            photo: <News1Image className="image" />,
        },
        {
            contentId: `news.2`,
            photo: <News1Image className="image" />,
        },
    ];

    return (
        <div className="news-container">
            <span className="news-title">
                <FormattedMessage id="news.title" />
            </span>

            <div className="story">
                <TextDisplay image={news[0].photo}>
                    <FormattedMessage id={news[0].contentId} />
                </TextDisplay>
            </div>
            <div className="story">
                <TextDisplay image={news[1].photo}>
                    <FormattedMessage id={news[1].contentId} />
                </TextDisplay>
            </div>
        </div>
    );
};
