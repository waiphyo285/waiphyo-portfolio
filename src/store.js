import { configureStore } from '@reduxjs/toolkit'

// reducers
import meReducer from './redux/meSlice'
import navlistReducer from './redux/navSlice'
import contentReducer from './redux/contentSlice'
import projectSlice from './redux/projectSlice'
import contactSlice from './redux/contactSlice'
import bannerSlice from './redux/bannerSlice'
import socialSlice from './redux/socialSlice'

export default configureStore({
    reducer: {
        me: meReducer,
        nav: navlistReducer,
        content: contentReducer,
        project: projectSlice,
        contact: contactSlice,
        banner: bannerSlice,
        social: socialSlice,
    },
})
