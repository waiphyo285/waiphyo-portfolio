import React from "react";
import { useSelector, useDispatch } from 'react-redux'

// Redux 
import { fetchSocial } from "../../redux/features/socialSlice";

function FooterComponent() {
  const dispatch = useDispatch()
  const socialData = useSelector((state) => state.social)

  const curYear = new Date().getFullYear();

  React.useEffect(() => {
    if (socialData.status === "pending") {
      dispatch(fetchSocial())
    }
  }, [socialData, dispatch])

  return (
    <footer
      className={
        `d-flex
        flex-wrap 
        align-items-center 
        justify-content-center
        justify-content-md-between  
        shadow-sm 
        px-2 
        py-3`
      }
    >
      <ul className="nav list-unstyled">
        {
          (socialData.data && socialData.data.length > 0)
            ? socialData.data.map((social, socIdx) => (
              <li key={socIdx} className="social py-2 mx-2">
                <a href={social.href}>
                  <i
                    aria-hidden="true"
                    className={social.icon}
                    style={{ backgroundColor: social.color }}
                  ></i>
                </a>
              </li>
            ))
            : <div className="text-center text-secondary">
              <span className="bi-cloud-download"></span> Loading...
            </div>
        }
      </ul>
      <div className="copyright">
        <span className="p-2">
          Copyright &copy; {curYear}. All rights reserved.
        </span>
      </div>
    </footer >
  );
}

export default FooterComponent;
