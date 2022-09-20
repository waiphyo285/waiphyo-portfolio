import React, { useEffect } from "react";
import MyProfile from "./header/Profile";
import getGreetingMsg from "../../utils/greeting-msg";

function HeaderComponent({ personal }) {
  const [greetingText, setGreetingText] = React.useState(
    getGreetingMsg(new Date().getHours())
  );

  useEffect(() => {
    if (new Date().getMinutes() === 0) {
      const interval = setInterval(() => {
        setGreetingText(
          getGreetingMsg(new Date().getHours())
        );
      }, 1000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <>
      <div
        className="row py-5 cover"
      // style={{
      //   backgroundImage: `url('../images/banner.png')`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   backgroundRepeat: 'no-repeat'
      // }}
      >
        <MyProfile
          profile_img={personal["profile-img"]}
          fullname={personal["fullname"]}
          greeting={greetingText}
        />
      </div>
    </>

  );
}

export default HeaderComponent;
