import { createContext, useEffect, useReducer } from 'react'
import Reducer from './reducer'

const initialState = {
  info: {
    count: JSON.parse(localStorage.getItem('info'))
      ? JSON.parse(localStorage.getItem('info')).count
      : 0,
    orderList: JSON.parse(localStorage.getItem('info'))
      ? JSON.parse(localStorage.getItem('info')).orderList
      : [],
  },
}

const Context = createContext(initialState)

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  useEffect(() => {
    localStorage.setItem('info', JSON.stringify(state.info))
  }, [state.info])

  return (
    <Context.Provider
      value={{
        info: state.info,

        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
