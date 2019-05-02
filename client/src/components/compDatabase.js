// /client/App.js
import React, { Component } from "react";
import axios from "axios";

import { Card, CardBody, CardTitle, Row, Col, Table, FormGroup, Label, Input } from "reactstrap";

class CompDB extends Component {
  // initialize our state 
  state = {
    data: [],
    id: 0,
    first: null,
    last: null,
    belt: null,
    weightclass: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null
  };

  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has 
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  // never let a process live forever 
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  // just a note, here, in the front end, we use the id key of our data object 
  // in order to identify which we want to Update or delete.
  // for our back end, we use the object id assigned by MongoDB to modify 
  // data base entries

  // our first get method that uses our backend api to 
  // fetch data from our data base
  getDataFromDb = () => {
    fetch("http://localhost:3001/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  // our put method that uses our backend api
  // to create new query into our data base
  putDataToDB = (first, last, belt, weightclass) => {
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post("http://localhost:3001/api/putData", {
      id: idToBeAdded,
      first: first,
      last: this.state.last,
      belt: this.state.belt,
      weightclass: this.state.weightclass
    });
  };


  // our delete method that uses our backend api 
  // to remove existing database information
  deleteFromDB = idTodelete => {
    let objIdToDelete = null;
    this.state.data.forEach(dat => {
      if (dat.id == idTodelete) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete("http://localhost:3001/api/deleteData", {
      data: {
        id: objIdToDelete
      }
    });
  };


  // our update method that uses our backend api
  // to overwrite existing data base information
  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    this.state.data.forEach(dat => {
      if (dat.id == idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post("http://localhost:3001/api/updateData", {
      id: objIdToUpdate,
      update: {
        first: updateToApply,
        last: updateToApply,
        belt: updateToApply,
        weightclass: updateToApply
      }
    });
  };


  // here is our UI
  // it is easy to understand their functions when you 
  // see them render into our screen
  render() {
    const { data } = this.state;
    return (
      <div>
        {/* <Row>
              <Col sm="12">
              <Table Striped>
              
              <thead> 
    <tr>
        <th style={{ padding: "10px" }}>First Name</th>
        <th>Last Name</th>
        <th>Belt Class</th>
        <th>Weight Class</th>
    </tr>
    </thead>
   
          {data.length <= 0
            ? "NO DB ENTRIES YET"
            : data.map(dat => (
              
                <tbody key={data.first}>
                  <td>{dat.first} </td> 
                 
                  <td>{dat.last} </td>
                  
                  <td>{dat.belt}</td>
                  
                  <td>{dat.weightclass}</td>
                  
                </tbody>
              ))}
              </Table>
              </Col>
            </Row> */}
        <Row>
          <div>
            <h3
              style={{ marginLeft: "15px" }}>Enter your information!</h3>
            <Col xl="4" lg="4" md="12">

              <input
                type="text"
                id="compinput"
                onChange={e => this.setState({ first: e.target.value })}
                placeholder="First Name"
                style={{ width: "220px", marginBottom: "10px" }}
              />
            </Col>
            <Col xl="4" lg="4" md="12">
              <input
                type="text"
                id="compinput"
                onChange={e => this.setState({ last: e.target.value })}
                placeholder="Last Name"
                style={{ width: "220px", marginBottom: "10px" }}
              />
            </Col>
            {/* <Col xl="4" lg="4" md="12">
          <input
            type="text"
            onChange={e => this.setState({ belt: e.target.value })}
            placeholder="Belt"
            style={{ width: "220px" }}
          />
          </Col> */}
            {/* <input
            type="text"
            onChange={e => this.setState({ weightclass: e.target.value })}
            placeholder="Weight Class"
            style={{ width: "200px" }}
          /> */}
            <Col xl="7" lg="7" md="7">
              <FormGroup>
                <Input type="select" id="smallSelect" name="smallSelect" bsSize="sm"
                  onChange={e => this.setState({ belt: e.target.value })}>
                  <option value="none" defaultValue="" disabled="">
                    Select Belt Level
                      </option>
                  <option value="White">White</option>
                  <option value="Blue">Blue</option>
                  <option value="Purple">Purple</option>
                  <option value="Brown">Brown</option>
                  <option value="Black">Black</option>
                </Input>
              </FormGroup>
            </Col>
            <Col xl="7" lg="7" md="7">
              <FormGroup>
                <Input type="select" id="smallSelect" name="smallSelect" bsSize="sm"
                  onChange={e => this.setState({ weightclass: e.target.value })}>
                  <option value="none" defaultValue="" disabled="">
                    Select Weight Class
                      </option>
                  <option value="Light Feather">Light Feather 53.5kg(118 lbs)</option>
                  <option value="Feather">Feather 58.5kg(129 lbs)</option>
                  <option value="Light">Light 64kg(141 lbs)</option>
                  <option value="Middle">Middle 69kg(152 lbs)</option>
                  <option value="Medium Heavy">Medium Heavy 74kg(163 lbs)</option>
                  <option value="Heavy">No maximum weight</option>
                </Input>
              </FormGroup>
            </Col>
            <Col xl="6" lg="6" md="6">
              <button
                onClick={() => this.putDataToDB(this.state.first)}
                style={{ marginBottom: "20px" }}
              >
                ADD
          </button>
            </Col>
          </div>
        </Row>
        <Row>
          <Col sm="12">
            <Table Striped>

              <thead> <h3>All Competitors</h3>
                <tr>
                  <th style={{ padding: "10px" }}>First Name</th>
                  <th>Last Name</th>
                  <th>Belt Class</th>
                  <th>Weight Class</th>
                </tr>
              </thead>

              {data.length <= 0
                ? "NO DB ENTRIES YET"
                : data.map(dat => (

                  <tbody key={data.first}>
                    <td>{dat.first} </td>

                    <td>{dat.last} </td>

                    <td>{dat.belt}</td>

                    <td>{dat.weightclass}</td>

                  </tbody>
                ))}
            </Table>
          </Col>
        </Row>
      </div>

    );
  }
}

export default CompDB;