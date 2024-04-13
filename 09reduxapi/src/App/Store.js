import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../Features/Todo/Todo'


export const Store = configureStore({
    reducer: todoReducer
})