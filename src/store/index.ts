import { configureStore } from '@reduxjs/toolkit'
import counterSlide from './features/counter/counterSlide'
import { userApi } from './services/userApi'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
    reducer: { counterSlide, [userApi.reducerPath]: userApi.reducer },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([userApi.middleware])
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
