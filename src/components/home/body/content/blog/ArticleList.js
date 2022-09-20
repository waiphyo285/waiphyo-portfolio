import React from "react";
import TagsList from "./TagsList";

function ArticleListComponent({ articles }) {
    return articles.map((article, artIdx) => (
        <div className="col-md-12 mb-4" key={artIdx}>
            <div
                className="article"
                onClick={() => window.open(article.link, "_blank")}
            >
                <div className="row">
                    <div className="col-md-6">
                        <img
                            className="img img-thumbnail d-block w-100"
                            src={`/images/blog/blog-${++artIdx}.jpg`}
                            alt={`Blog ${artIdx}`}
                        />
                    </div>
                    <div className="col-md-6 mt-3 mt-sm-0">
                        <h5 className="card-title">
                            {article.title}
                        </h5>
                        <div>
                            <TagsList tags={article.tags} />
                        </div>
                        <p className="py-2">
                            {article.paragraph}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    ));
}

export default ArticleListComponent;