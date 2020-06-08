import React from "react";
import swaggerData from "./SwaggerData.js";
import SwaggerApi from "./SwaggerApi.js";

class SwaggerApiContainer extends React.Component {
  state = { apis: [] };

  render() {
    return Object.keys(swaggerData).map((api) => (
      <div>
        <SwaggerApi name={api} api={swaggerData[api]} handleApi={} />
      </div>
    ));
  }
}

export default SwaggerApiContainer;
