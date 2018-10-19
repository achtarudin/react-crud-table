import React, { Component } from 'react';
import { Table as Place, Grid, Row, Col, Button } from 'react-bootstrap';

class Table extends Component {
  render(){
    const { data, clickEdit, clickDelete } = this.props;
    return(
    
      <div className="container">
        <Grid>
          <Row>
            <Col md={6} mdOffset={3}>
              <Place responsive>
                <thead>
                  <tr>
                    <th className="text-center">ID</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Github Account</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) =>
                    <tr className="text-center" key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td><a href={"https://github.com/"+ item.github}>@{item.github}</a></td>
                      <td>
                        <Button bsSize="sm" bsStyle="primary" onClick={() => clickEdit(index)}>Edit</Button>
                      </td>
                      <td>
                        <Button bsSize="sm" bsStyle="danger" onClick={() => clickDelete(index)}>Delete</Button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </Place>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
export default Table;