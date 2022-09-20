import React from "react";
import Radium, { StyleRoot } from "radium";
import { zoomIn } from "react-animations";

// project components
import CarouselInner from "./project/CarouselInner";
import PrevNextButton from "./project/PrevNextButton";

// common components
import SeparateHeader from "../common/SeparateHeader";

let styles = {
  zoomIn: {
    duration: 5,
    animation: "x 5s",
    animationName: Radium.keyframes(zoomIn, "zoomIn"),
  },
};

function ProjectComponent({ projects }) {
  return (
    <div className="row my-4">
      <SeparateHeader headerName={"Personal Projects"} />
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
                    <CarouselInner project={project} />
                    <PrevNextButton projectId={pjIdx} />
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
