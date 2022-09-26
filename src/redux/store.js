import { configureStore } from '@reduxjs/toolkit'

// reducers
import meReducer from './features/meSlice'
import navlistReducer from './features/navSlice'
import contentReducer from './features/contentSlice'
import projectSlice from './features/projectSlice'
import contactSlice from './features/contactSlice'
import bannerSlice from './features/bannerSlice'
import socialSlice from './features/socialSlice'

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
