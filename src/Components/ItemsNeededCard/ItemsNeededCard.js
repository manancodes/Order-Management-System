import React, { Component } from 'react';
import { Card, Table,Col,Row,Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import './ItemsNeededCard.css';
class ItemsNeededCard extends Component {
    constructor(props) {
        super(props);
        this.state={
            ID:"",
            description:[{id:"",name:"Apple",data:[]},
            {id:"",name:"Oneplus",data:[]},
            {id:"",name:"Nokia",data:[]},
            {id:"",name:"Samsung",data:[]}],
            companyName:"",
            vendor:[
                {id:Math.random()*100000,Ordered:11,Apple:["Iphone 12 Pro Max","Iphone 12 Pro","Iphone 12","Iphone 12 Mini"],
            Oneplus:["OnePlus Nord 5G","OnePlus 5","OnePlus 6","OnePlus 7T"],
            Nokia:["Nokia 255 4G","Nokia 215 4G","Nokia C3","Nokia 701"],
            Samsung:["Samsung Galaxy M21","Samsung Galaxy M31","Samsung Galaxy M51","Samsung Galaxy S20"],test:[]},
        
        
            {id:Math.random()*100000,Ordered:11,Apple:["Iphone 12 Pro Max","Iphone 12 Pro","Iphone 12","Iphone 12 Mini"],
            Oneplus:["OnePlus Nord 5G","OnePlus 5","OnePlus 6","OnePlus 7T"],
            Nokia:["Nokia 255 4G","Nokia 215 4G","Nokia C3","Nokia 701"],
            Samsung:["Samsung Galaxy M21","Samsung Galaxy M31","Samsung Galaxy M51","Samsung Galaxy S20"],test:[]}],
        list:["Select","Iphone 12 Pro Max","Iphone 12 Pro","Iphone 12","Iphone 12 Mini"]
    }
        this.handleSelect = this.handleSelect.bind(this);
      }
      handleSelect=(event)=>{
        // console.log("The Event value is "+event.target.value);
        this.setState({companyName:event.target.value})
        console.log("The state information value is: "+this.state.companyName);
        switch(event.target.value)
        {
            case "Apple": console.log("Working a")
                    var arr=[]
                    this.props.steve.map((value,i)=>{
                          arr.push(value);   
                    })
                    // arr.map((x,i)=> (document.getElementById(`${i}`).innerHTML=x))
                    var arr1=[...this.state.vendor]
                   arr1.map((x)=>{
                       if(x.id == this.state.ID){
                           x.test=arr;
                           console.log("The x.test is "+x.test)
                       }
                       this.setState({vendor:[...arr1]})
                   })
                   
                  
                  break;
            case "Oneplus":console.log("Working b");
                console.log("Working OnePlus");
                var arr=[]
                  this.props.nord.map((value,i)=>{
                        arr.push(value);
                       
                  })
                //   console.log("The arr1 is "+arr1);
                //   arr1.map((x,i)=> ( document.getElementById(`${i}`).innerHTML=`${x}`))
                //   this.setState({list:[...arr1]})
                //   arr1.map((x,index)=> document.getElementById("second_list").innerHTML=x)
                var arr1=[...this.state.vendor]
                arr1.map((x)=>{
                    if(x.id == this.state.ID){
                        x.test=arr;
                        console.log("The x.test is "+x.test)
                    }
                    this.setState({vendor:[...arr1]})
                })
                  break;
            case "Nokia":console.log("Working c");
            console.log("Working OnePlus");
             arr=[]
              this.props.nok.map((value)=>{
                    arr.push(value);
                    
              })
              var arr1=[...this.state.vendor]
                   arr1.map((x)=>{
                       if(x.id == this.state.ID){
                           x.test=arr;
                           console.log("The x.test is "+x.test)
                       }
                       this.setState({vendor:[...arr1]})
                   })
            //   console.log("The arr1 is "+arr);
            //   this.setState({list:[...arr]})
            //   console.log("The Oneplus is"+this.state.Nokia)
            //   arr.map((x,i)=> ( document.getElementById(`${i}`).innerHTML=`${x}`))
              break;
            case "Samsung": console.log("Working c");
            console.log("Working OnePlus");
             arr=[]
              this.props.sam.map((value)=>{
                    arr.push(value);
                    
              })
              var arr1=[...this.state.vendor]
                   arr1.map((x)=>{
                       if(x.id == this.state.ID){
                           x.test=arr;
                           console.log("The x.test is "+x.test)
                       }
                       this.setState({vendor:[...arr1]})
                   })
            //   console.log("The arr1 is "+arr);
            //   this.setState({list:[...arr]})
            //   console.log("The Oneplus is"+this.state.Samsung)
            //   arr.map((x,i)=> ( document.getElementById(`${i}`).innerHTML=`${x}`))
              break;
              default: console.log("Wrong Choice")
              break;
            
       }
   
      }
      KeyTeller=(ID)=>{
        this.setState({ID})
        console.log("The ID is : "+this.state.ID)
      }
    
    render() {
        
        return (
            <div className="ItemsNeededCard">
                <Card  style={{ width: '68rem' }}> 
                    <div className="Heading">
                        <h5>Items Needed</h5>
                    </div>
                    <div>
                        <Table responsive="sm">
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Ordered</th>
                                <th>In-Stock</th>
                                <th>Needed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.itemDisplay.map((value,index)=>(
                                <tr id={value.id} key={value.id} >
                                    <td width="250" >{value.itemName}</td>
                                    <td width="250" >{value.Ordered}</td>
                            <td width="250" >{value.InStock}</td>
                            <td width="250" >{value.Ordered-value.InStock}</td>

                                </tr>
                            ))}
                        </tbody>
                        </Table>
                    </div>
                </Card>
                <Card  style={{ width: '68rem' }}>
                <div className="Heading">
                        <h5>Order</h5>
                    </div>
                    <Row>
                        <Col sm={6}>
                        <div className="form_container">
                                   <Form.Group  as={Col} md="8" controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Full Name" />
                                        <Form.Text className="text-muted">
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group as={Col} md="8" controlId="formBasicEmail">
                                    <Form.Label>E-Mail</Form.Label>
                                    <Form.Control   type="email" placeholder="Enter your Email" />
                                    </Form.Group>
                                    <Form.Group  as={Col} md="8" controlId="formBasicName">
                                    <Form.Label>Phone</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Phone Number" />
                                        <Form.Text className="text-muted">
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group as={Col} md="8" controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder="1234 Main St" />
                                    </Form.Group>
                        </div>
                        </Col>
                        <Col sm={6} id="Col2">
                        <div className="table2">
                        <Table id="Table4" responsive="sm">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Vendor</th>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {this.state.vendor.map((value,index)=>(
                                        <tr  key={value.id}>
                                            <td width="10">{index+1}</td>
                                            <td width="300">
                                            <Form.Group onClick={()=>this.KeyTeller(`${value.id}`)}  onChange={this.handleSelect} as={Col} md="10" controlId="exampleForm.SelectCustomSizeSm">
                                            <Form.Control  as="select" size="sm" custom>
                                                
                                                {
                                                    this.props.annoying.map((x)=>
                                                        // <option onClick={()=>this.props.List(this.state.companyName)} id={x.id} key={x.id}>{x.value}</option>
                                                        <option  id={x.id} key={x.id}>{x.value}</option>
                                                    )
                                                }
                                            </Form.Control>
                                            </Form.Group>
                                            </td>
                                            <td width="540">
                                            <Form.Group as={Col} md="10" controlId="exampleForm.SelectCustomSizeSm">
                                            <Form.Control  as="select" size="sm" custom>
                                           { this.props.annoying.map((x,i)=>
                                           <option id={i} value="0"></option>
                                           )}
                                            
                                            {/* <option id="0" ></option>
                                            <option id="1" ></option>
                                            <option id="2" ></option>
                                            <option id="3" ></option> */}
                                             {value.test.map((x,i)=>(
                                                 <option key={i+100}>{x.trim()!=""?x:0}</option>
                                             ))}
                                           {value.test.map((x)=>console.log("The value of Test from Each row is: "+x))}
                                            {/* <option>{ Object.values(Object.keys(value).find(key=>key===this.state.companyName)).map(x=>x) }</option> */}
                                              {/* {this.state.list.map((data)=>{
                                                   console.log(data);
                                                   return( <option>{data}</option>)
                                                    
                                                   })} */}
                                            </Form.Control>
                                            </Form.Group>
                                            </td>
                                            <td >
                                                 <h6>{value.Ordered}</h6> 
                                                
                                            </td>
                                        </tr>
                                    ))}
                                    
                                </tbody>
                        </Table>
                        </div>
                        <div className="btn1">
                        <Button onClick={this.props.Add}   variant="dark">+ Add Item</Button>{' '}
                        <Button onClick={this.props.Remove} id="bttn"  variant="dark">- Remove Item</Button>{' '}
                        </div>
                        <div className="btn2">
                        <Button  type="submit" variant="dark" size="lg"  block>{' '}
                            Place Order
                        </Button>
                        </div>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        itemDisplay: state.itemList,
        Org: state.vendor,
        info:state.Organisation,
        steve:state.Apple,
        nord:state.Oneplus,
        nok:state.Nokia,
        sam:state.Samsung,
        annoying:state.com,
       
    }
}
const mapDispathToProps=(dispatch)=>{
    return {
        Add:()=>dispatch({type:"Add"}),
        Remove:()=>dispatch({type:"Remove"}),
        List:(name)=>dispatch({type:"List"})
    }
}
export default connect(mapStateToProps,mapDispathToProps)(ItemsNeededCard);