import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import SnackbarProvider from 'react-simple-snackbar'

// Context provider
import AppContext from "./context/AppContext";

// Pages component
import HomePage from "./pages/home/index";

// Common component
import ContactButton from "./components/common/ContactButton";
import ScrollTop from "./components/common/ScrollTopButton";
import ProgressBar from "./components/common/ProgressBar";

// Redux 
import { fetchContact } from "./redux/contactSlice";

// Style component
import "./public/css/index.css";

function App() {
  const [onScrollY, setOnScrollY] = React.useState(0)
  const [showTopBtn, setShowTopBtn] = React.useState(false)
  const [showSocial, setShowSocial] = React.useState(false)

  const dispatch = useDispatch()
  const contactStatus = useSelector((state) => state.contact.status)
  const contactData = useSelector((state) => state.contact.data)

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
        </div>
      </SnackbarProvider>
    </AppContext.Provider>
  );
}

export default App;
