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
