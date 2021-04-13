import { News1Image } from "components/images/news/News1Image";
import { TextDisplay } from "components/reusables/text-display/TextDisplay";
import { FormattedMessage } from "gatsby-plugin-intl";
import React from "react";
import "./News.scss";

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

    const renderNews = (news: News) => {
        return (
            <div className="story">
                <TextDisplay image={news.photo}>
                    <FormattedMessage id={news.contentId} />
                </TextDisplay>
            </div>
        );
    };

    return (
        <div className="news-container">
            <span className="news-title">
                <FormattedMessage id="news.title" />
            </span>

            {news.map(renderNews)}
        </div>
    );
};
