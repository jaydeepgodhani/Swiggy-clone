import { createSlice, current } from "@reduxjs/toolkit";

// Redux flow is like this -> click a `add to cart` button -> Dispatches an action -> calls reducer function -> modifies slice/store -> store calls selectors which is subscribed by some react state -> state automatically changes based on a value change
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // plain console.log wont work, current has to be used
      console.log(current(state));
      // state = [] wont work , why?
      // because if we change the reference of state to [], then actual array of state wont change so it'll not be empty
      // so wither set length to 0 or simply return { items: [] }
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
