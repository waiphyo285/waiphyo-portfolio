import React from "react";

// Style component
import "../../assets/css/404.css";

function NotFound() {
    return (
        <div class="o-found-container d-flex justify-content-center align-items-center">
            <h1 class="align-top border-right inline-block align-content-center mx-3">404</h1>
            <div class="inline-block align-middle">
                <h2 class="font-weight-normal lead">The page you requested was not found.</h2>
            </div>
        </div>
    )
}

export default NotFound;