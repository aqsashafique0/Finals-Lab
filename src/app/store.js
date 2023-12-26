import { configureStore } from "@reduxjs/toolkit";
import dataofSlice from "./features/slice/dataSlice";

export const store = configureStore({
    reducer: dataofSlice
})