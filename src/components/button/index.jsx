import React, { createElement } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button({ size, children, ...props }) {
  return createElement(
    "button",
    {
      className: classNames(
        "rounded-full font-bold flex items-center justify-center ",
        {
          "px-4 h-9 bg-[#1d9bf0] text hover:bg-[#007dd1] text-bg[#fff]  transition-colors":
            size === "blueNormal",
          "px-4 h-8 bg-[#1d9bf0] text bg-[#eff3f4] hover:bg-[#d7d8dc] text-[#000]  transition-colors":
            size === "whiteNormal",
          "px-4 h-8 bg-black border border-[#eff3f4] text-[#eff3f4] text-[#000]  transition-colors":
            size === "follow",
          "px-4 h-[52px] text-[17px] w-full bg-[#1d9bf0] hover:bg-[#007dd1] text-[#fff]":
            size === "blueLarge",
          "px-4 h-[52px] text-[17px] w-full bg-[#eff3f4] hover:bg-[#d7d8dc] text-[#0f1419]":
            size === "whiteLarge",
        }
      ),
      ...props,
    },
    children
  );
}
Button.propTypes = {
  size: PropTypes.oneOf([
    "blueNormal",
    "whiteNormal",
    "blueLarge",
    "whiteLarge",
    "follow",
  ]),
  props: PropTypes.object,
};

Button.defaultProps = {
  size: "normal",
};
