import React from "react";
import SwaggerPath from "./SwaggePath.js";

class SwaggerApi extends React.Component {
  state = { paths: [] };

  handlePath = (path) => {
    let newPaths = [];
    if (!path.state.checked) {
      newPaths = this.state.paths.filter(
        (p) => !(p.path === path.props.url && p.method === path.props.method)
      );
    } else {
      newPaths = [...this.state.paths];
      let idx = newPaths.findIndex(
        (p) => p.path === path.props.url && p.method === path.props.method
      );
      if (idx == -1) {
        newPaths = [
          ...this.state.paths,
          {
            path: path.props.url,
            method: path.props.method,
            configuration: path.state.configuration,
          },
        ];
      } else {
        newPaths[idx] = {
          path: path.props.url,
          method: path.props.method,
          configuration: path.state.configuration,
        };
      }
    }
    this.setState(() => {
      return {
        paths: newPaths,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>{this.props.api.info.title}</h1>
        {Object.entries(this.props.api.paths).map(([k, v]) =>
          Object.keys(v).map((m) => {
            return (
              <SwaggerPath method={m} url={k} handlePath={this.handlePath} />
            );
          })
        )}
      </div>
    );
  }
}

export default SwaggerApi;
