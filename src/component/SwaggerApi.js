import React from "react";
import SwaggerPath from "./SwaggePath.js";
import YAML from "json-to-pretty-yaml";

class SwaggerApi extends React.Component {
  state = { [this.props.name]: { paths: [] } };

  handlePath = (path) => {
    let newPaths = [];
    if (!path.state.add) {
      newPaths = this.state[this.props.name].paths.filter(
        (p) => !(p.path === path.props.url && p.method === path.props.method)
      );
    } else {
      newPaths = [...this.state[this.props.name].paths];
      let idx = newPaths.findIndex(
        (p) => p.path === path.props.url && p.method === path.props.method
      );
      if (idx === -1) {
        newPaths = [
          ...this.state[this.props.name].paths,
          {
            path: path.props.url,
            method: path.props.method,
            ...path.state,
          },
        ];
      } else {
        newPaths[idx] = {
          path: path.props.url,
          method: path.props.method,
          ...path.state,
        };
      }
    }
    this.setState(() => {
      return {
        [this.props.name]: { paths: newPaths },
      };
    }, console.log(YAML.stringify(this.state)));
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
