// import external modules
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import {
   Row,
   Col,
   Input,
   Form,
   FormGroup,
   Button,
   Label,
   Card,   
   CardBody,
   CardFooter
} from "reactstrap";

// signUpUser = event => {
//    event.preventDefault();
//    alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
//    userData.setState({
//      firstName: "",
//      lastName: "",
//      beltLevel: "", 
//      weightClass: "",
//      password: "",
//      email: ""
//    });
// }

// if (!userData.email || !userData.password) {
//   return;
// }

// If we have an email and password, run the signUpUser function
// signUpUser(userData.firstName, userData.lastName, userData.beltLevel, userData,weightClass, userData.email, userData.password);
// emailInput.val("");
// passwordInput.val("");


// Does a post to the signup route. If successful, we are redirected to the members page
// Otherwise we log any errors


// fuction handleLoginErr(err) {
// alert(err.responseJSON);
// };



class Register extends Component {
   // state = {
   //    isChecked: true
   // };
   constructor() {
      super();
      this.state = {
        firstName: "",
        lastName: "",
        beltLevel: "",
        weightClass: "",
        email: "",
        password: ""
      };
    }

    handleLoginErr = (err) => {
      alert(err.responseJSON);
   };

   //  signUpUser = (firstName, lastName, beltLevel, weightClass, email, password, e) => {
   //    e.preventDefault()
   //    axios.post("/api/signup", {
   //      firstName: firstName,
   //      lastName: lastName,
   //      beltLevel: beltLevel,
   //      weightClass: weightClass,
   //      email: email,
   //      password: password
   //    }).then(function(data) {
   //      window.location.replace(data);
   //      // If there's an error, handle it by throwing up a bootstrap alert
   //    })
   // }

 
    
    onChange = (e) => {
      e.preventDefault();

      this.setState({ [e.target.name]: e.target.value });
  
    }

   handleChecked = e => {
      this.setState(prevState => ({
         isChecked: !prevState.isChecked
      }));
   };

   onSubmit = (e) => {
      e.preventDefault();
  
      const { firstName, lastName, beltLevel, weightClass, email, password } = this.state;
      console.log(this.state)
  
      axios.post('/api/auth/login', { firstName, lastName, beltLevel, weightClass, email, password })
        .then((result) => {
          localStorage.setItem('jwtToken', result.data.token);
          this.setState({ message: '' });
          this.props.history.push('/')
        })
        .catch((error) => {
          if(error.response.status === 401) {
            this.setState({ message: 'Login failed. Username or password not match' });
          }
         });
      }

   render() {
      const { firstName, lastName, beltLevel, weightClass, email, password } = this.state;
      return (
         <div className="container">
                   <h2> Welcome to Bracket Builder! Use the side menu to explore!</h2> 
            {/* <Row className="full-height-vh">
               <Col xs="12" className="d-flex align-items-center justify-content-center">
                  <Card className="gradient-indigo-purple text-center width-400">
                     <CardBody>
                        <h2 className="white py-4">Register</h2>
                        <Form className="pt-2">
                           <FormGroup>
                              <Col md="12">
                                 <Input
                                    type="text"
                                    className="form-control"
                                    value={firstName}
                                    name="firstName"
                                    id="firstName"
                                    placeholder="First Name"
                                    onChange={this.onChange}
                                    required
                                 />
                              </Col>
                           </FormGroup>
                           <FormGroup>
                           <Col md="12">
                                 <Input
                                    type="text"
                                    className="form-control"
                                    name="lastName"
                                    value={lastName}
                                    onChange={this.onChange}
                                    id="lastName"
                                    placeholder="Last Name"
                                    required
                               />
                              </Col>
                           </FormGroup>
                           <FormGroup>
                              <Col md="12">
                                          <Input type="select" id="beltLevel" name="beltLevel" className="form-control" value={beltLevel} onChange={this.onChange} >
                                             <option value="none" defaultValue="" disabled="">Belt Level</option>
                                             <option value="White">White</option>
                                             <option value="Blue">Blue</option>
                                             <option value="Purple">Purple</option>
                                             <option value="Brown">Brown</option>
                                             <option value="Black">Black</option>
                                          </Input>
                                          </Col>
                                       </FormGroup>
                                       <FormGroup>
                                       <Col md="12">
                                          <Input type="select" id="weightClass" name="weightClass" className="form-control" value={beltLevel} onChange={this.onChange}>
                                             <option value="none" defaultValue="" disabled="">Weight Class</option>
                                             <option value="Light Feather">Light Feather – 53.5 kg (118 lbs)</option>
                                             <option value="Feather">Feather – 58.5 kg (129 lbs)</option>
                                             <option value="Light">Light – 64 kg (141 lbs)</option>
                                             <option value="Middle">Middle – 69 kg (152 lbs)</option>
                                             <option value="Medium Heavy">Medium Heavy – 74 kg (163 lbs)</option>
                                             <option value="video">Heavy – No Maximum Weight</option>
                                          </Input>
                                          </Col>
                                       </FormGroup>
                           <FormGroup>
                              <Col md="12">
                                 <Input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="inputEmail"
                                    placeholder="Email"
                                    value={email} 
                                    onChange={this.onChange}
                                    required
                                 />
                              </Col>
                           </FormGroup>

                           <FormGroup>
                              <Col md="12">
                                 <Input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    id="inputPass"
                                    placeholder="Password"
                                    value={password} 
                                    onChange={this.onChange}
                                    required
                                 />
                              </Col>
                           </FormGroup>

                           <FormGroup>
                              <Row>
                                 <Col md="12">
                                    <div className="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0 ml-3">
                                       <Input
                                          type="checkbox"
                                          className="custom-control-input"
                                          checked={this.state.isChecked}
                                          onChange={this.handleChecked}
                                          id="rememberme"
                                       />
                                       <Label className="custom-control-label float-left white" for="rememberme">
                                          I agree terms and conditions.
                                       </Label>
                                    </div>
                                 </Col>
                              </Row>
                           </FormGroup>
                           <FormGroup>
                              <Col md="12">
                                 <Button type="submit" color="purple" block className="btn-pink btn-raised" onClick={this.onSubmit}>
                                    Submit
                                 </Button>
                                 <Button type="button" color="secondary" block className="btn-raised">
                                    Cancel
                                 </Button>
                              </Col>
                           </FormGroup>
                        </Form>
                     </CardBody>
                     <CardFooter>
                        <div className="float-left">
                           <NavLink to="/pages/forgot-password" className="text-white">
                              Forgot Password?
                           </NavLink>
                        </div>
                        <div className="float-right">
                           <NavLink to="/pages/login" className="text-white">
                              Login
                           </NavLink>
                        </div>
                     </CardFooter>
                  </Card>
               </Col>
            </Row> */}
         </div>
      );
   }
}

export default Register;