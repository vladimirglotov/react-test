import React from "react";
import { HeaderButton } from "./HeaderButton";

export const Header =  () => {
  return (
    <div className="header">
      <img src="/react-test/LiveDune.png" alt="logo" />
      <HeaderButton />
    </div>
  )
}