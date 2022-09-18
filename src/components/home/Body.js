import React, { useState } from "react";
// import ReactEmbedGist from 'react-embed-gist';

import Radium, { StyleRoot } from "radium";
import { fadeIn } from "react-animations";

import BodyContext from "../../context/BodyContext";

import SwitchTheme from "../common/SwitchTheme";
import ContactForm from "../common/ContactForm";
import GoogleMap from "../common/GoogleMap";

const styles = {
  fadeIn: {
    duration: 3,
    animation: "x 3s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  }
};

function TagsList({ tags }) {
  return tags.map((tag, tagIdx) => (
    <code className="mx-1" key={tagIdx}>
      #{tag}
    </code>
  ));
}

function IntroParams({ params }) {
  return (
    <div className="col-md-12">
      {params.map((param, paramIdx) => (
        <p className="p" key={paramIdx}>
          {param}
        </p>
      ))}
    </div>
  );
}

function ArticleList({ articles }) {
  return articles.map((article, artIdx) => (
    <div className="col-md-12 mb-4" key={artIdx}>
      <div
        className="article"
        onClick={() => window.open(article.link, "_blank")}
      >
        <div className="row">
          <div className="col-md-6">
            <img
              className="img img-thumbnail d-block w-100"
              src={`/images/blog/blog-${++artIdx}.jpg`}
              alt={`Blog ${artIdx}`}
            />
          </div>
          <div className="col-md-6 mt-3 mt-sm-0">
            <h5 className="card-title">
              {article.title}
            </h5>
            <TagsList tags={article.tags} />
            <p className="py-2">
              {article.paragraph}
            </p>
          </div>
        </div>
      </div>
    </div>
  ));
}

function AboutList({ contents }) {
  return contents.map((content, contIdx) => (
    <li
      key={contIdx}
      className="list-group-item"
    >
      <div className="d-flex w-100 justify-content-between">
        <h6 className="fw-bold"> {content.title} </h6>
        {content.duration && (
          <span className="badge text-secondary"> {content.duration} </span>
        )}
      </div>
      {content.portfolio === "#" // check URL
        ? <span> {content["sub-title"]} </span >
        : <span onClick={() => window.open(content.portfolio, "_blank")}>
          <a href="#"> {content["sub-title"]} </a >
        </span >
      }
    </li>
  ));
}

function ContactList({ contacts }) {
  return (
    <ul className="list-group">
      {contacts.map((contact, contIdx) => (
        <li key={contIdx} className="list-group-item">
          <i className={contact.icon} aria-hidden="true" />
          <a className="mx-3" href={contact["href"]}>
            {contact["show-text"]}
          </a>
        </li>
      ))}
    </ul>
  );
}

function HomeContent({ contents }) {
  return (
    contents
      ? <div
        className="tab-pane fade pt-4 show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <div className="row shadow-sm px-3 py-4">
          <div className="col-md-12">
            <h3 className="h3">{contents?.["title"]}</h3>
            <IntroParams params={contents.paragraph} />
          </div>
        </div>
      </div>
      : <></>
  );
}

function AboutContent({ contents }) {
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
              <a
                className="list-group-item about-nav-item active"
                id="list-experiences-list"
                data-bs-toggle="list"
                href="#list-experiences"
                role="tab"
                aria-controls="list-experiences"
              >
                <span className="bi bi-briefcase">&nbsp;</span>
                {contents["experiences"]["title"]}
              </a>
              <a
                className="list-group-item about-nav-item"
                id="list-hard-skills-list"
                data-bs-toggle="list"
                href="#list-hard-skills"
                role="tab"
                aria-controls="list-hard-skills"
              >
                <span className="bi bi-tools">&nbsp;</span>
                {contents["hard-skills"]["title"]}
              </a>
              <a
                className="list-group-item about-nav-item"
                id="list-educations-list"
                data-bs-toggle="list"
                href="#list-educations"
                role="tab"
                aria-controls="list-educations"
              >
                <span className="bi bi-mortarboard">&nbsp;</span>
                {contents["educations"]["title"]}
              </a>
              <a
                className="list-group-item about-nav-item"
                id="list-certifications-list"
                data-bs-toggle="list"
                href="#list-certifications"
                role="tab"
                aria-controls="list-certifications"
              >
                <span className="bi bi-patch-check">&nbsp;</span>
                {contents["certifications"]["title"]}
              </a>
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

function BlogContent({ contents }) {
  return (
    contents
      ? <div
        className="tab-pane fade pt-4"
        id="blog"
        role="tabpanel"
        aria-labelledby="blog-tab"
      >
        <div className="row shadow-sm px-3 py-4">
          <h3 className="h3">{contents["title"]}</h3>
          <ArticleList articles={contents.articles} />
          {/* 
          <ReactEmbedGist
            gist="waiphyo285/f24d816e9035ac36fa7f089166bdfb73"
            wrapperClass="gist__bash"
            titleClass="gist__title h5"
            loadingClass="loading__screen"
          /> 
        */}
        </div>
      </div>
      : <></>
  );
}

function ContactContent({ contents }) {
  return (
    contents
      ? <div
        className="tab-pane fade pt-4"
        id="contact"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        <div className="row shadow-sm px-3 py-4">
          <h3 className="h3">{contents.title}</h3>
          <div className="col-md-6">
            <ContactList
              contacts={contents.contacts}
            />
            <GoogleMap src="https://maps.google.com/maps?width=600&amp;height=220&amp;hl=en&amp;q=Mayangon&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
          </div>
          <div className="col-md-6 mt-5 mt-sm-0">
            <ContactForm />
          </div>
        </div>
      </div>
      : <></>
  );
}

function TabContent({ contents }) {
  const { isAnimate, setIsAnimate } = React.useContext(BodyContext);

  return (
    <StyleRoot>
      <div
        id="myTabContent"
        className="tab-content"
        style={isAnimate ? styles.fadeIn : null}
      >
        <HomeContent
          contents={contents[0]}
        />
        <AboutContent
          contents={contents[1]}
        />
        <BlogContent
          contents={contents[2]}
        />
        <ContactContent
          contents={contents[3]}
        />
      </div>
    </StyleRoot>
  );
}

function NavList({ navlist }) {
  const { isAnimate, setIsAnimate } = React.useContext(BodyContext);
  const [isDisable, setIsDisable] = React.useState(false);

  return (
    <ul
      id="myTab"
      role="tablist"
      className="nav nav-pills nav-fill shadow-sm p-3 "
      style={{ position: "sticky", backgroundColor: "#286090", top: 3, zIndex: 1000 }}>
      {
        navlist.map((nav, navIdx) => (
          <li className="nav-item" role="presentation" key={navIdx}>
            <button
              type="button"
              role="tab"
              id={nav.name + "-tab"}
              data-bs-toggle="tab"
              disabled={isDisable}
              aria-controls={nav.name}
              aria-selected={nav.active}
              data-bs-target={"#" + nav.name}
              className={nav.active === "true" ? "nav-link active" : "nav-link"}
              onClick={() => {
                setIsAnimate(true);
                setIsDisable(true);
                setTimeout(() => {
                  setIsAnimate(false);
                  setIsDisable(false);
                }, 1000);
              }}
            >
              <span className={`${nav.icon} d-sm-none`}></span>
              <span className={`d-none d-sm-block`}>{nav["show-text"]}</span>
            </button>
          </li>
        ))
      }
      <li className="nav-item" role="presentation">
        <SwitchTheme />
      </li>
    </ul >
  );
}

function BodyComponent({ navlist, contents }) {
  const [isAnimate, setIsAnimate] = React.useState(false)
  const value = { isAnimate, setIsAnimate };

  return (
    <BodyContext.Provider value={value}>
      <div className="row">
        <NavList navlist={navlist} />
        <TabContent contents={contents} />
      </div>
    </BodyContext.Provider>
  );
}

export default BodyComponent;
