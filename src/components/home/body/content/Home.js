import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

// home components
import ParamList from "./home/ParamList";

function HomeContentComponent({ contents }) {
  return contents ? (
    <div
      className="tab-pane fade pt-4 show active"
      id="home"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      <div className="row py-4">
        <div className="col-md-12">
          <h3 className="h3">{contents?.["title"]}</h3>
          <ParamList params={contents.paragraph} />
        </div>

        {/* <div className="col-md-6">
          <Player
            loop
            autoplay
            src={`/images/lotties/full-stack-web-developer.json`}
            style={{ height: "500px" }}
          />
        </div> */}
      </div>
    </div>
  ) : (
    <></>
  );
}

export default HomeContentComponent;
