import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
      img: "../src/assets/Projectors.png",
      name: "Projectors",
      cost: 200,
      quantity: 0,
    },
    {
      img: "../src/assets/Speaker, the device.png",
      name: "Speaker",
      cost: 35,
      quantity: 0,
    },
    {
      img: "../src/assets/Microphones.png",
      name: "Microphones",
      cost: 45,
      quantity: 0,
    },
    {
      img: "../src/assets/Whiteboards.png",
      name: "Whiteboards",
      cost: 80,
      quantity: 0,
    },

    {
      img: "../src/assets/Signage.png",
      name: "Signage",
      cost: 80,
      quantity: 0,
    },
  ],

  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item) {
        item.quantity++;
      }
    },
    decrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item && item.quantity > 0) {
        item.quantity--;
      }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
