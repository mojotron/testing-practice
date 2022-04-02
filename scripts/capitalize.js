"use strict";

const capitalize = (string) => {
  if (typeof string !== "string") throw new Error("Input must be string type");
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
};

export default capitalize;
