import React from "react";
import SwaggerPath from "./SwaggePath.js";

class SwaggerApi extends React.Component {
  state = { paths: [] };

  handlePath = (path) => {
    if (!path.state.checked) {
      this.setState((prev) => {
        const paths = [...this.state.paths, path.props.url];
        return {
          paths,
        };
      });
    }
  };
  render() {
    return (
      <div>
        {Object.keys(this.props.api.paths).map((s) => (
          <SwaggerPath
            url={s}
            path={this.props.api.paths[s]}
            handlePath={this.handlePath}
          />
        ))}
      </div>
    );
  }
}

export default SwaggerApi;
