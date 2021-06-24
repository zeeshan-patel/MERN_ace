import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap'

import Timer from './Timer'

const EventInfo = () => {
    return (
        <React.Fragment>
            <Container>
                <Row className="align-items-center justify-content-center mt-5">
                    <Col sm={12} className="text-center">
                        <h1 className="text-h1">About ACE</h1>
                    </Col>
                </Row>
                <Row className="justify-content-start">
                    <Col sm={10} md={9} lg={8}>
                        <p className="text-p-eventInfo text-uppercase eventInfo-mr">Launching in</p>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-3">
                    <Timer />
                </Row>

                <Row className="align-items-center justify-content-center mt-3">
                    <Col sm={10} md={9} lg={8}>
                        <p className="text-p-eventInfo">ACE has been around for 10 glorious years now, as a celebration of life, and people - the people who build it , the artists and the stars who win all our hearts and most importantly, the lovely people who keep coming back, the moments they share, the experiences they have and and the strings that keep them connected forever to the 4 best days of their lives. It is you who make ACE the spectacle it is. </p>
                    </Col>
                </Row >
                <Row className="align-items-center justify-content-center mt-3">
                    <Col sm={10} md={9} lg={8}>
                        <p className="text-p-eventInfo"><span class ="text-primary font-weight-bold">ACE</span> Come Join Us.</p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                <Button size="lg" href="/register" variant="primary" className="px-4 py-3">
                    Get Your Ticket
                </Button>
                </Row>
            </Container>
        </React.Fragment >
    );
};

export default EventInfo;       