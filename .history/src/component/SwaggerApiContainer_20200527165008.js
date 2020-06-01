import React from "react";
import swaggerData from "./SwaggerData.js";

class SwaggerApiContainer extends React.Component {
  render() {
    {
      swaggerData.map((api) => {
        return <SwaggerApi />;
      });
    }
  }
}

export default SwaggerApiContainer;
