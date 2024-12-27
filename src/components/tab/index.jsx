import Item from "./item";
import Items from "./items";
import Content from "./content";
import PropTypes from "prop-types";
import { TabContext } from "./context";
import { useEffect, useState } from "react";

function Tab({ children, activeTab }) {
  const [active, setActive] = useState(activeTab);

  useEffect(() => {
    setActive(activeTab);
  }, [activeTab]);

  const contents = children.filter((c) => c.type === Content);
  const items = children.filter((c) => c.type === Items);

  const content = contents.find((c) => c.props.id === active);

  const data = {
    active,
    setActive,
  };

  return (
    <TabContext.Provider value={data}>
      <div className="border-b border-[color:var(--border-primary)] sticky top-0 z-10 bg-[color:var(--background-alpha)] backdrop-blur-md">
        {items}
      </div>
      {content}
    </TabContext.Provider>
  );
}

Tab.Items = Items;
Tab.Item = Item;
Tab.Content = Content;

Tab.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  activeTab: PropTypes.string.isRequired,
};

export default Tab;
