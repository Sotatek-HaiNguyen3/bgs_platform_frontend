import React, { useState } from "react";
import cn from "classnames";

import Counts from "components/Counts";

import s from "./style.module.scss";

const Home = () => {
  return (
    <div className={cn(s.wrapper, "container")}>
      <div className="row">
        <div className="col-6">
          <h1>{process.env.REACT_APP_APPLICATION_NAME}</h1>
          <p>My dashboard</p>
        </div>

        <div className="col-6">
          <Counts />
        </div>
      </div>
    </div>
  );
};

export default Home;
