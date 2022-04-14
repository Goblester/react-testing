import {configureStore} from "@reduxjs/toolkit";
import courseReducer from "./course";
import {TypedUseSelectorHook, useSelector} from "react-redux";


const store = configureStore({
    reducer: {
      course: courseReducer
    },
    devTools: true
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export default store