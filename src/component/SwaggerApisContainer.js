import { useState } from "react";
import React from "react";
import swaggerData from "./SwaggerData.js";
import SwaggerApi from "./SwaggerApi.js";

function SwaggerApisContainer() {
  const [apis, setApis] = useState([]);

  return Object.keys(swaggerData).map((api) => (
    <div>
      <SwaggerApi key={api} name={api} api={swaggerData[api]} />
    </div>
  ));
}

export default SwaggerApisContainer;
