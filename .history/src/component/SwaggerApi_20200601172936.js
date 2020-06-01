import React from "react";

class SwaggerApi extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.api.info.title}</p>
        <p>{Object.toString(this.props.api.paths)}</p>
      </div>
    );
  }
}

export default SwaggerApi;
