import React from "react";
import Img from 'react-cool-img';
import Radium, { StyleRoot } from "radium";
import { zoomIn } from "react-animations";

import defaultImg from "../../public/images/default-project.png"

let styles = {
  zoomIn: {
    duration: 5,
    animation: "x 5s",
    animationName: Radium.keyframes(zoomIn, "zoomIn"),
  },
};

function ButtonListComponent({ buttons }) {
  return (
    <div className="m-md-4 m-sm-3 m-xs-2">
      {buttons.map((button, btnIdx) => {
        return button.isShow ? (
          <a
            key={btnIdx}
            href={button.link}
            className="btn btn-sm gradient-btn mx-1"
          >
            <i className={button.icon} aria-hidden="true"></i>
          </a>
        ) : (
          <span key={btnIdx}></span>
        );
      })}
    </div>
  );
}

function PrevNextComponent({ projectId }) {
  return (
    <>
      <button
        type="button"
        className="carousel-control-prev"
        data-bs-target={`#carouselIndicator-${projectId}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <a
        type="button"
        className="carousel-control-next"
        data-bs-target={`#carouselIndicator-${projectId}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </>
  );
}

function CarouselInnerComponent({ project }) {
  const { title, description, images, buttons } = project;
  const [isMouseOver, setMouseOver] = React.useState(false);

  return (
    <div className="carousel-inner">
      {images.map((imageSrc, imgIdx) => {
        return (
          <div
            key={imgIdx}
            className={imgIdx === 0 ? "carousel-item active" : "carousel-item"}
            onMouseOver={() => setMouseOver(true)}
            onMouseOut={() => setMouseOver(false)}

          >
            <Img
              debounce={300}
              src={imageSrc}
              alt={`Slice ${imgIdx}`}
              placeholder={defaultImg}
              className="d-block w-100"
            />
            <div className="carousel-caption ">
              <div className={`${isMouseOver ? "d-block" : "d-none"}`}>
                <ButtonListComponent buttons={buttons} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ProjectComponent({ projects }) {
  return (
    <div className="row my-4">
      <div className="col-md-12">
        <div className="separator">
          <div className="line"></div>
          <h4>Personal Projects</h4>
          <div className="line"></div>
        </div>
      </div>
      {
        projects.map((project, pjIdx) => {
          return (
            project.show && (
              <StyleRoot key={pjIdx} className="col-md-3">
                <div style={styles.zoomIn}>
                  <div
                    id={`carouselIndicator-${pjIdx}`}
                    className="carousel slide mt-4"
                    data-bs-ride="carousel"
                  >
                    <CarouselInnerComponent project={project} />
                    <PrevNextComponent projectId={pjIdx} />
                  </div>
                  <span className="d-block text-center py-2">
                    {project.title}
                  </span>
                </div>
              </StyleRoot>
            )
          );
        })
      }
    </div >
  );
}

export default ProjectComponent;
