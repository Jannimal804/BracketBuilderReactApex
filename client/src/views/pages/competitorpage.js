 // import external modules
import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { AdvancedCardData } from "../../../src/views/cards/advancedCardData";


import {
   TabContent,
   TabPane,
   NavLink,
   Row,
   Col,
   Button,
   ListGroup,
   ListGroupItem,
   Form,
   Input,
   FormGroup,
   Card,
   CardSubtitle,
   CardTitle,
   CardText,
   CardImg,
   CardHeader,
   CardBody,
   CardFooter
} from "reactstrap";
import classnames from "classnames";

//importing assets 
import hero from "../../assets/img/gallery/YuasaCover.jpg"
import profilepic from "../../assets/img/gallery/yuasa.jpg"
import match1 from "../../assets/img/gallery/USgrapRVA.jpg"
import ProjectStatsDonutChartCard from "../../components/cards/projectStatsDonutChartCard";


class CompetitorPage extends Component {
   state = {
      activeTab: "1"
   };

   toggle = tab => {
      if (this.state.activeTab !== tab) {
         this.setState({
            activeTab: tab
         });
      }
   };

   
render() {
   return(
      <Fragment>
      <Row>
         <Col xs="12" id="user-profile">
            <Card className="profile-with-cover">
               <div
                  className="card-img-top img-fluid bg-cover height-300"
                  style={{ background: `url("${hero}") 50%` }}
               />
               <Row className="media profil-cover-details">
                  <Col xs="5">
                     <div className="align-self-start halfway-fab pl-4 pt-10">
                        <div className="text-left">
                           <h1 className="card-title text-white" ><b>Rikako Yuasa</b></h1>
                        </div>
                     </div>
                  </Col>
                  <Col xs="2">
                     <div className="align-self-center halfway-fab text-center">
                        <Link to="/pages/user-profile" className="profile-image">
                           <img
                              src={profilepic}
                              className="rounded-circle img-border gradient-summer width-200"
                              alt="Card avatar"
                           />
                        </Link>
                     </div>
                  </Col>
                  <Col s="10">
                     <div className="profile-cover-buttons">
                        <div className="media-body halfway-fab align-self-end">
                           <div className="text-right d-none d-sm-none d-md-none d-lg-block">
                              <Button color="primary" className="btn-raised mr-2">
                                 <i className="fa fa-plus" /> Follow
                              </Button>
                              <Button color="success" className="btn-raised mr-3" >
                                 <i className="fa fa-dashcube"> Message</i>
                              </Button>
                           </div>
                           <div className="text-right">
                              <Button
                                 color="primary"
                                 className="btn-raised mr-2 d-block d-sm-block d-md-block d-lg-none float-right"
                              >
                                 <i className="fa fa-plus" />
                              </Button>
                           </div>
                        </div>
                     </div>
                  </Col>
             </Row>
            </Card>
         </Col>
      </Row>  

      <Row className="row-eq-height">
         <Col sm="12" md="6">
            <Card>
               <CardBody>
                  <CardTitle>Competitor Data</CardTitle>
                  <ListGroup>
                  <ListGroupItem>Belt Level: Black Belt</ListGroupItem>
                  <ListGroupItem>Weight Class: Light Feather</ListGroupItem>
                  <ListGroupItem>Team/Association: Paraestra</ListGroupItem>
                  <ListGroupItem>Favourite Position/Technique: Lasso Guard/Open Guard</ListGroupItem>
                  <ListGroupItem>IBJJF World Champion (2018/2017/2016/2015)</ListGroupItem>
                  <ListGroupItem>IBJJF Asian Championship 2nd Place (2015)</ListGroupItem>
                  </ListGroup>
               </CardBody>
            </Card>
         </Col>
         <Col sm="12" md="6">
            <Card>
               <CardBody>
               <CardTitle>
                  Submission Stats
               </CardTitle>
                <ProjectStatsDonutChartCard
                     projectStatsDonutChartData={AdvancedCardData.ProjectStatsDonutChartData}
                     // cardTitle="Submission Stats"
                     cardSubTitle="Year to Date (all belt levels)"
                  />
                  </CardBody>
            </Card>
         </Col>
      </Row>
      <Row>
      
      </Row>
      <h1>Upcoming Events:</h1>
      <Row className="row-eq-height">
               <Col sm="12" md="4">
                  <Card>
                     <CardImg top width="100%" src={match1} alt="Card cap" />
                     <CardBody>
                        <CardTitle>US Grappling</CardTitle>
                        <CardSubtitle>April 27th, 2019</CardSubtitle>
                        <CardText>
                        Gi and no gi divisions! Ages 4 and up.                    
                        </CardText>
                        <Button className="gradient-purple-bliss">Interested</Button>{" "}
                     </CardBody>
                  </Card>
            </Col>
         </Row>
        
        

   
     
   </Fragment>
   );
 }
}


export default CompetitorPage;