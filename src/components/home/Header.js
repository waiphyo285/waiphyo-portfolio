import React from "react";
import { useSelector, useDispatch } from 'react-redux'

// Redux 
import { fetchMe } from '../../redux/features/meSlice'

// Component
import MyProfile from "./header/Profile";
import getGreetingMsg from "../../utils/greeting-msg";

function HeaderComponent() {
  const dispatch = useDispatch()
  const personalData = useSelector((state) => state.personal)

  const [greetingText, setGreetingText] = React.useState(
    getGreetingMsg(new Date().getHours())
  );

  React.useEffect(() => {
    if (new Date().getMinutes() === 0) {
      const interval = setInterval(() => {
        setGreetingText(
          getGreetingMsg(new Date().getHours())
        );
      }, 1000);
      return () => clearInterval(interval);
    }
  }, []);

  React.useEffect(() => {
    if (personalData.status === "pending") {
      dispatch(fetchMe())
    }
  }, [personalData, dispatch])

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
      {
        personalData.status === "success"
          ? <MyProfile
            profile_img={personalData.data["profile-img"]}
            fullname={personalData.data["fullname"]}
            greeting={greetingText}
          />
          : <div className="text-center text-light" >
            <span className="bi-cloud-download"></span> Loading...
          </div>
      }
    </div>
  );
}

export default HeaderComponent;
