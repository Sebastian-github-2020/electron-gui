/**
 * 新版状态管理 使用@reduxjs/toolkit
 */

import {createSlice, configureStore, createReducer, createAction} from "@reduxjs/toolkit";
// 创建 reducer 切片
// const counterSlice = createSlice({
//     name: "counter",
//     initialState: {
//         value: 0
//     },
//     reducers: {
//         increment: state => {
//             state.value += 1
//         },
//         decrement: state => {
//             state.value -= 1
//         }
//     }
// })
// export const {increment, decrement} = counterSlice.actions


// 创建reducer
const defaultState = {value: 0}
// 创建action
const increment = createAction('counter/increment')
const decrement = createAction('counter/decrement')
const rootReducer = createReducer(defaultState, builder => {
    builder
        .addCase(increment, (state, action) => {
            state.value++
        })
        .addCase(decrement, (state, action) => {
            state.value--
        })
})


// 创建store
const newStore = configureStore({
    reducer: rootReducer
})