import React, { createContext, useReducer } from 'react'
import Reducer from './Reducer'

const initialState = {
    calorieEvents: []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, initialState)

    function deleteCalorieEvent(id) {
        dispatch({
            type: 'DELETE_CALORIEEVENT',
            payload: id
        }) 
    }
    
    function addCalorieEvent(transaction) {
        dispatch({
            type: 'ADD_CALORIEEVENT',
            payload: transaction
        })
    }



return (<GlobalContext.Provider value={{
    calorieEvents: state.calorieEvents,
    deleteCalorieEvent,
    addCalorieEvent
  }}>
    {children}
  </GlobalContext.Provider>);

}