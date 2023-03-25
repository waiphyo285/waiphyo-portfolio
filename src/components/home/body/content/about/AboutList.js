import React from "react";

function AboutListComponent({ contents }) {
  return contents.map((content, contIdx) => (
    <div key={contIdx}>
      <li style={{ listStyle: "none" }} className={`p-3 `}>
        <div className="d-flex w-100 justify-content-between">
          <h6 className="fw-bold"> {content.title} </h6>
          {content.duration && (
            <span
              className="badge bg-secondary pt-2"
              style={{ minWidth: "130px" }}
            >
              {content.duration}{" "}
            </span>
          )}
        </div>
        {content.portfolio === "#" ? (
          <span className="text-secondary">{content["sub-title"]} </span>
        ) : (
          <a href="#" onClick={() => window.open(content.portfolio, "_blank")}>
            {content["sub-title"]}
            <span className="bi bi-link-45deg"></span>
          </a>
        )}
      </li>
      {contents.length - 1 !== contIdx && <hr className="m-0" />}
    </div>
  ));
}

export default AboutListComponent;
