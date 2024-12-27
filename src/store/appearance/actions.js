import { _setModal, _removeModal, _setBackgroundColor, _setFontsize } from ".";
import store from "..";

export const setBackgroundColor = (data) =>
  store.dispatch(_setBackgroundColor(data));

export const setColor = (data) => store.dispatch(_setColor(data));
export const setFontsize = (data) => store.dispatch(_setFontsize(data));
