import React from "react";
import SwaggerPath from "./SwaggePath.js";

class SwaggerApi extends React.Component {
  render() {
    return (
      <div>
        {Object.keys(this.props.api.paths).map((s) => (
          <SwaggerPath path={s} />
        ))}
      </div>
    );
  }
}

export default SwaggerApi;
