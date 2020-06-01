import React from "react";

class SwaggerPath extends React.Component {
  state = {};

  render() {
    console.log(this.props.path);
    return (
      <>
        <div>
          {Object.values(this.props.path).map((m) => (
            <h1>{m}</h1>
          ))}
          <p>{this.props.path}</p>
        </div>
      </>
    );
  }
}

export default SwaggerPath;
