import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //BLACK
  backgroundColor: {
    name: "dark",
    primary: "#000",
    alpha: "#000000a6",
    modal: "#5b708366",
    likes: "#02113d",
  },
  color: {
    primary: "#1d9bf0",
    base: "#e7e9ea",
    baseSecondary: "#71767b",
    logo: "fff",
    search: "#202327",
  },
  hover: {
    base: "#f7f9f91a",
    baseSecondary: "#ffffff08",
    baseAccount: "#f7f9f91a",
  },
  borderColor: {
    primary: "#2f3336",
  },
  fontSize: 16,
  //LOŞ
  // backgroundColor: {
  //   name: "darkBlue",
  //   primary: "#15202b",
  //   alpha: "#15202ba6",
  //   modal: "#5b708366",
  //   likes: "#02113d",
  // },
  // color: {
  //   primary: "#1d9bf0",
  //   base: "#f7f9f9",
  //   baseSecondary: "#8b98a5",
  //   logo: "fff",
  //   search: "#273340",
  // },
  // hover: {
  //   base: "#f7f9f91a",
  //   baseSecondary: "#ffffff08",
  //   baseAccount: "#ffffff08",
  // },
  // borderColor: {
  //   primary: "#2f3336",
  // },
  // fontSize: 16,

  //BEYAZ
  // backgroundColor: {
  //   name: "light",
  //   primary: "#fff",
  //   alpha: "#ffffffa6",
  //   modal: "#0006",
  //   likes: "#eafaff",
  // },
  // color: {
  //   primary: "#1d9bf0",
  //   base: "#0f1419",
  //   baseSecondary: "#536471",
  //   logo: "#000",
  //   search: "#eff3f4",
  // },
  // hover: {
  //   base: "#0f14191a",
  //   baseSecondary: "#f7f9f9",
  //   baseAccount: "#f7f9f9",
  // },
  // borderColor: {
  //   primary: "#eff3f4",
  // },
  // fontSize: 16,
};

const appearance = createSlice({
  name: "appearance",
  initialState,
  reducers: {
    _setBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload;
    },
    _setColor: (state, action) => {
      state.color = action.payload;
    },
    _setHover: (state, action) => {
      state.hover = action.payload;
    },
    _setBorderColor: (state, action) => {
      state.borderColor = action.payload;
    },
    _setFontsize: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const {
  _setBackgroundColor,
  _setColor,
  _setHover,
  _setBorderColor,
  _setFontsize,
} = appearance.actions;

export default appearance.reducer;
