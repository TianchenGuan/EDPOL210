import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import BadgerBudsNavbar from "./nav/BadgerBudsNavbar";
import BadgerBudsDataContext from "../contexts/BadgerBudsDataContext";

import { Col, Container, Row } from 'react-bootstrap';

export default function BadgerBuds() {


    return (
        <div style={{backgroundColor: '#f8f9fa'}}>
            <BadgerBudsNavbar />
            <br></br>
            <div style={{backgroundColor: '#f8f9fa'}}>
                <BadgerBudsDataContext.Provider>
                    <Outlet />
                </BadgerBudsDataContext.Provider>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <Container fluid={true} style={{position:'fixed', backgroundColor: '#DEDFE4', bottom:'0', padding: '10px', textAlign: 'center', height:'70px'}}>
                    <p>© 2024 by Tianchen Guan. EDPOL 210 Unessay Project.</p>
                    <p style={{marginTop: '-15px'}}>The information provided on this site is for educational and demonstration purposes only.</p>
                </Container></div>
        </div>
    );
}
