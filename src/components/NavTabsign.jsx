import React, { useState } from "react";
import MetaData from "./MetaData";

function NavTab() {
  const [activeTab, setActiveTab] = useState(<MetaData />);
  const theTabs = [
    <MetaData isActive={true} />,
    <Asset isActive={false} />,
    <Revenue isActive={false} />,
    <Details isActive={false} />,
    <Provenance isActive={false} />,
  ];
  function handleClick() {
    theTabs.map((tab) => {
      tab.props;
    });
  }
  return (
    <div className="pt-3">
      {/* <!-- Nav tabs--> */}
      <div className="mb-3" style={{ overflowX: "auto" }}>
        <ul
          className="nav nav-tabs nav-fill flex-nowrap text-nowrap mb-1"
          role="tablist"
        >
          <li className="nav-item">
            <a
              id="metadata"
              className="nav-link active"
              to="#properties"
              data-bs-toggle="tab"
              role="tab"
            >
              Metadata
            </a>
          </li>
          <li className="nav-item">
            <a
              id="asset"
              className="nav-link"
              href="#asset"
              data-bs-toggle="tab"
              role="tab"
            >
              Asset
            </a>
          </li>
          <li className="nav-item">
            <a
              id="revenues"
              className="nav-link"
              href="#revenues"
              data-bs-toggle="tab"
              role="tab"
            >
              Revenues
            </a>
          </li>
          <li className="nav-item">
            <a
              id="details"
              className="nav-link"
              href="#details"
              data-bs-toggle="tab"
              role="tab"
            >
              Details
            </a>
          </li>
          <li className="nav-item">
            <a
              id="provenance"
              className="nav-link"
              href="#provenance"
              data-bs-toggle="tab"
              role="tab"
            >
              Provenance
            </a>
          </li>
        </ul>
      </div>
      {/* <!-- Tabs content--> */}
      <div className="tab-content">
        {/* <!-- Properties--> */}
        <MetaData />
        {/* <!-- Asset --> */}
        <Asset />
        {/* <!-- Revenue History--> */}
        <Revenue />
        {/* <!-- Details--> */}
        <Details />
        {/* <!-- Provenance--> */}
        <Provenance />
      </div>
    </div>
  );
}

export default NavTab;
