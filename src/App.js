import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SnackbarProvider from 'react-simple-snackbar'

// Service storage
import ssService from "./services/sessionStorage"

// Context provider
import AppContext from "./context/AppContext";

// Pages component
import MainPage from "./pages/index";
import ViewPage from "./pages/view";
import NotFound from "./pages/404";

// Style component
import "./public/css/index.css";

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  const user = ssService.getItem("user")

  const [onScrollY, setOnScrollY] = React.useState(0)
  const [showTopBtn, setShowTopBtn] = React.useState(false)
  const [showSocial, setShowSocial] = React.useState(false)

  return (
    <AppContext.Provider
      value={{
        onScrollY,
        showTopBtn,
        showSocial,
        setShowTopBtn,
        setOnScrollY,
        setShowSocial
      }}>
      <SnackbarProvider>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/view"
            element={
              <ProtectedRoute user={user}>
                <ViewPage />
              </ProtectedRoute>
            }
          />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </SnackbarProvider>
    </AppContext.Provider>
  );
}

export default App;