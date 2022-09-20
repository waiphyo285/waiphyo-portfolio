import React, { useState } from "react";
// import ReactEmbedGist from 'react-embed-gist';

// body components
import NavList from "./body/NavList";
import TabContent from "./body/TabContent";

// Context provider
import BodyContext from "../../context/BodyContext";

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
