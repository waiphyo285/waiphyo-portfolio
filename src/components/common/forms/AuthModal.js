import React, { useEffect } from "react";
import { useSnackbar } from 'react-simple-snackbar'
import { useSelector, useDispatch } from 'react-redux'
import { authLogin, authActions } from "../../../redux/features/authSlice";

const AuthModalComponent = ({ authStatus }) => {
    const dispatch = useDispatch()
    const authData = useSelector((state) => state.auth)

    const [isAuth, setIsAuth] = React.useState(authStatus)
    const [showModal, setShowModal] = React.useState("")

    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
    })

    const [openSnackbar, closeSnackbar] = useSnackbar({
        style: {
            fontSize: '18px',
            textAlign: 'center',
            border: '1px solid #ffc100',
        },
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(authLogin(formData))
    };

    useEffect(() => {
        if (authData.data !== null) {
            setShowModal("")
            setIsAuth("authourized")
            dispatch(authActions.login("authourized"))
            openSnackbar("You are successfully logged in!")
        }
    }, [authData, dispatch])

    return (
        <>
            {
                isAuth === "unAuthourized"
                    ? <>
                        <button
                            href="#login"
                            onClick={() => { setShowModal("show") }}
                            data-bs-toggle="modal"
                            data-bs-target="#loginForm"
                            className="btn gradient-btn toggle-auth-btn d-none d-lg-inline"
                        >
                            <i className={"bi-box-arrow-in-right"}></i>
                        </button>
                        <div
                            id="loginForm" data-bs-backdrop="static"
                            className={`modal fade text-dark ${showModal}`}
                            style={{ display: showModal ? "block" : "none" }}
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
                                            onClick={() => { setShowModal(""); }}
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
                                                type="button"
                                                className="btn"
                                                data-bs-dismiss="modal"
                                                onClick={() => { setShowModal(""); }}
                                            >
                                                Cancel
                                            </button>
                                            <button type="submit" className="btn btn-dark">
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
                            dispatch(authActions.login("authourized"))
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
