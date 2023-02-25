import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { fetchMe } from "../../redux/features/meSlice";

// Component
import MyProfile from "./header/Profile";
import getGreetingMsg from "../../utils/greeting-msg";

function HeaderComponent() {
  const dispatch = useDispatch();
  const personalData = useSelector((state) => state.personal);

  const [greetingText, setGreetingText] = React.useState(
    getGreetingMsg(new Date().getHours())
  );

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  React.useEffect(() => {
    if (new Date().getMinutes() === 0) {
      const interval = setInterval(() => {
        setGreetingText(getGreetingMsg(new Date().getHours()));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, []);

  React.useEffect(() => {
    if (personalData.status === "pending") {
      dispatch(fetchMe());
    }
  }, [personalData, dispatch]);

  return (
    <div
      className="row py-5 cover"
      // style={{
      //   backgroundImage: `url('...')`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   backgroundRepeat: 'no-repeat'
      // }}
    >
      {personalData.status === "success" ? (
        <>
          <MyProfile
            profile_img={personalData.data["profile-img"]}
            fullname={personalData.data["fullname"]}
            greeting={greetingText}
          />
        </>
      ) : (
        <div className="text-center text-light">
          <div className="spinner-grow" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeaderComponent;
