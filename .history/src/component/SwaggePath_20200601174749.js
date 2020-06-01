import React from "react";

class SwaggerPath extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <p>{this.props.path}</p>
      </div>
    );
  }
}

export default SwaggerPath;
