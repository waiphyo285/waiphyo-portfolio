import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import SeparateHeader from "../common/others/SeparateHeader";

// Redux 
import { fetchBanner } from "../../redux/features/bannerSlice";

function BannerComponent() {
  const dispatch = useDispatch()
  const bannerData = useSelector((state) => state.banner)

  React.useEffect(() => {
    if (bannerData.status === "pending") {
      dispatch(fetchBanner())
    }
  }, [bannerData, dispatch])

  return (
    <>
      <div className="row my-4">
        <SeparateHeader headerName={"Let's talk about code & coffee"} />
        {
          (bannerData.data && bannerData.data.length > 0)
            ? bannerData.data.map((sponsor, sponIdx) => (
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
            : <div className="text-center text-secondary py-5">
              <span className="bi-cloud-download"></span> Loading...
            </div>
        }
      </div>
    </>
  );
}

export default BannerComponent;
