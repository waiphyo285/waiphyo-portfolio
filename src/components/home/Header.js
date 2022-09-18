import React, { useEffect } from "react";

function getGreetingMsg(hour) {
  if (hour > -1 && hour < 12) {
    return "မင်္ဂလာ နံနက်ခင်းပါ ☕";
  }
  else if (hour == 12) {
    return "မင်္ဂလာ နေ့လည်ခင်းပါ 🍚";
  }
  else if (hour > 12 && hour < 18) {
    return "မင်္ဂလာ နေ့လည်ခင်းပါ ☀️";
  }
  else {
    return "မင်္ဂလာ ညချမ်းပါ 🌙";
  }
}

function UserProfile({ profile_img, fullname, greeting }) {
  return (
    <div className="col-md-12 d-flex justify-content-center">
      <div className="text-center">
        <figure style={{ position: "relative" }}>
          <img
            className="img img-thumbnail rounded-circle"
            src={profile_img}
            height={150}
            width={150}
          />
          <span className="bi bi-circle-fill text-info"
            style={{
              position: "absolute",
              fontSize: "20px",
              top: "120px",
              right: "38px"
            }}>
          </span>
        </figure>
        <div className="text-light" >
          <h1 className="title-name">{fullname}</h1>
          <span className="mx-2 greeting">{greeting}</span>
        </div>
      </div>
    </div >
  );
}

function MainComponent({ personal }) {
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
        className="row py-5"
        style={{
          backgroundImage: `url('../images/banner.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <UserProfile
          profile_img={personal["profile-img"]}
          fullname={personal["fullname"]}
          greeting={greetingText}
        />
      </div>
    </>

  );
}

export default MainComponent;
