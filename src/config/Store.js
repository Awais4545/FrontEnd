import { configureStore } from '@reduxjs/toolkit';
import getSlice from '../store/getSlice';





const store = configureStore({
    reducer: {

        property: getSlice,



    }
})
export default store