import React from "react";

function BannerComponent({ banners }) {
  return (
    <>
      <div className="row my-4">
        <div className="col-md-12">
          <div className="separator">
            <div className="line"></div>
            <h4>Let's talk about code & coffee</h4>
            <div className="line"></div>
          </div>
        </div>
        {banners.map((sponsor, sponIdx) => (
          <div
            key={sponIdx}
            className="col-md-6 mt-4"
          >
            <div
              className="shadow-sm"
            >
              <lottie-player
                src={sponsor.src}
                style={{ width: "", height: "200px" }}
                speed="0.3"
                loop="true"
                autoplay
              ></lottie-player>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BannerComponent;
