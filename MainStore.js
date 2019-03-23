import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' 
import index_reducer from './src/reducers/index_reducer'
import RootStack from './src/navigations/index_navigation'


const store = createStore(index_reducer, applyMiddleware(thunk))

const MainStore = () => {
    return (
    <Provider store={store}>
        <RootStack />
    </Provider>
    )
}

export default MainStore