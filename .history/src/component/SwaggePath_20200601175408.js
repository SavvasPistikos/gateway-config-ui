import React from "react";

class SwaggerPath extends React.Component {
  state = {};

  render() {
    console.log(this.props.path);
    return (
      console.log(Object.values(this.props.path).map((m) => {m}));
      <>
        <div>
          <p>{this.props.path}</p>
        </div>
      </>
    );
  }
}

export default SwaggerPath;
