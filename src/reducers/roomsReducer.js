import { GET_ROOMS, CHANGE_STATE, FILTER } from '../actions'
import { roomsData } from '../utils/data'

const RoomsReducer = (state, action) => {
   if (action.type === CHANGE_STATE) {
      let newState = { ...state };
      console.log(newState)
      newState = { ...newState, [action.payload.key]: action.payload.value };
      return { ...newState };
   }
   if (action.type === GET_ROOMS) {
      let tempRooms = roomsData.map(item => {
         let id = item.sys.id;
         let images = item.fields.images.map(image => image.fields.file.url);
         let room = { ...item.fields, images, id };
         return room;
      });
      let newState = { ...state };
      let maxPrice = Math.max(...tempRooms.map(item => item.price))
      let maxSize = Math.max(...tempRooms.map(item => item.size));
      let newfeaturedRooms = tempRooms.filter(room => room.featured === true);
      return { ...newState, rooms: tempRooms, price: maxPrice, maxPrice, maxSize, featuredRooms: newfeaturedRooms, sortRooms: tempRooms, loading: false }
   }

   if (action.type === FILTER) {
      let newState = { ...state };
      let tempRooms = roomsData.map(item => {
         let id = item.sys.id;
         let images = item.fields.images.map(image => image.fields.file.url);
         let room = { ...item.fields, images, id };
         return room;
      });
      const {
         type,
         capacity,
         price,
         minPrice,
         maxPrice,
         minSize,
         maxSize,
         breakfast,
         pets } = action.payload;
      const filter = action.payload
      console.log(filter)
      if (type !== 'all') tempRooms = tempRooms.filter(room => room.type === type);
      if (capacity) tempRooms = tempRooms.filter(room => room.capacity >= Number(capacity));
      if (price) tempRooms = tempRooms.filter(room => room.price <= price);
      if (minPrice && maxPrice) tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);
      if (breakfast) tempRooms = tempRooms.filter(room => room.breakfast === true);
      if (pets) tempRooms = tempRooms.filter(room => room.pets === true);
      newState.sortRooms = tempRooms;
      return { ...newState };
   }
}

export default RoomsReducer