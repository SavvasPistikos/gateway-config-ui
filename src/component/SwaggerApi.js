import React from "react";
import SwaggerPath from "./SwaggePath.js";

class SwaggerApi extends React.Component {
  render() {
    return (
      <div>
        {Object.keys(this.props.api.paths).map((s) => (
          <SwaggerPath url={s} path={this.props.api.paths[s]} />
        ))}
      </div>
    );
  }
}

export default SwaggerApi;
