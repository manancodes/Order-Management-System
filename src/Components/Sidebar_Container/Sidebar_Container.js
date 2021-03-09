import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Glob_Container from '../Glob_Container/Glob_Container';
import Sidebar from '../SideBar/Sidebar';
import './Sidebar_Container.css';
class Sidebar_Container extends Component {
    render() {
        return (
            <div>
                <Row id="Row" >
       <Col id="aaaa" sm={2}>
       <Sidebar />
       </Col>
     <Col className="aaa" sm={10}>
     <Glob_Container/>
       </Col>
     </Row>
            </div>
        );
    }
}
    export default Sidebar_Container;