import React, {Component} from 'react';
import {Button, Nav, Navbar ,NavItem, MenuItem} from 'react-bootstrap';
import { Row, Col, Input } from 'antd';
import './Content.css'
import header from './Header99.jpg';
const Search = Input.Search
export default class Navs extends Component {
    render() {
        return (
                    <div className="grid1">
                        <div className="imgbox">
                            <img src="https://storage.googleapis.com/storage.thai.run/events/cover/ford-ranger-kanjanaburi-1506862397947.jpg" className="imghd"/>
                        </div>
                        <div className="textcontrol">
                            เขาแผงม้า
                        </div>
                        <div className="inputcontrol">
                                        <Row>
                                            <Col span={18} offset={3}>
                                                <Search  size="large" placeholder="bib number"  
                                                onSearch={value => console.log(value)} />
                                            </Col>
                                        </Row>    
                        </div>   
                    </div>
            );
    }
}