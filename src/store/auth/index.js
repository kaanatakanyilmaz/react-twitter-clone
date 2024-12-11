import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    userName: "Kaan Atakan",
    fullName: "@" + "kaatakann",
    avatar:
      "https://pbs.twimg.com/profile_images/1799188686141083648/RTjbxqkJ_400x400.jpg",
  },
  accounts: [
    {
      id: 1,
      userName: "Kaan Atakan",
      fullName: "@" + "kaatakann",
      avatar:
        "https://pbs.twimg.com/profile_images/1799188686141083648/RTjbxqkJ_400x400.jpg",
    },
    {
      id: 2,
      userName: "Fatih Terim",
      fullName: "@" + "fatihterim",
      avatar:
        "https://pbs.twimg.com/profile_images/1481692704195190796/gUEomF6Z_400x400.jpg",
    },
    {
      id: 3,
      userName: "Mümtaz Reis",
      fullName: "@" + "mumtazreiss",
      avatar:
        "https://pbs.twimg.com/profile_images/1392849581143216128/E_UmsLy1_400x400.jpg",
    },

    {
      id: 4,
      userName: "Bill Gates",
      fullName: "@" + "billgates",
      avatar:
        "https://pbs.twimg.com/profile_images/1674815862879178752/nTGMV1Eo_400x400.jpg",
    },
    {
      id: 5,
      userName: "Cristiano Ronaldo",
      fullName: "@" + "cristiano",
      avatar:
        "https://pbs.twimg.com/profile_images/1594446880498401282/o4L2z8Ay_400x400.jpg",
    },
    {
      id: 6,
      userName: "Elon Musk",
      fullName: "@" + "elonmusk",
      avatar:
        "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg",
    },

    {
      id: 7,
      userName: "Taylor Swift",
      fullName: "@" + "taylorswift13",
      avatar:
        "https://pbs.twimg.com/profile_images/1766836345450672128/HpuBz514_400x400.jpg",
    },
    {
      id: 8,
      userName: "Jeff Bezos",
      fullName: "@" + "jeffbezos",
      avatar:
        "https://pbs.twimg.com/profile_images/1591558315254890500/ETIHb4Nl_400x400.jpg",
    },
    {
      id: 9,
      userName: "Selena Gomez",
      fullName: "@" + "selenagomez",
      avatar:
        "https://pbs.twimg.com/profile_images/1758176482923544576/yqC9eTZh_400x400.jpg",
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
