// import external modules
import React, { Component, Fragment } from "react";
import ContentHeader from "../../components/contentHead/contentHeader";
//import ContentSubHeader from "../../components/contentHead/contentSubHeader";
import CompetitorList from "../../components/competitor/competitor";
import axios from "axios";
import { Row, Col, Container, ListGroup, ListGroupItem, Input, Media, Button, Jumbotron  } from "reactstrap";


class blankPage extends Component {
   state = {
      allCompetitors: null
   }
   componentDidMount() {
      console.log("here");
      const self = this;
      axios.get("/api/competitors").then(function(res) {
         console.log(res.data)
            self.setState({allCompetitors: res.data});
         });     
   }

   render() {
      return (
         
         <Fragment>
             <ContentHeader>Matches</ContentHeader>
            <CompetitorList allCompetitors={this.state.allCompetitors}
            />
            {this.state.allCompetitors.map(user => {
               return user["firstName"]
            })} 
         </Fragment>
      );
   }
}

export default blankPage;