import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Player } from "@lottiefiles/react-lottie-player";
import SeparateHeader from "../common/others/SeparateHeader";

// Redux
import { fetchBanner } from "../../redux/features/bannerSlice";

function BannerComponent() {
  const dispatch = useDispatch();
  const bannerData = useSelector((state) => state.banner);

  React.useEffect(() => {
    if (bannerData.status === "pending") {
      dispatch(fetchBanner());
    }
  }, [bannerData, dispatch]);

  return (
    <>
      <div className="row my-4">
        <SeparateHeader headerName={"Let's talk about code & coffee"} />
        {bannerData.data && bannerData.data.length > 0 ? (
          bannerData.data.map((banner, bannerIdx) => (
            <div key={bannerIdx} className="col-md-6 mt-4">
              <div className="shadow-sm">
                <Player
                  loop
                  autoplay
                  src={banner.src}
                  style={{ height: "200px" }}
                />
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-secondary py-5">
            <div className="spinner-grow" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default BannerComponent;
