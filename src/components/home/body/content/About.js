import React from "react";

// about components
import AboutList from "./about/AboutList";
import AboutMenu from "./about/AboutMenu";

function AboutContentComponent({ contents }) {
    return (
        contents
            ? <div
                className="tab-pane fade pt-4"
                id="about"
                role="tabpanel"
                aria-labelledby="about-tab"
            >
                <div className="row shadow-sm px-3 py-4">
                    <h3 className="h3">{contents["title"]}</h3>
                    <div className="col-sm-3">
                        <div className="list-group" id="list-tab" role="tablist">
                            <AboutMenu contents={contents} menuName={"experiences"} isActive={"active"} />
                            <AboutMenu contents={contents} menuName={"hard-skills"} isActive={""} />
                            <AboutMenu contents={contents} menuName={"educations"} isActive={""} />
                            <AboutMenu contents={contents} menuName={"certifications"} isActive={""} />
                        </div>
                    </div>
                    <div className="col-sm-9 mt-5 mt-sm-0">
                        <div className="tab-content" id="nav-tabContent">
                            <div
                                className="tab-pane fade show active"
                                id="list-experiences" role="tabpanel"
                                aria-labelledby="list-experiences-list"
                            >
                                {/* <h5 className="h5">{contents["experiences"]["title"]}</h5> */}
                                <AboutList contents={contents["experiences"]["data"]} />
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-hard-skills"
                                role="tabpanel"
                                aria-labelledby="list-hard-skills-list"
                            >
                                {/* <h5 className="h5">{contents["hard-skills"]["title"]}</h5> */}
                                <AboutList contents={contents["hard-skills"]["data"]} />
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-educations"
                                role="tabpanel"
                                aria-labelledby="list-educations-list"
                            >
                                {/* <h5 className="h5">{contents["educations"]["title"]}</h5> */}
                                <AboutList contents={contents["educations"]["data"]} />
                            </div>
                            <div
                                className="tab-pane fade"
                                id="list-certifications"
                                role="tabpanel"
                                aria-labelledby="list-certifications-list"
                            >
                                {/* <h5 className="h5">{contents["certifications"]["title"]}</h5> */}
                                <AboutList contents={contents["certifications"]["data"]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            : <></>
    );
}

export default AboutContentComponent;