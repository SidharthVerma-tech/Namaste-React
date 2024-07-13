import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  // Reducer contains the reducer actions which update
  // or modify the cart
  reducers : {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});
export const { addItems, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
