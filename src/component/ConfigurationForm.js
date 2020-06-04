import React from "react";

class ConfigurationForm extends React.Component {
  state = {
    authorize: false,
    display: true,
    endpoint: "",
    path: this.props.path,
    trnsId: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.props.handleForm(this.state);
      }
    );
  };

  render() {
    return (
      <form hidden={this.props.hidden}>
        <div className="x">
          <label>authorize: </label>
          <select
            value={this.state.authorize}
            name="authorize"
            onChange={this.handleChange}
          >
            <option value="false"> false</option>
            <option value="true"> true</option>
          </select>
        </div>
        <div className="x">
          <label>display: </label>
          <select
            value={this.state.display}
            name="display"
            onChange={this.handleChange}
          >
            <option value="false"> false</option>
            <option value="true"> true</option>
          </select>
        </div>
        <div className="x">
          <label>endpoint: </label>
          <input
            value={this.state.endpoint}
            //placeholder="endpoint"
            name="endpoint"
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="x">
          <label>path: </label>
          <input
            value={this.state.path}
            style={{ width: this.state.path.length }}
            //placeholder="endpoint"
            name="path"
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="x">
          <label>trnsId: </label>
          <input
            style={{ width: 30, height: 12, padding: 1 }}
            //placeholder="endpoint"
            name="trnsId"
            onChange={this.handleChange}
          ></input>
        </div>
      </form>
    );
  }
}

export default ConfigurationForm;
