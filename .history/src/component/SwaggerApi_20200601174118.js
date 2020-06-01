import React from "react";

class SwaggerApi extends React.Component {
  render() {
    let obj = {};
    obj = Object.keys(this.props.api.paths).map((s) => this.props.api.paths[s]);
    return (
      <div>
        <p>{this.props.api.info.title}</p>
      </div>
    );
  }
}

export default SwaggerApi;
