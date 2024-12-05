import React, { createElement } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button({ size, children }) {
  return createElement(
    "button",
    {
      className: classNames(
        "bg-[#eff3f4] text-[#0f1419] rounded-full font-bold flex items-center justify-center hover:bg-[#d7d8dc] transitions-colors   ",
        {
          "px-4 h-9": size === "normal",
          "px-4 h-[52px] text-[17px] w-full": size === "large",
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
