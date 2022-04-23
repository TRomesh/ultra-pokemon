import React, { Fragment } from "react";

const Navigation = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <Fragment>
      <nav className="navbar navbar-light bg-light">
        <div className="navbar-brand">
          <img
            src="../assets/pokemon.png"
            width="150"
            height="50"
            className="d-inline-block align-top"
            alt=""
          />
        </div>
      </nav>
      <br />
      {children}
    </Fragment>
  );
};

export default Navigation;
