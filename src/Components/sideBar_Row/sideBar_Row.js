import React from 'react';
import { Row,Col } from 'react-bootstrap';
import PieChartIcon from '@material-ui/icons/PieChart';
function sideBar_Row ({Image,tag_Title})  {
    return (
       
        <Row>
            <Col><Image/> </Col>
    <Col><h6>{tag_Title}</h6></Col>
        </Row>
    );
}

export default sideBar_Row;
