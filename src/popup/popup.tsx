import React from "react";
import { createRoot } from "react-dom/client";
import classes from "./popup.module.css";

const test = (
  <div className={classes.popupContainer}>
    <h1>Hello World!!!</h1>
  </div>
);

const container = document.createElement("div");
document.body.append(container);
const root = createRoot(container);
root.render(test);
