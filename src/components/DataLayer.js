import React, {createContext, useContext, useReducer} from 'react'

export const DataLayerContext = createContext(); //preparing the datalayer

//                                                children : whatever's wrapped inside the DataLayer tags in App.js
export const DataLayer =({ initialState, reducer, children }) => (
        <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </DataLayerContext.Provider>
)

export const useDataLayerValue = () => useContext(DataLayerContext);