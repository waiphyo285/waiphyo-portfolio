import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { authLogin, authLogout } from "../../../redux/features/authSlice";

// utils function
import showSnackBar from "../../../utils/show-snackbar";

const AuthModalComponent = () => {
    const dispatch = useDispatch()
    const authData = useSelector((state) => state.auth)

    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(authLogin(formData))
            .unwrap()
            .then((result) => {
                if (result === null) {
                    showSnackBar('Sorry, username or password went wrong!', 'warning');
                }
                else {
                    document.getElementById('closeModal').click();
                    setTimeout(() => window.location.reload(), 3000);
                    showSnackBar('You are successfully logged in!', 'success');
                }
            })
            .catch((error) => {
                console.log("Login Error ", error)
                showSnackBar('Something went wrong!', 'warning');
            });
    };

    return (
        <>
            {
                authData.status == "unAuthorized"
                    ? <>
                        <button
                            href="#login"
                            data-bs-toggle="modal"
                            data-bs-target="#loginForm"
                            className="btn gradient-btn toggle-auth-btn d-none d-lg-inline"
                        >
                            <i className={"bi-box-arrow-in-right"}></i>
                        </button>
                        <div
                            id="loginForm" data-bs-backdrop="static"
                            className={`modal fade text-dark`}
                            data-bs-keyboard="false"
                            aria-labelledby="loginFormLabel"
                            aria-hidden="true"
                            tabIndex="-1"
                        >
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title" id="loginFormLabel">Welcome back!</h4>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        >
                                        </button>
                                    </div>
                                    <form className="p-2" onSubmit={handleSubmit} method="post">
                                        <div className="modal-body">
                                            <div className="form-group m-2 mb-4">
                                                <label htmlFor="username">Username</label>
                                                <input
                                                    type="text"
                                                    name="username"
                                                    id="usernameInput"
                                                    value={formData.username}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="admin"
                                                    autoFocus
                                                    required
                                                />
                                            </div>
                                            <div className="form-group m-2 mb-4">
                                                <label htmlFor="password">Password</label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="passwordInput"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="******"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                id="closeModal"
                                                type="button"
                                                className="btn"
                                                data-bs-dismiss="modal"
                                            >
                                                Cancel
                                            </button>
                                            <button type="submit" className="btn gradient-btn">
                                                <i className={"bi-box-arrow-in-right"}></i> Login
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </>
                    : <button
                        href="#logout"
                        onClick={() => {
                            dispatch(authLogout())
                            setTimeout(() => window.location.reload(), 3000);
                            showSnackBar('You are successfully logged out!', 'success');

                        }}
                        className="btn gradient-btn toggle-auth-btn d-none d-lg-inline"
                    >
                        <i className={"bi-box-arrow-right"}></i>
                    </button>
            }

        </>
    );
};

export default AuthModalComponent;
