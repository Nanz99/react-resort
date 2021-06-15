import React from 'react'
import Title from '../../components/Title'
import { useGlobalContext } from '../../context/roomsContext';

export default function RoomFilter({ rooms }) {

   const getUnique = (items, value) => {
      return [...new Set(items.map(item => item[value]))]
   }
   const {
      handleChange,
      type,
      capacity,
      price,
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      breakfast,
      pets
   } = useGlobalContext();
   let types = getUnique(rooms, 'type')
   types = ['all', ...types]
  
   let capacitys = getUnique(rooms, 'capacity')
   
   return (
      <section className="filter-container">
         <Title title="Search Rooms" />
         <form className="filter-form">
            <div className="form-group">
               <label htmlFor="type">Room Types</label>
               <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                  {types.map((item, index) => {
                     return <option value={item} key={index}>{item}</option>
                  })}
               </select>
            </div>
            <div className="form-group">
               <label htmlFor="capacity">Capacity</label>
               <select name="capacity" id="capacity" value={capacity}
                  className="form-control" onChange={handleChange}>
                  {
                     capacitys.map((item, index) => {
                        return <option value={item} key={index}>{item}</option>
                     })
                  }
               </select>
            </div>
            <div className="form-group">
               <label htmlFor="price" >price ${price}</label>
               <input type="range" name="price" value={price} min={minPrice} max={maxPrice} id="price"onChange={handleChange} className="form-control" />
            </div>

            <div className="form-group">
               <label htmlFor="size" >size</label>
               <div className="size-inputs">
                  <input type="number" name="minSize" id="size" value={minSize} className="size-input" onChange={handleChange} />
                  <input type="number" name="maxSize" id="size" value={maxSize} className="size-input" onChange={handleChange} />
               </div>
            </div>

            <div className="form-group">
               <div className="single-extra">
                  <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                  <label htmlFor="breakfast" >breakfast</label>
               </div>
               <div className="single-extra">
                  <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                  <label htmlFor="pets" >pets</label>
               </div>
            </div>
         </form>
      </section>
   )
}
