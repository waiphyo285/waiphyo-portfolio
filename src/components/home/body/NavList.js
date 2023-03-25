import React from "react";
import SwitchTheme from "../../common/buttons/SwitchTheme";

function NavListComponent({ navlist }) {
  return (
    <ul
      id="myTab"
      role="tablist"
      className="nav nav-pills nav-fill p-3"
      style={{
        position: "sticky",
        top: 3,
        zIndex: 1000,
        borderTop: `1.8px solid #6d757d`,
        borderBottom: `1.8px solid #6d757d`,
      }}
    >
      {navlist &&
        navlist.map(
          (nav, navIdx) =>
            nav.show && (
              <li className="nav-item" role="presentation" key={navIdx}>
                <button
                  type="button"
                  role="tab"
                  id={nav.name + "-tab"}
                  data-bs-toggle="tab"
                  aria-controls={nav.name}
                  aria-selected={nav.active}
                  data-bs-target={"#" + nav.name}
                  className={
                    nav.active === "true" ? "nav-link active" : "nav-link"
                  }
                >
                  <span className={`${nav.icon} d-sm-none`}></span>
                  <span className={`d-none d-sm-inline`}>
                    {nav["show-text"]}
                  </span>
                </button>
              </li>
            )
        )}
      <li className="nav-item" role="presentation">
        <SwitchTheme />
      </li>
    </ul>
  );
}

export default NavListComponent;
