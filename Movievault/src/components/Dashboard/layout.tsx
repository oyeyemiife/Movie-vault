import { ReactNode } from "react";
import { Navbar } from "../Navbar/navbar";
import "./layout.css"
import React from "react";

export const Layout = ({ children, headerBg, headerText }: { children: ReactNode, headerBg?: string, headerText?: string }) => {
  return (
    <div className="dashboard__wrapper">
      <Navbar />
      {headerBg && headerText && (
        <div
          className="dashboard__header"
          style={{ backgroundImage: `url(${headerBg})` }}
        >
          <h2>{headerText}</h2>
        </div>
      )}
      <div className="dashboard__content">{children}</div>
    </div>
  );
};
