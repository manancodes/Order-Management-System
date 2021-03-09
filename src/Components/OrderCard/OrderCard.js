import React, { Component } from "react";
import { Alert, Button, Card, Col, Form, Row, Table } from "react-bootstrap";
// import { connect } from "react-redux";
import "./OrderCard.css";
class OrderCard extends Component {
  state = {
    user: { email: "", phone: "", payment: "", address: "" },
    errors: {},
    row: [
      {
        id: Math.random() * 1000000000,
        heading: [
          "Select",
          "Iphone 12 Pro",
          "Iphone 12",
          "Iphone 12 Pro Max ",
          "Iphone 11 pro max",
          "Iphone 11",
        ],
        basePrice: [0, 119990, 79900, 129900, 108609, 50999],
        price: 0,
        quantity: 0,
        discount: 20,
      },
    ],
  };
  isValid = () => {
    const errors = {};
    if (this.state.user.email.trim() === "") {
      errors.email = "Invalid";
    }

    if (this.state.user.phone.trim() === "") {
      errors.phone = "Invalid";
    }
    if (this.state.user.payment.trim() === "") {
      errors.payment = "Invalid";
    }
    if (this.state.user.address.trim() === "") {
      errors.address = "Invalid";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  };
  changeHandler = (event) => {
    console.log("The OnChnage is working");
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
    console.log(this.state);
  };
  valuechangeHandler = (event) => {
    console.log("The OnChnage value is working");
    this.state.row.map((x, i) => {
      const row1 = { ...x };
      row1[event.target.name] = event.target.value;
      this.setState({ row: [row1] });
    });
  };
  submitHandler = (event) => {
    event.preventDefault();
    const errors = this.isValid();
    console.log(errors);
    this.setState({ errors });
    if (errors) return;
    console.log("Call the Server");
  };
  datalistHandler = (event) => {
    console.log(event.target.value);
  };
  render() {
    return (
      <div className="Outer_Container">
        <Card style={{ width: "68rem" }}>
          <div className="Heading">
            <h4>Order</h4>
          </div>
          <Form onSubmit={this.submitHandler}>
            <Row>
              <Col sm={6}>
                <div className="form_container">
                  {/* <Form.Group as={Col} md="8" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      onChange={this.changeHandler}
                      type="text"
                      //   value={this.state.user.name}
                      name="name"
                      placeholder="Enter Full Name"
                    />
                    {this.state.errors.name && (
                      <Alert variant="danger">{this.state.errors.name}</Alert>
                    )}
                  </Form.Group> */}

                  <Form.Group as={Col} md="8" controlId="formBasicEmail">
                    <Form.Label>E-Mail</Form.Label>
                    <Form.Control
                      onChange={this.changeHandler}
                      name="email"
                      type="email"
                      placeholder="Enter your Email"
                      value={this.state.user.email}
                    />
                    {this.state.errors.email && (
                      <Alert variant="danger">{this.state.errors.email}</Alert>
                    )}
                  </Form.Group>
                  <Form.Group as={Col} md="8" controlId="formBasicPassword">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      value={this.state.user.phone}
                      onChange={this.changeHandler}
                      name="phone"
                      type="text"
                      placeholder="Enter Phone Number"
                    />
                    {this.state.errors.phone && (
                      <Alert variant="danger">{this.state.errors.phone}</Alert>
                    )}
                  </Form.Group>
                </div>
              </Col>
              <Col>
                <div className="mb-3">
                  <h6>Payment Method</h6>
                  <Form.Check
                    onChange={this.changeHandler}
                    type="radio"
                    name="payment"
                    // name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    label="Online"
                  />
                  <Form.Check
                    onChange={this.changeHandler}
                    type="radio"
                    name="payment"
                    // name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                    label="Cash"
                  />
                  {this.state.errors.payment && (
                    <Alert variant="danger">{this.state.errors.payment}</Alert>
                  )}
                </div>
                <Form.Group as={Col} md="10" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    value={this.state.user.address}
                    onChange={this.changeHandler}
                    name="address"
                    as="textarea"
                    rows={5}
                    placeholder="Hint Text"
                  />
                  {this.state.errors.address && (
                    <Alert variant="danger">{this.state.errors.address}</Alert>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <div className="table">
                <Table id="Table" responsive="sm">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Heading</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Discount</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.row.map((value, index) => (
                      <tr>
                        <td width="10">{index + 1}</td>
                        <td width="210">
                          <Form.Group
                            onChange={this.datalistHandler}
                            as={Col}
                            md="12"
                            controlId="exampleForm.SelectCustomSizeSm"
                          >
                            <Form.Control as="select" size="sm" custom>
                              {/* { this.props.list.map((val,index) =>(
                                                    <option>{val.itemName}</option>
                                                ))} */}
                              {value.heading.map((val, i) => (
                                <option>{val}</option>
                              ))}
                            </Form.Control>
                          </Form.Group>
                        </td>
                        <td width="110">
                          <Form.Group as={Col} md="12">
                            <Form.Control
                              onChange={this.valuechangeHandler}
                              value={value.quantity}
                              size="sm"
                              name="quantity"
                              type="text"
                              placeholder="Unit"
                            />
                          </Form.Group>
                        </td>
                        <td width="180">
                          <Form.Group as={Col} md="12">
                            <Form.Control
                              name="price"
                              value={value.price}
                              size="sm"
                              type="text"
                              placeholder="Price"
                            />
                          </Form.Group>
                        </td>
                        <td width="30">
                          <Form.Group as={Col} md="12">
                            <Form.Control
                              onChange={this.valuechangeHandler}
                              name="discount"
                              size="sm"
                              type="text"
                              value={value.discount}
                              placeholder="Discount"
                            />
                          </Form.Group>
                          {/* <h6>30%</h6> */}
                        </td>
                        <td width="180">
                          <Form.Group as={Col} md="10">
                            <Form.Control
                              size="sm"
                              value={
                                value.price *
                                value.quantity *
                                (value.discount / 100)
                              }
                              type="text"
                              placeholder="Total"
                            />
                          </Form.Group>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Row>
            {/* <div className="addItem">
              <Button type="submit" variant="dark">
                + Add Item
              </Button>{" "}
            </div> */}
            <div className="placeOrder">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    );
  }
}

export default OrderCard;
// const mapStateToProps = (state) => {
//   return {
//     list: state.itemList,
//   };
// };
// export default connect(mapStateToProps)(OrderCard);
