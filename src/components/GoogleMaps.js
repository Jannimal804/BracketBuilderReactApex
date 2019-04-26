import React, { Component } from "react";
import { render } from 'react-dom';
import Map from "./Map";
import InfoWindow from "./InfoWindow";
import API from "../utility/API";
import { FormGroup, Label, Input, Col, Button, Row } from "reactstrap";

class GoogleMap extends Component {

    constructor() {
        super();
        this.createInfoWindow = this.createInfoWindow.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            search: "",
            lat: "",
            lng: ""
        }
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({ value: event.target.value });
    }

    // Handling the user inputted zipcode once they click "Submit"
    handleSubmit(event) {
        event.preventDefault();
        this.setState({ value: event.target.value });
        API.getFromGeo(this.state.value).then((res) => {
            this.setState({
                lat: res.data.results[0].geometry.location.lat,
                lng: res.data.results[0].geometry.location.lng
            })
        }).catch(err => {
            return err
        })
    }

    // Creates the info window element
    createInfoWindow(e, map, marker) {
        const infoWindow = new window.google.maps.InfoWindow({
            content: '<div id="infoWindow" />',
            position: { lat: e.latLng.lat(), lng: e.latLng.lng() }
        })
        infoWindow.addListener('domready', e => {
            render(<InfoWindow />, document.getElementById('infoWindow'))
            infoWindow.setContent();
        })
        infoWindow.open(map)
    }

    render() {
        return (
            <div>
                {/* <Row>
                    <Col xl="4" lg="6" md="12">
                        <FormGroup>
                            <Label for="pinput">Enter a zipcode to find gyms near you!</Label>
                            <Input type="text" id="pinput" name="pinput" placeholder="Enter Zipcode" />
                            <Button className="gradient-nepal" >Search</Button>{" "}
                        </FormGroup>
                    </Col>
                </Row> */}
                <form>
                    <label>Enter a zipcode to find gyms near you!
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" onClick={this.handleSubmit} />
                </form>
                {this.state.lat && this.state.lng &&
                    <div>
                        <Map
                            // Initial map settings. Zoom and center.
                            id="myMap"
                            options={{
                                center: { lat: (this.state.lat), lng: (this.state.lng) },
                                zoom: 11
                            }}
                            onMapLoad={map => {
                                // Initializing the Google Places Service
                                var service = new window.google.maps.places.PlacesService(map);
                                // Returning JSON data from Google Places based on our query, location, and radius in meters
                                var request = {
                                    query: "jiu jitsu gym",
                                    location: { lat: (this.state.lat), lng: (this.state.lng) },
                                    radius: "10000"
                                }
                                var thisComponent = this;
                                // Creating markers based on JSON data we received
                                service.textSearch(request, function (results, status) {
                                    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                                        for (var i = 0; i < results.length; i++) {
                                            var lat = (results[i].geometry.location.lat())
                                            var lng = (results[i].geometry.location.lng())
                                            var image = {
                                                url: (process.env.PUBLIC_URL + '/kimono.png'),
                                                scaledSize: new window.google.maps.Size(40, 43),
                                                origin: new window.google.maps.Point(0, 0),
                                                anchor: new window.google.maps.Point(0, 32)
                                            }
                                            const marker = new window.google.maps.Marker({
                                                position: { lat: lat, lng: lng },
                                                map: map,
                                                icon: image,
                                            });
                                            // When a marker is clicked an info window pops up
                                            marker.addListener('click', e => {
                                                thisComponent.createInfoWindow(e, map, results, marker)
                                            })
                                        }
                                    }
                                });
                            }}
                        />
                    </div>
                }
            </div>
        )
            ;
    }
}

export default GoogleMap;