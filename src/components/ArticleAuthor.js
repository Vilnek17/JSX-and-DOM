import React from "react";

function ArticleAuthor() {
    const dataInfo = {author:'Mike', published:'06.12.2022', theme:'video Cards'}
    return (
        <div className="article_info">
        <p>Author: {dataInfo.author}</p>
        <p>Published:{dataInfo.published}</p>
        <p>Theme:{dataInfo.theme}</p>
        </div>
    )
}
export default ArticleAuthor;