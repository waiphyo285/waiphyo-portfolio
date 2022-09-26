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
  const personalStatus = useSelector((state) => state.me.status)
  const personalData = useSelector((state) => state.me.data)

  const navlistStatus = useSelector((state) => state.nav.status)
  const navlistData = useSelector((state) => state.nav.data)

  const contentStatus = useSelector((state) => state.content.status)
  const contentData = useSelector((state) => state.content.data)

  const projectStatus = useSelector((state) => state.project.status)
  const projectData = useSelector((state) => state.project.data)

  const bannerStatus = useSelector((state) => state.banner.status)
  const bannerData = useSelector((state) => state.banner.data)

  const socialStatus = useSelector((state) => state.social.status)
  const socialData = useSelector((state) => state.social.data)

  const [color, setColor] = React.useState("#286090");
  const [loading, setLoading] = React.useState(true);
  const [successCount, setSuccessCount] = React.useState(0);

  const handleFetchData = (dataStatus, fetchData) => {
    if (dataStatus === "pending") {
      dispatch(fetchData())
    }
    if (dataStatus === "success") {
      setSuccessCount(successCount + 1)
    }
  }

  React.useEffect(() => {
    handleFetchData(personalStatus, fetchMe)
  }, [personalStatus, dispatch])

  React.useEffect(() => {
    handleFetchData(navlistStatus, fetchNav)
  }, [navlistStatus, dispatch])

  React.useEffect(() => {
    handleFetchData(contentStatus, fetchContent)
  }, [contentStatus, dispatch])

  React.useEffect(() => {
    handleFetchData(projectStatus, fetchProject)
  }, [projectStatus, dispatch])

  React.useEffect(() => {
    handleFetchData(bannerStatus, fetchBanner)
  }, [bannerStatus, dispatch])

  React.useEffect(() => {
    handleFetchData(socialStatus, fetchSocial)
  }, [socialStatus, dispatch])

  return (
    successCount >= 6
      ? <>
        <HeaderComponent
          personal={personalData}
        />
        <BodyComponent
          navlist={navlistData}
          contents={contentData}
        />
        <ProjectComponent
          projects={projectData}
        />
        <BannerComponent
          banners={bannerData}
        />
        <FooterComponent
          socials={socialData}
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
