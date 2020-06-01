import React from "react";

class SwaggerPath extends React.Component {
  state = {};

  render() {
    console.log(this.props.path);
    return (
      <>
        <div>
          <p>{this.props.path}</p>
        </div>
        <br></br>
      </>
    );
  }
}

export default SwaggerPath;
