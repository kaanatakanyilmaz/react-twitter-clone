import {
  _setBackgroundColor,
  _setBorderColor,
  _setColor,
  _setHover,
  _setFontsize,
} from ".";
import store from "..";

export const setBackgroundColor = (data) =>
  store.dispatch(_setBackgroundColor(data));

export const setColor = (data) => store.dispatch(_setColor(data));
export const setHover = (data) => store.dispatch(_setHover(data));
export const setBorderColor = (data) => store.dispatch(_setBorderColor(data));
export const setFontsize = (data) => store.dispatch(_setFontsize(data));
