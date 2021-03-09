import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Title_Header_SideBar.css';
const Title_Header_SideBar = (props) => {
    return (
       
            <div className="sidebar_Col_first">
                    {/* <Row className="Row">
                        <Col id="Col_1" sm={2} ><img id="image"  src={props.src} /></Col>
    <Col sm={10} ><h6 id="h6">{props.title_heading}</h6></Col>
                    </Row> */}
                    <div className="Row">
                            <div id="Col_1"><img id="image"  src={props.src} /></div>
                            <div id="Col_1"><h6 id="h6">{props.title_heading}</h6></div>
                    </div>
                    
                </div>
      
    );
}

export default Title_Header_SideBar;
