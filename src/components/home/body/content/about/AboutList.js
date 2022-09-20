import React from "react";

function AboutListComponent({ contents }) {
    return contents.map((content, contIdx) => (
        <li
            key={contIdx}
            className="list-group-item"
        >
            <div className="d-flex w-100 justify-content-between">
                <h6 className="fw-bold"> {content.title} </h6>
                {
                    content.duration && (
                        <span className="badge text-secondary"> {content.duration} </span>
                    )
                }
            </div>
            {
                content.portfolio === "#"
                    ? <span> {content["sub-title"]} </span >
                    : <span onClick={() => window.open(content.portfolio, "_blank")}>
                        <a href="#"> {content["sub-title"]} </a >
                    </span >
            }
        </li>
    ));
}

export default AboutListComponent;