import React, { createElement } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button({ size, children }) {
  return createElement(
    "button",
    {
      className: classNames(
        "rounded-full font-bold flex items-center justify-center ",
        {
          "px-4 h-9 bg-[#1d9bf0] text hover:bg-[#007dd1] text-bg[#fff]  transitions-colors":
            size === "blueNormal",
          "px-4 h-9 bg-[#1d9bf0] text bg-[#eff3f4] hover:bg-[#d7d8dc] text-[#000]  transitions-colors":
            size === "whiteNormal",
          "px-4 h-[52px] text-[17px] w-full bg-[#1d9bf0] hover:bg-[#007dd1] text-[#fff]":
            size === "blueLarge",
          "px-4 h-[52px] text-[17px] w-full bg-[#eff3f4] hover:bg-[#d7d8dc] text-[#0f1419]":
            size === "whiteLarge",
        }
      ),
    },
    children
  );
}
Button.propTypes = {
  size: PropTypes.oneOf(["normal", "large"]),
};

Button.defaultProps = {
  size: "normal",
};
