import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class SwaggerPath extends React.Component {
  state = {};

  render() {
    let httpmethods = [];
    Object.keys(this.props.path).forEach((m) => {
      httpmethods.push(m);
    });

    return httpmethods.map((m) => {
      return (
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                {m} {this.props.url}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      );
    });
  }
}

export default SwaggerPath;
