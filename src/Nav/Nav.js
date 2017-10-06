import React, {Component} from 'react';
import {Button, Nav, Navbar ,NavItem, MenuItem} from 'react-bootstrap';
import { Affix } from 'antd';
import './Nav.css'
export default class Navs extends Component {
    render() {
        return (
          <Affix> 
              <Navbar inverse collapseOnSelect>
                  <Navbar.Header>
                    <Navbar.Brand>
                      <a href="#">THAI.RUN</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                  </Navbar.Header>
                <Navbar.Collapse>
                  <Nav pullRight>
                    <NavItem eventKey={1} href="#">All Event</NavItem>
                    <NavItem eventKey={2} href="#">Photos</NavItem>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
          </Affix>
        );
    }
}