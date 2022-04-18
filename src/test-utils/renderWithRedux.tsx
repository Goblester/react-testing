import React, {ReactElement} from 'react'
import {render as rtlRender} from '@testing-library/react'
import {AnyAction, configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import courseReducer from "../features/store/course";
import {RootState} from "../features/store";


function render(
    ui: ReactElement,
    options?: {
        preloadedState: RootState | undefined,
        dispatch?: any
        renderOptions?: any
    }
) {


    const observerMiddleware = () => (next: any) => (action: AnyAction) => {
        if(options?.dispatch) options.dispatch(action)
        return next(action)
    }
    const preloadedState = options?.preloadedState
    const renderOptions = options?.renderOptions || {}
    const store = configureStore({
        reducer: {
            course: courseReducer
        },
        preloadedState
    })
    const Wrapper =({children }: {children: any}) => {
        return <Provider store={store}>{children}</Provider>
    }

    return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
}

// re-export everything
export * from '@testing-library/react'
// override render method
export {render}