import React from "react";

class ConfigurationForm extends React.Component {
  state = { authorize: false, display: true, endpoint: "" };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form>
        <label>authorize: </label>
        <select
          value={this.state.authorize}
          name="authorize"
          onChange={this.handleChange}
        >
          <option value="false"> false</option>
          <option value="true"> true</option>
        </select>
        <br></br>
        <label>display: </label>
        <select
          value={this.state.display}
          name="display"
          onChange={this.handleChange}
        >
          <option value="false"> false</option>
          <option value="true"> true</option>
        </select>
        <br></br>
        <label>endpoint: </label>
        <input
          //placeholder="endpoint"
          name="endpoint"
          onChange={this.handleChange}
        ></input>
      </form>
    );
  }
}

export default ConfigurationForm;
