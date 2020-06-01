import React from "react";

class SwaggerPath extends React.Component {
  state = {};

  render() {
    console.log(
      Object.values(this.props.path).map((m) => {
        Object.toString(m);
      })
    );
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
