import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components';
import harsheen from '../../assets/img/harsheen.jpeg';
import taibah from '../../assets/img/taibah.jpeg';
import arpan from '../../assets/img/arpan.jpeg';

const Styles = styled.div`

.row {

    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    box-sizing: inherit;
}

@media (min-width: 768px)
.col-md-3 {
    flex: 0 0 25%;
    max-width: 25%;
}

@media (min-width: 576px)
.col-sm-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
}

.Upper{
  position: relative;
  box-sizing: inherit;
}

.Lower{
  position: relative;
  box-sizing: inherit;
}

.Lower img{
  width: 100%;
}

img{
  max-width:100%;
}

.Lower .info{
  position: relative;
  display:inline-block;
  bottom:110px;
  background-color: grey;
  padding: 10px 20px;
  width:auto;

}

.Lower .info .name{
  color: #a42a18;
font-size: 16px;
margin-bottom: 0;
font-weight: 600;
text-transform: capitalize;

}

.pos{
  font-size: 12px;
color: white;
text-transform: capitalize;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 14px;
  font-family: "Montserrat", sans-serif;
  margin: 0 0 15px;
  line-height: 24px;
  font-weight: 400;
}


.try{
  margin-top:20px;
  margin-bottom:20px;
  &:hover{

    transition: 0.5s;
    transform: scale(1.1);
    .name{
      color:white;
    }
    .info{
      background-color:red;
    }

  }

  .team-img{
    width: 500px;
    height: 300px;
  }
}
`;

const Organizers = () => {
  return (
    <React.Fragment>
      <Container>
        <Row className="align-items-center justify-content-center mt-5">
          <Col sm={12} className="text-center">
            <h1 className="text-h1">Our Team</h1>
          </Col>
        </Row>

        <Styles>
          <Row className="Row1 justify-content-center" >

            <Col className="try" md={4} sm={6} >

              <Col className="Lower">
                <img src={arpan} alt="temp" className="team-img" />
                <Col className="info">
                  <h5 className="name">Arpan Khuniya</h5>
                  <p className="pos"> Head Website Designer </p>
                </Col>
              </Col>

            </Col>

            <Col className="try" md={4} sm={6} >

              <Col className="Lower">
                <img src={taibah} alt="temp" className="team-img" />
                <Col className="info">
                  <h5 className="name">Taibah Bagwan</h5>
                  <p className="pos"> Head Database and Admin Panel </p>
                </Col>
              </Col>

            </Col>

            <Col className="try" md={4} sm={6} >

              <Col className="Lower">
                <img src={harsheen} alt="temp" className="team-img" />
                <Col className="info">
                  <h5 className="name">Harsheen Rajpal</h5>
                  <p className="pos"> Head Graphic Designer and Database </p>
                </Col>
              </Col>
            </Col>
          </Row>
        </Styles>
      </Container>
    </React.Fragment >
  );
};

export default Organizers;
