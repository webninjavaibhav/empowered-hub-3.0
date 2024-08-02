import React from "react";

type TabsDataProps = {
  label: string;
  value: string;
};

export type TabsProp = {
  tabs: TabsDataProps[];
  activeTab: string;
  onChange: (tab: string) => void;
};

const Tabs: React.FC<TabsProp> = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="flex">
      <div className="flex bg-gray-200 p-2 rounded-3xl ">
        {tabs.map((tab) => (
          <div
            key={tab.label}
            className={`button px-8 p-2 rounded-3xl cursor-pointer ${
              tab.value === activeTab ? "bg-fluorite font-h5" : ""
            }`}
            onClick={() => onChange(tab.value)}
          >
            {tab.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
