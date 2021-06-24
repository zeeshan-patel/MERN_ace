import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';


const Hero = () => {
    return (
        <React.Fragment>
            <Row className="align-items-center justify-content-center hero-mt">
                <Col md={10} className="text-center">
                    <h1 className="mb-4 text-white hero-text-h1">It Starts With Us. </h1>
                    <p className="mb-4 text-white hero-text-p">May 21, 2021 ACE MESCOE</p>
                    <p>
                        <Button size="sm" href="/register" variant="primary" className="px-4 py-3">
                            Register Now
                        </Button>
                    </p>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Hero;
