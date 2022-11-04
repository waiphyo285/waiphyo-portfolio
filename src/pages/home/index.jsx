import React from "react";
import DotLoader from "react-spinners/DotLoader";
import { useSelector, useDispatch } from 'react-redux'

// Home components
import HeaderComponent from "../../components/home/Header";
import BodyComponent from "../../components/home/Body";
import ProjectComponent from "../../components/home/Project";
import RepoComponent from "../../components/home/Repository";
import BannerComponent from "../../components/home/Banner";
import FooterComponent from "../../components/home/Footer";

// Redux 
import { fetchMe } from "../../redux/features/meSlice";

// Loading
import "../../assets/css/loading.css"

function HomePage() {
  const dispatch = useDispatch()
  const personalData = useSelector((state) => state.personal)

  const [color, setColor] = React.useState("#286090");
  const [loading, setLoading] = React.useState(true);

  const handleFetchData = (data, fetchData) => {
    if (data.status === "pending") {
      dispatch(fetchData())
    }
  }

  // Firstt contentful page & fetch here more
  React.useEffect(() => {
    handleFetchData(personalData, fetchMe)
  }, [personalData, dispatch])

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [loading])

  return (
    !loading
      ? <>
        <HeaderComponent />
        <BodyComponent />
        <ProjectComponent />
        <RepoComponent />
        <BannerComponent />
        <FooterComponent />
      </>
      : <div className="jumbotron vertical-center" >
        <div className="load-container" >
          <DotLoader
            color={color}
            loading={loading}
            cssOverride={{
              display: "block",
              margin: "0 auto",
            }}
            size={80} />
        </div>
      </div>
  );
}

export default HomePage;
