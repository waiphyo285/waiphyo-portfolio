import React from "react";
import DotLoader from "react-spinners/DotLoader";
import { useSelector, useDispatch } from 'react-redux'

// Home components
import HeaderComponent from "../../components/home/Header";
import BodyComponent from "../../components/home/Body";
import ProjectComponent from "../../components/home/Project";
import BannerComponent from "../../components/home/Banner";
import FooterComponent from "../../components/home/Footer";

// Redux 
import { fetchMe } from '../../redux/features/meSlice'
import { fetchNav } from "../../redux/features/navSlice";
import { fetchContent } from "../../redux/features/contentSlice";
import { fetchProject } from "../../redux/features/projectSlice";
import { fetchBanner } from "../../redux/features/bannerSlice";
import { fetchSocial } from "../../redux/features/socialSlice";

// Loading
import "../../public/css/loading.css"

function HomePage({ data }) {
  const dispatch = useDispatch()
  const personalData = useSelector((state) => state.me)
  const navlistData = useSelector((state) => state.nav)
  const contentData = useSelector((state) => state.content)
  const projectData = useSelector((state) => state.project)
  const bannerData = useSelector((state) => state.banner)
  const socialData = useSelector((state) => state.social)

  const [color, setColor] = React.useState("#286090");
  const [loading, setLoading] = React.useState(true);
  const [successCount, setSuccessCount] = React.useState(0);

  const handleFetchData = (data, fetchData) => {
    if (data.status === "pending") {
      dispatch(fetchData())
    }
    if (data.status === "success") {
      setSuccessCount(successCount + 1)
    }
  }

  React.useEffect(() => {
    handleFetchData(personalData, fetchMe)
  }, [personalData, dispatch])

  React.useEffect(() => {
    handleFetchData(navlistData, fetchNav)
  }, [navlistData, dispatch])

  React.useEffect(() => {
    handleFetchData(contentData, fetchContent)
  }, [contentData, dispatch])

  React.useEffect(() => {
    handleFetchData(projectData, fetchProject)
  }, [projectData, dispatch])

  React.useEffect(() => {
    handleFetchData(bannerData, fetchBanner)
  }, [bannerData, dispatch])

  React.useEffect(() => {
    handleFetchData(socialData, fetchSocial)
  }, [socialData, dispatch])

  return (
    successCount >= 6
      ? <>
        <HeaderComponent
          personal={personalData.data}
        />
        <BodyComponent
          navlist={navlistData.data}
          contents={contentData.data}
        />
        <ProjectComponent
          projects={projectData.data}
        />
        <BannerComponent
          banners={bannerData.data}
        />
        <FooterComponent
          socials={socialData.data}
        />
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
