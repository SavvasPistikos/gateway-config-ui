import React from "react";

class SwaggerPath extends React.Component {
  state = {};

  render() {
    console.log(JSON.stringify(this.props.path, null, 2));
    return (
      <>
        <div>
          <p>{this.props.path}</p>
        </div>
      </>
    );
  }
}

export default SwaggerPath;
