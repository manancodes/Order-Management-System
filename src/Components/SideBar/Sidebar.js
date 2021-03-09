import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import './Sidebar.css';
import PieChartIcon from '@material-ui/icons/PieChart';
import Title_Header_SideBar from '../Title_Header_SideBar/Title_Header_SideBar';
import sideBar_Row from '../sideBar_Row/sideBar_Row';
import book from '../Additional_Data/book.png';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';
class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar_Container">
                <Title_Header_SideBar src="https://i.pinimg.com/originals/32/77/b7/3277b760af039619e49d4922093c671a.jpg" title_heading="Order Manangement" />
                <Link to="/">
                <div className="Col_Test selected">
                    {/* <sideBar_Row tag_Title="ABCD" Image={<PieChartIcon />} /> */}
                        <PieChartIcon id="Col__1"/>
                        <h6>Sale Order</h6>
                </div></Link>
                <Link to="/item-detail">
                <div className="Col_Test">
                        <MenuBookIcon id="Col__1"/>
                        <h6>Purchase Order</h6>
                </div></Link>
                <Link to="/summary">
                <div className="Col_Test">
                        <EmojiObjectsIcon id="Col__1"/>
                        <h6>Summary</h6>
                </div></Link>
                <hr />
                <div className="Col_Test">
                        <SettingsIcon id="Col__1"/>
                        <h6>Sign Out</h6>
                </div>
 
                   
            </div>
        );
    }
}

export default Sidebar;