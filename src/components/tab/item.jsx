import PropTypes from "prop-types";
import { useTab } from "./context";
import classNames from "classnames";

export default function Item({ children, id }) {
  const { active, setActive } = useTab();

  return (
    <button
      className="flex-auto text-center hover:bg-[color:var(--hover-base)] transition-colors  "
      onClick={() => setActive(id)}
    >
      <div
        className={classNames(
          "h-[3.313rem] inline-flex items-center  text-[color:var(--color-base)] relative ",
          {
            "font-bold": active == id,
            "text-[color:var(--color-base-secondary)]": active != id,
          }
        )}
      >
        {children}
        {active == id && (
          <div className="absolute bottom-0 left-0 w-full h-[4px] rounded-full bg-[color:var(--color-primary)] " />
        )}
      </div>
    </button>
  );
}

Item.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  id: PropTypes.string,
};
