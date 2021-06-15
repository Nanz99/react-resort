



import React, { useContext, useEffect, useReducer, useState } from 'react'
import { GET_ROOMS, CHANGE_STATE, FILTER } from '../actions'
import reducer from '../reducers/roomsReducer'

const RoomsContext = React.createContext()

export const RoomsProvider = ({ children }) => {
   const initialState = {
      rooms: [],
      featuredRooms: [],
      sortRooms: [],
      type: 'all',
      capacity: 1,
      price: 0,
      maxPrice: 0,
      minPrice: 0,
      maxSize: 0,
      minSize: 0,
      pets: false,
      breakfast: false,
      loading: true
   }
   const [state, dispatch] = useReducer(reducer, initialState)
   const [filter, setFilter] = useState(initialState)

   useEffect(() => {
      dispatch({ type: GET_ROOMS });
   }, [])

   useEffect(() => {
      dispatch({ type: FILTER, payload: filter })
   }, [filter])
   const getOneRoom = (id) => {
      let room = state.rooms.find(room => room.id === id)
      return room
   }
   const handleChange = (event) => {
      event.preventDefault();
      const target = event.target;
      const name = event.target.name;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      dispatch({ type: CHANGE_STATE, payload: { key: name, value: value } });
      setFilter({ ...filter, [name]: value });
   }
   console.log("state", state)
   return (
      <RoomsContext.Provider value={{
         ...state,
         handleChange, 
         getOneRoom
      }}>
         {children}
      </RoomsContext.Provider>
   )
}

export const useGlobalContext = () => {
   return useContext(RoomsContext)
}