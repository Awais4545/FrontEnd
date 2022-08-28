import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";






export const STATUS = Object.freeze({
    IDLE: "idle",

    LOADING: "loading",
    ERROR: "error",
})



const getSlice = createSlice({
    name: "product",


    initialState: {
        data: [],
        status: STATUS.IDLE,
    },
    reducers: {


    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProperty.pending, (state, action) => {
                state.status = STATUS.LOADING
            }
            )
            .addCase(fetchProperty.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            }
            )
            .addCase(fetchProperty.rejected, (state, action) => {
                state.status = STATUS.ERROR
            }
            )

    }


})


export default getSlice.reducer;

export const fetchProperty = createAsyncThunk("fetch/product",
    async () => {
        const baseURL = process.env.REACT_APP_BASEURL;

        const res = await axios.get(`${baseURL}/property/getProperty`)
        const data = res.data;
        return data




    }
)