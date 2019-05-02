// import external modules
import React from "react";
import { NavLink } from "react-router-dom";
import { Row, Col, Input, Form, FormGroup, Button, Card, CardImg, CardHeader, CardBody, CardFooter } from "reactstrap";

import imgSrc from "../../assets/img/portrait/medium/avatar-m-1.png";

const LockScreen = props => {
   return (
      <div className="container">
         <Row className="full-height-vh">
            <Col xs="12" className="d-flex align-items-center justify-content-center">
               <Card className="gradient-indigo-purple text-center width-400">
                  <CardHeader>
                     <CardImg alt="element 06" className="m-auto width-100 img-fluid rounded-circle" src={imgSrc} />
                  </CardHeader>
                  <CardBody>
                     <div className="text-center">
                        <h4 className="text-uppercase text-bold-400 white">Unlock User</h4>
                     </div>
                     <Form className="pt-2">
                        <FormGroup>
                           <Col md="12">
                              <Input
                                 type="password"
                                 className="form-control"
                                 name="inputPassword"
                                 id="inputPassword"
                                 placeholder="Password"
                              />
                           </Col>
                        </FormGroup>
                        <FormGroup className="pt-2">
                           <Col md="12">
                              <div className="text-center">
                                 <Button color="danger" block>
                                    Unlock
                                 </Button>                                 
                              </div>
                           </Col>
                        </FormGroup>
                     </Form>
                  </CardBody>
                  <CardFooter>
                     <div className="float-left white">
                        <NavLink exact className="text-white" to="/pages/login">
                           Logout
                        </NavLink>
                     </div>
                     <div className="float-right white">
                        <NavLink exact className="text-white" to="/pages/forgot-password">
                           Forgot Password
                        </NavLink>
                     </div>
                  </CardFooter>
               </Card>
            </Col>
         </Row>
      </div>
   );
};

export default LockScreen;
