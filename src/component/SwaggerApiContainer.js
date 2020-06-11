import { useState } from "react";
import React from "react";
import swaggerData from "./SwaggerData.js";
import SwaggerApi from "./SwaggerApi.js";

function SwaggerApiContainer() {
  const [apis, setApis] = useState([]);

  return Object.keys(swaggerData).map((api) => (
    <div>
      <SwaggerApi name={api} api={swaggerData[api]} />
    </div>
  ));
}

export default SwaggerApiContainer;
