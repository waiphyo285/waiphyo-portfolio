import React from "react";
import SeparateHeader from "../common/SeparateHeader";

function BannerComponent({ banners }) {
  return (
    <>
      <div className="row my-4">
        <SeparateHeader headerName={"Let's talk about code & coffee"} />
        {
          banners.map((sponsor, sponIdx) => (
            <div
              key={sponIdx}
              className="col-md-6 mt-4"
            >
              <div className="shadow-sm">
                <lottie-player
                  src={sponsor.src}
                  style={{ height: "200px" }}
                  loop="true"
                  speed="0.3"
                  autoplay
                ></lottie-player>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default BannerComponent;
