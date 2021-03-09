import React, { Component } from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import './SummaryNeededCard.css';
class SummaryNeededCard extends Component {
    constructor(props) {
        super(props);
        this.state={id:"",obj:{Add:"NA",Customer_Name:"NA",Order_Detail:"NA",phone:"NA",status:"NA"},
        heading:{Address:"Address",Customer_Name:"Customer Name",Order_Details:"Order Details",Phone:"Phone",Status:"Status"}}
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick(event) {
                        this.setState({id:event.currentTarget.id})
                        const data=this.props.detail.filter(value=> 
                        {
                            if(value.id== event.currentTarget.id)
                                {this.setState({obj:value})
                                console.log("If statement worked") }
                        })
       
        console.log(this.state.obj);
      }
    render() {
        return (
            <div className="summary_Container">
                <Card style={{ width: '68rem' }}>
                
                <div className="table_stripped">
                <Table   hover size="sm">
                    <thead>
                        <tr>
                            <th>Order Number</th>
                            <th>Customer Name</th>
                            <th>Order Detail</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                            {this.props.detail.map((val,index)=>(
                                <tr key={val.id} id={val.id} onClick={this.handleClick}>
                                    <td  width="130">{val.Order_No}</td>
                                    <td  width="160">{val.Customer_Name}</td>
                                    <td  width="160">{val.Order_Detail}</td>
                                    <td  width="160">{val.phone}</td>
                                    <td  width="260">{val.Add}</td>
                                    <td >{val.status}</td>
                                </tr>
                            ))}
                    </tbody>
                </Table></div>
                </Card>

                <div className="second_container">
                    <Card style={{ width: '68rem' }}>
                                 <div className="insideCard_Container">
                                     <Row >
                                         <Col>
                                                <div><h2>{this.state.obj.Order_No}</h2></div>
                                         </Col>
                                     </Row>
                                {/* <Row><Col sm={2}><div><h6>Address</h6></div></Col> <Col sm={2}>{this.state.obj.Add}</Col> </Row>
                                <Row><Col sm={2}><div><h6>Customer Name</h6></div></Col ><Col sm={2}>{this.state.obj.Customer_Name}</Col></Row>
                                <Row><Col sm={2}><div><h6>Order Details</h6></div></Col><Col sm={2}>{this.state.obj.Order_Detail}</Col></Row>
                                <Row><Col sm={2}><div><h6>Phone</h6></div></Col><Col sm={2}>{this.state.obj.phone}</Col></Row>
                                <Row><Col sm={2}><div><h6>Status</h6></div></Col><Col sm={2}>{this.state.obj.status}</Col></Row> */}
                                 <Row ><Col sm={2}><div><h6>{this.state.heading.Address}</h6></div></Col> <Col sm={2}>{this.state.obj.Add}</Col> </Row>
                                <Row ><Col sm={2}><div><h6>{this.state.heading.Customer_Name}</h6></div></Col ><Col sm={2}>{this.state.obj.Customer_Name}</Col></Row>
                                <Row ><Col sm={2}><div><h6>{this.state.heading.Order_Details}</h6></div></Col><Col sm={2}>{this.state.obj.Order_Detail}</Col></Row>
                                <Row ><Col sm={2}><div><h6>{this.state.heading.Phone}</h6></div></Col><Col sm={2}>{this.state.obj.phone}</Col></Row>
                                <Row ><Col sm={2}><div><h6>{this.state.heading.Status}</h6></div></Col><Col sm={2}>{this.state.obj.status}</Col></Row>
                                
                                 </div>
                    </Card>

                </div>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return {detail:state.summary};
};
export default connect(mapStateToProps) (SummaryNeededCard);