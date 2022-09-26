import React, { useEffect } from "react";
import AppContext from "../../../context/AppContext";

const AuthModalComponent = () => {
    return (
        <>
            <button
                href="#contact"
                onClick={() => { return false; }}
                data-bs-toggle="modal"
                data-bs-target="#loginForm"
                className="btn gradient-btn toggle-auth-btn d-none d-lg-inline"
            >
                <i className={"bi-box-arrow-in-right"}></i>
            </button>
            <div className="modal fade bg-dark text-dark" id="loginForm" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="loginFormLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="loginFormLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>
                                This feature is comming soon for editing portfolio information from user interface.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-dark">Understood</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthModalComponent;
