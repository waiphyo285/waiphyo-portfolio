import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import Radium, { StyleRoot } from "radium";
import { zoomIn } from "react-animations";

// project components
import CarouselInner from "./project/CarouselInner";
import PrevNextButton from "./project/PrevNextButton";

// common components
import SeparateHeader from "../common/others/SeparateHeader";

// Redux 
import { fetchProject } from "../../redux/features/projectSlice";

let styles = {
  zoomIn: {
    duration: 5,
    animation: "x 5s",
    animationName: Radium.keyframes(zoomIn, "zoomIn"),
  },
};

function ProjectComponent() {
  const dispatch = useDispatch()
  const projectData = useSelector((state) => state.project)

  React.useEffect(() => {
    if (projectData.status === "pending") {
      dispatch(fetchProject())
    }
  }, [projectData, dispatch])

  return (
    <div className="row my-4">
      <SeparateHeader headerName={"Personal Projects"} />
      {
        (projectData.data && projectData.data.length > 0)
          ? projectData.data.map((project, pjIdx) => {
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
          : <div className="text-center text-secondary py-5">
            <span className="bi-cloud-download"></span> Loading...
          </div>
      }
    </div >
  );
}

export default ProjectComponent;
