import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    userName: "Kaan Atakan",
    fullName: "@" + "kaatakann",
    avatar:
      "https://pbs.twimg.com/profile_images/1799188686141083648/RTjbxqkJ_400x400.jpg",

    post: 27,
    photos:
      "https://pbs.twimg.com/profile_banners/1510930619680890880/1685291898/600x200",
    date: {
      day: 29,
      mounth: "Mayıs",
      year: 2001,
    },
    joining: {
      mounth: "Nisan",
      year: 2022,
    },
    follow: {
      following: 43,
      followers: 259,
    },
  },
  accounts: [
    {
      id: 1,
      userName: "Kaan Atakan",
      fullName: "@" + "kaatakann",
      avatar:
        "https://pbs.twimg.com/profile_images/1799188686141083648/RTjbxqkJ_400x400.jpg",

      post: 27,
      photos:
        "https://pbs.twimg.com/profile_banners/1510930619680890880/1685291898/600x200",
      date: {
        day: 29,
        mounth: "Mayıs",
        year: 2001,
      },
      joining: {
        mounth: "Nisan",
        year: 2022,
      },
      follow: {
        following: 259,
        followers: 43,
      },
    },
    {
      id: 2,
      userName: "Fatih Terim",
      fullName: "@" + "fatihterim",
      avatar:
        "https://pbs.twimg.com/profile_images/1481692704195190796/gUEomF6Z_400x400.jpg",
      photos:
        "https://pbs.twimg.com/profile_banners/3040535475/1501431951/1500x500",
      date: {
        day: 29,
        mounth: "Mayıs",
        year: 2001,
      },
      joining: {
        mounth: "Şubat",
        year: 2015,
      },
      follow: {
        following: 1,
        followers: 1500000,
      },
    },
  ],
};
const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (currentAccount && action.payload === currentAccount.id) {
        this.currentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccount, _removeAccount, _setCurrentAccount } = auth.actions;

export default auth.reducer;
