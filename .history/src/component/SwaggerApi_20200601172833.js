import React from "react";

class SwaggerApi extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.api.info.title}</p>
        <p>{this.props.api.tags}</p>
      </div>
    );
  }
}

export default SwaggerApi;
