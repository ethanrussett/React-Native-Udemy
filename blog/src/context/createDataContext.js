import React, {useReducer} from 'react'

export default (reducer, actions, initialState) => {
    const Context = React.createContext()

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState)
    }

}