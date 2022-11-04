import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import Radium, { StyleRoot } from "radium";
import { zoomIn } from "react-animations";

// common components
import SeparateHeader from "../common/others/SeparateHeader";

// Redux 
import { fetchRepository } from "../../redux/features/repoSlice";

const styles = {
    zoomIn: {
        duration: 5,
        animation: "x 5s",
        animationName: Radium.keyframes(zoomIn, "zoomIn"),
    },
};

function RepositoryComponent() {
    const dispatch = useDispatch()
    const repositoryData = useSelector((state) => state.repository)
    React.useEffect(() => {
        if (repositoryData.status === "pending") {
            dispatch(fetchRepository())
        }
    }, [repositoryData, dispatch])

    return (
        <div className="row  my-4">
            <SeparateHeader headerName={"Github Repositories"} />
            {
                (repositoryData.data && repositoryData.data.length > 0)
                    ? repositoryData.data.map((repository, rpsIdx) => {
                        return (
                            <StyleRoot key={rpsIdx} className="col-md-3 my-2 mb-3">
                                <div style={styles.zoomIn}>
                                    <div
                                        onClick={() => window.open(repository.html_url, "_blank")}
                                        className="github-card shadow-sm p-3"
                                        data-github={repository.fullname}
                                    >
                                        <h3>{repository.name}</h3>
                                        <span className="github-card__desc">
                                            {repository.description}
                                        </span>
                                        <span className="github-card__meta">
                                            🌐 {repository.language}
                                        </span>
                                        <span className="github-card__meta">
                                            ⭐ {repository.stargazers_count}
                                        </span>
                                        <span className="github-card__meta">
                                            ⚓ {repository.forks_count}
                                        </span>
                                    </div>
                                </div>
                            </StyleRoot>
                        );
                    })
                    : <div className="text-center text-secondary py-5">
                        <div className="spinner-grow" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div>
            }
        </div >
    );
}

export default RepositoryComponent;
