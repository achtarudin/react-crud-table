import React, { Component } from 'react';
import {  Panel, Grid, Row, Col } from 'react-bootstrap';

class AddAccount extends Component {
  render(){
    const { title, children} = this.props
    return(
      <div className="container">
        <br />
        <br />
        <Grid>
          <Row>
            <Col md={4} mdOffset={4}>
              <Panel className="text-center">
                <Panel.Heading>
                  <Panel.Title componentClass="h2"
                    className="text-center">
                    {title}
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  {children}
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default AddAccount;