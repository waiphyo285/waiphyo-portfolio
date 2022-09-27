import { configureStore } from '@reduxjs/toolkit'

// reducers
import meReducer from './features/meSlice'
import authReducer from './features/authSlice'
import navlistReducer from './features/navSlice'
import contentReducer from './features/contentSlice'
import projectReducer from './features/projectSlice'
import contactReducer from './features/contactSlice'
import bannerReducer from './features/bannerSlice'
import socialReducer from './features/socialSlice'

// actions
import { authActions } from './features/authSlice'

// services
import lsService from '../services/localStorage'

const authMiddleware = (store) => (next) => (action) => {
    if (authActions.login.match(action)) {
        // Note: localStorage expects a string
        lsService.setItem('authStatus', 'authourized');
    }
    else if (authActions.logout.match(action)) {
        lsService.setItem('authStatus', 'unAuthourized');
    }
    return next(action);
};

export default configureStore({
    reducer: {
        me: meReducer,
        auth: authReducer,
        nav: navlistReducer,
        content: contentReducer,
        project: projectReducer,
        contact: contactReducer,
        banner: bannerReducer,
        social: socialReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware)
})
