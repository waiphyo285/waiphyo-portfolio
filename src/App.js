import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import SnackbarProvider from 'react-simple-snackbar'

// Json Editor
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';

// Context provider
import AppContext from "./context/AppContext";

// Pages component
import HomePage from "./pages/home/index";

// Common component
import AuthModal from "./components/common/forms/AuthModal";
import ContactButton from "./components/common/buttons/ContactButton";
import ScrollTop from "./components/common/buttons/ScrollTopButton";
import ProgressBar from "./components/common/others/ProgressBar";

// Redux 
import { fetchContact } from "./redux/features/contactSlice";

// import data
import data from "./__mock__/data.json"

// Style component
import "./public/css/index.css";

function App() {
  const jsonInputRef = React.useRef(data);

  const [onScrollY, setOnScrollY] = React.useState(0)
  const [showTopBtn, setShowTopBtn] = React.useState(false)
  const [showSocial, setShowSocial] = React.useState(false)

  const dispatch = useDispatch()
  const contactStatus = useSelector((state) => state.contact.status)
  const contactData = useSelector((state) => state.contact.data)

  const handleJsonEditor = () => {
    console.log(jsonInputRef.current.state.jsObject)
  }

  React.useEffect(() => {
    if (contactStatus === "pending") {
      dispatch(fetchContact())
    }
  }, [contactStatus, dispatch])

  return (
    <AppContext.Provider value={{
      onScrollY,
      setOnScrollY,
      showTopBtn,
      setShowTopBtn,
      showSocial,
      setShowSocial
    }}>
      <SnackbarProvider>
        <div className="fixed-top">
          <ProgressBar
            scrollVal={onScrollY}
          />
        </div>
        <div className="div-relative">
          <AuthModal
            authUser={{ user: "demo" }}
          />
        </div>
        <div className="div-relative">
          <ContactButton
            contacts={contactData}
          />
        </div>
        <div className="div-relative">
          <ScrollTop
            scrollVal={onScrollY}
          />
        </div>
        <div className="container">
          <HomePage
            data={{}}
          />
          {/* 
            <button
              className="btn btn-dark"
              onClick={() => handleJsonEditor()}
            >
              Save
            </button>
            <JSONInput
              id='a_unique_id'
              ref={jsonInputRef}
              placeholder={data}
              locale={locale}
              height='100vh'
              width="100%"
            /> 
          */}
        </div>
      </SnackbarProvider>
    </AppContext.Provider>
  );
}

export default App;